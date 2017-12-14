export default function rootReducer(
  currentState = {
    assignments: [],
    chores: [],
    currentChore: null,
    userInfo: null,
    householdInfo: null,
    errorMsg: null
  },
  action
) {
  switch (action.type) {
    case 'GET_CHORES':
      return { ...currentState, chores: action.chores };
    case 'GET_ONE_CHORE':
      return {
        ...currentState,
        currentChore: action.currentChore,
        errorMsg: action.errorMsg
      };
    case 'CREATE_CHORE':
      return {
        ...currentState,
        currentChore: action.currentChore,
        chores: [action.currentChore, ...currentState.chores],
        errorMsg: action.errorMsg
      };
    case 'UPDATE_CHORE':
      return {
        ...currentState,
        currentChore: action.currentChore,
        chores: currentState.chores.map(
          choreItem =>
            choreItem.id === action.currentChore.id
              ? action.currentChore
              : choreItem
        ),
        errorMsg: action.errorMsg
      };
    case 'CREATE_HOUSEHOLD':
      return {
        ...currentState,
        householdInfo: action.householdInfo,
        errorMsg: action.errorMsg
      };
    case 'GET_ASSIGNMENTS':
      return { ...currentState, assignments: action.assignments };
    case 'GET_USER_BY_TOKEN':
      return {
        ...currentState,
        userInfo: action.userInfo
      };
    case 'CREATE_USER':
      return {
        ...currentState,
        userInfo: action.userInfo
      };
    case 'UPDATE_USER':
      return {
        ...currentState,
        userInfo: action.userInfo,
        errorMsg: action.errorMsg
      };
    case 'GET_TOKEN':
      return {
        ...currentState,
        userInfo: action.userInfo,
        errorMsg: action.errorMsg
      };
    case 'REMOVE_TOKEN':
      return {
        ...currentState,
        userInfo: action.userInfo
      };
    case 'UPDATE_ERROR':
      return {
        ...currentState,
        errorMsg: action.errorMsg
      };

    default:
      return currentState;
  }
}
