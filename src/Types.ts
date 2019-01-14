import {
  User,
  Activity,
  Message,
  Typing,
  IBotConnection,
  EventActivity,
  IActivity,
  ConnectionStatus
} from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface FormatOptions {
  showHeader?: boolean;
}

export type ActivityOrID = {
  activity?: MyActivity;
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

export type MyActivity = Message | MyTyping | ActivityWithBot | Activity;

export interface IMyBotConnection {
  connectionStatus$: BehaviorSubject<ConnectionStatus>;
  activity$: Observable<MyActivity>;
  end(): void;
  referenceGrammarId?: string;
  postActivity(activity: MyActivity): Observable<string>;
}
