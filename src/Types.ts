import {
    User,
    Activity,
    Message,
    Typing,
    IBotConnection,
    EventActivity,
    IActivity
} from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';

export interface FormatOptions {
    showHeader?: boolean;
}

export type ActivityOrID = {
    activity?: Activity;
    id?: string;
};

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

export interface ActivityWithBot extends IActivity {
    type: 'botName';
    text?: string;
    botName: string;
    from: User;
    // name?: string;
    // value?: string;
}

export interface MyTyping extends IActivity {
    type: 'typing';
    text?: string;
}

export type MyActivity = Message | MyTyping | ActivityWithBot;

export interface IMyBotConnection extends IBotConnection {
    activity$: Observable<MyActivity>;
    postActivity(activity: MyActivity): Observable<string>;
}