import { FETCH_COMMENTS } from '../actions/types';
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_COMMENTS:
    return { ...state, ...payload }

  default:
    return state
  }
}
