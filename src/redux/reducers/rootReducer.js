export default function rootReducer(
  currentState = {
    assigments: [],
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
    case 'CREATE_USER':
      return {
        ...currentState,
        userInfo: action.userInfo
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