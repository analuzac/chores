export default function rootReducer(
  currentState = {
    assignments: [],
    chores: [],
    users: [], //mccode
    currentChore: null,
    currentAssignment: null, //mccode
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
        errorMsg: action.errorMsg
      };
    case 'UPDATE_CHORE':
      return {
        ...currentState,
        currentChore: action.currentChore,
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

    case 'UPDATE_ASSIGNMENT_STATE':
      let updatedAssignments = currentState.assignments;
      console.log(
        'INSIDE RR UPDATESTATE',
        updatedAssignments,
        action.currentAssignment
      );
      updatedAssignments = updatedAssignments.filter(
        assignment => assignment.assignmentId !== action.currentAssignment.id
      );
      console.log('INSIDE RR UPDATESTATE', updatedAssignments);

      return {
        ...currentState,
        currentAssignment: action.currentAssignment,
        assignments: updatedAssignments,
        errorMsg: action.errorMsg
      };
    case 'UPDATE_ASSIGNMENT': //mccode
      console.log(
        'REDUCER ACTION_ASSIGNMENTS.............',
        action.currentAssignment
      );
      console.log('REDUCER STATE.............', currentState.assignments);

      //  console.log('????', currentState.assignments.map(assignment => (assignment.id === action.currentAssignment.id ? action.currentAssignment : assignment)));
      // let newAssignments = currentState.assignments;
      let scope = {};
      /*
  assignmentId
  choreId
  dueDate
  firstName
  householdId
  image
  instructions
  points
  status
  type
  userId
  */
      console.log(
        'CURRENT USERS IN STATE',
        currentState.users,
        currentState.chores
      );
      console.log('CURRENT ASSMGT', currentState.assignments);
      let theUser = currentState.users.filter(user => {
        //console.log('COMPARE', user.userId, action.currentAssignment.assignedUserId);
        if (user.userId === action.currentAssignment.assignedUserId) {
          //console.log('return', user);
          return user;
        }
      });

      console.log('THEUSER', theUser);

      let theChore = currentState.assignments.filter(assignment => {
        if (assignment.choreId === action.currentAssignment.choreId) {
          return assignment;
        }
      });
      console.log('THE CHORE', theChore);
      scope.assignmentId = action.currentAssignment.id;
      scope.choreId = action.currentAssignment.choreId;
      scope.firstName = theUser[0].firstName;
      scope.householdId = theUser[0].householdId;
      scope.userId = theUser[0].userId;
      // chore stuff
      scope.image = theChore[0].image;
      scope.instructions = theChore[0].instructions;
      scope.points = theChore[0].points;
      scope.status = theChore[0].status;
      scope.type = theChore[0].type;

      // 2) Create a new arry of 'rentals' based on the 'rental id' and 'rental'
      // newAssignments = newAssignments.map(
      //   assignment =>
      //     assignment.id === action.currentAssignment.id //
      //       ? action.currentAssignment //(message.starred = true) //
      //       : assignment
      // );
      console.log('SCOPE', scope);

      const newAssignments = currentState.assignments.map(assignment => {
        // if (assignment.assignmentId === action.currentAssignment.id) {
        //   assignment = action.currentAssignment;
        // }
        if (assignment.assignmentId === scope.assignmentId) {
          assignment = scope;
        }
        return assignment;
      });

      console.log('scope VS array', scope, newAssignments);
      return {
        ...currentState,
        currentAssignment: action.currentAssignment,
        //assignments: currentState.assignments.map(assignment => (assignment.id === action.currentAssignment.id ? action.currentAssignment : assignment)),
        // 1) get the current state of 'assignments'
        assignments: newAssignments,
        errorMsg: action.errorMsg
      };
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
    case 'GET_USERS': //mccode
      console.log('INSIDE RR GET_USERS', action.users);
      return {
        ...currentState,
        users: action.users,
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
