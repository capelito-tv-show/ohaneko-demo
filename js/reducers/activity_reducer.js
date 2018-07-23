import { FETCH_ALL_ACTIVITIES } from '../actions/type'

const INITIAL_STATE = {
  allActivities: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_ACTIVITIES:
      return { ...state, allActivities: action.payload }
    default:
      return state
  }
}
