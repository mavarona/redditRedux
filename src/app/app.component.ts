import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// Ngrx
import { Store } from '@ngrx/store';

// Redux
import { AppState } from './../redux/app.state';
import { Post } from './../redux/post/post.model';
import { SelectSubredditAction } from './../redux/selected/selected.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topics: Array<string> = ['angular2', 'reactjs', 'vuejs'];
  selectTopic: FormControl;

  posts: Array<Post> = new Array<Post>();

  constructor (
    private _store: Store<AppState>
  ) {

    this.selectTopic = new FormControl('', [Validators.required]);

    this.selectTopic.valueChanges
    .subscribe((value) => {
      const action = new SelectSubredditAction({
        name: value
      });
      this._store.dispatch(action);
    });

    this._store.select('posts')
        .subscribe((posts) => {
          this.posts = posts;
          console.log(this.posts);
        });

  }

}
