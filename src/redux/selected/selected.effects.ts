import { Injectable } from '@angular/core';

// Ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

// Redux
import { SELECT_SUBREDDIT, SelectSubredditAction } from './selected.actions';
import { RequestPostsAction } from './../post/post.actions';

// Rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SelectedEffects {

  @Effect() requestPosts$: Observable<Action> =
            this.actions$.ofType(SELECT_SUBREDDIT)
                .pipe(
                  map( (action: SelectSubredditAction) => {
                    return new RequestPostsAction(action.selected.name);
                  })
                );

  constructor(
    private actions$: Actions
  ) {}

}
