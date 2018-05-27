import { Injectable } from '@angular/core';

// Ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

// Rxjs
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

// Redux
import {
  REQUEST_POSTS,
  AddPostsAction,
  RequestPostsAction
} from './post.actions';

// Services
import { PostsService } from './../../app/services/posts.service';

@Injectable()
export class PostEffects {

  @Effect() requestPosts$: Observable<Action> = this.actions$.ofType(REQUEST_POSTS)
  .pipe(
    mergeMap((action: RequestPostsAction) => {
      return this.postsService.getPosts(action.topic)
      .pipe(
        map((response: any) => {
          return new AddPostsAction(response.data.children.map(item => {
            return item.data;
          }));
        })
      );
    })
  );

  constructor(
    private postsService: PostsService,
    private actions$: Actions
  ) {}
}
