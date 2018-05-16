
import * as React from 'react'
import * as ReactDOM from 'react-dom';

export interface PortalProps {
  children: any,
  node?: any,
}

export class Portal extends React.Component<PortalProps, {}> {
  private defaultNode: HTMLElement
  private portal: any

  componentDidMount() {
    this.renderPortal();
  }

  componentDidUpdate(props: PortalProps) {
    this.renderPortal();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node);
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
    this.portal = null;
  }

  renderPortal(props?: PortalProps) {
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    let children = this.props.children;
    // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
    if (typeof this.props.children.type === 'function') {
      children = React.cloneElement(this.props.children);
    }

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.props.node || this.defaultNode
    );
  }

  render(): any {
    return null;
  }
}