// models
import { Post } from './post.model';

// Ngrx
import { Action } from '@ngrx/store';

// Const Actions
export const REQUEST_POSTS = '[POST] REQUEST_POSTS';
export const ADD_POSTS = '[POST] ADD_POSTS';

export class RequestPostsAction implements Action {

  readonly type = REQUEST_POSTS;

  constructor (
    public topic: string
  ) {}

}

export class AddPostsAction implements Action {

  readonly type = ADD_POSTS;

  constructor(
    public posts: Array<Post>
  ) {}

}

export type AllActions = RequestPostsAction | AddPostsAction;
