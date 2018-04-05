import * as React from 'react';
import { Activity, Attachment, AttachmentLayout } from 'botframework-directlinejs';
import { AttachmentView } from './Attachment';
import { Carousel } from './Carousel';
import { FormattedText } from './FormattedText';
import { FormatState, SizeState } from './Store';
import { IDoCardAction } from './Chat';
import { FormView } from './CustomViews/FormView';
import { TableView } from './CustomViews/TableView';
import { ChartView } from './CustomViews/ChartView';

const Attachments = (props: {
    attachments: Attachment[],
    attachmentLayout: AttachmentLayout,
    format: FormatState,
    size: SizeState,
    onCardAction: IDoCardAction,
    onImageLoad: () => void
}) => {
    const { attachments, attachmentLayout, ... otherProps } = props;
    if (!attachments || attachments.length === 0)
        return null;
    return attachmentLayout === 'carousel' ?
        <Carousel
            attachments={ attachments }
            { ... otherProps }
        />
    : 
        <div className="wc-list">
            { attachments.map((attachment, index) =>
                <AttachmentView
                    key={ index }
                    attachment={ attachment }
                    format={ props.format }
                    onCardAction={ props.onCardAction }
                    onImageLoad={ props.onImageLoad }
                />
            ) }
        </div>
}

export interface ActivityViewProps {
    format: FormatState,
    size: SizeState,
    activity: Activity,
    onCardAction: IDoCardAction,
    onImageLoad: () => void
}

export class ActivityView extends React.Component<ActivityViewProps, {}> {
    constructor(props: ActivityViewProps) {
        super(props)
    }

    shouldComponentUpdate(nextProps: ActivityViewProps) {
        const { activity, format, size } = this.props

        const isExpanded = (activityData: any) => 
            (activityData.attachmentLayout && activityData.attachmentLayout === 'carousel')
            || (activityData.channelData !== null)

        // if the activity changed, re-render
        return activity !== nextProps.activity
        // if the format changed, re-render
            || format !== nextProps.format
        // if it's a carousel and the size changed, re-render
            || (activity.type === 'message'
                && isExpanded(activity)
                && size !== nextProps.size);
    }

    render() {
        const { activity, ... props } = this.props;
        // console.log(activity);

        switch (activity.type) {
            case 'message':
                return (
                    <div>
                        <FormattedText
                            text={ activity.text }
                            format={ activity.textFormat }
                            onImageLoad={ props.onImageLoad }
                        />
                        {activity.channelData 
                        && activity.channelData.type === "form" 
                        && typeof(activity.channelData.data) === 'string'
                        && 
                        <FormView 
                            formType={0}
                            channelData={activity.channelData}
                            size={ props.size }
                        />}
                        {activity.channelData
                        && activity.channelData.type === "table"
                        &&
                        <TableView
                            channelData={activity.channelData}
                            size={ props.size }
                        />}
                        {activity.channelData
                        && activity.channelData.type === "chart"
                        &&
                        <ChartView
                            channelData={activity.channelData}
                            size={ props.size }
                        />}
                        <Attachments
                            attachments={ activity.attachments }
                            attachmentLayout={ activity.attachmentLayout }
                            format={ props.format }
                            onCardAction={ props.onCardAction }
                            onImageLoad={ props.onImageLoad }
                            size={ props.size }
                        />
                    </div>
                );

            case 'typing':
                return <div className="wc-typing"/>;
        }
    }
}