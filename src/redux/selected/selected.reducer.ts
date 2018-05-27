// actions
import { AllActions, SELECT_SUBREDDIT} from './selected.actions';

// models
import { Selected } from './selected.model';

// const
const initialState: Selected = { name: '' };

export function selectedReducer(state: Selected = initialState, action: AllActions): Selected {

  if (action === null) {
    return state;
  }

  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.selected;
    default:
      return state;
  }

}
