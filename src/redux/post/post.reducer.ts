
// actions
import { AllActions, ADD_POSTS } from './post.actions';

// models
import { Post } from './post.model';

// const
const initialState: Array<Post> = new Array<Post>();

export function postReducer(state: Array<Post> = initialState, action: AllActions): Array<Post> {

  if (action === null) {
    return state;
  }

  switch (action.type) {

    case ADD_POSTS: {
      return action.posts;
    }

    default: {
      return state;
    }

  }

}
