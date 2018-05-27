// models
import { Selected } from './selected.model';

// Ngrx
import { Action } from '@ngrx/store';

// Const Actions
export const SELECT_SUBREDDIT = '[SELECTED] SELECT_SUBREDDIT';

export class SelectSubredditAction implements Action {

  readonly type = SELECT_SUBREDDIT;

  constructor (
    public selected: Selected
  ) {}

}

export type AllActions = SelectSubredditAction;
