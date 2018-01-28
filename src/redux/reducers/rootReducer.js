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
    case 'GET_HOUSEHOLD':
      return {
        ...currentState,
        householdInfo: action.householdInfo,
        errorMsg: action.errorMsg
      };
    case 'GET_ASSIGNMENTS':
      return { ...currentState, assignments: action.assignments };
    // CREATE ASSIGNMENT //////////
    case 'CREATE_ASSIGNMENT2':
      console.log('CREATE A2');
      // 1 need the state of  assignments

      let bAssignments = currentState.assignments;

      //2 create a scope object to represent joining of tables
      let bScope = {};
      console.log('RR', currentState.userInfo);
      // 2a. get the current user from user Array in state
      let bUser = currentState.userInfo;

      // currentState.users.filter(user => {
      //   //console.log('COMPARE', user.userId, action.currentAssignment.assignedUserId);
      //   if (user.userId === action.currentAssignment.assignedUserId) {
      //     //console.log('CCreturn USER', user);
      //     return user;
      //   }
      // });

      // 2b. get the current chore from chore Array in state
      let bChore = currentState.currentChore;

      // = currentState.chores.filter(chore => {
      //   if (chore.id === action.currentAssignment.choreId) {
      //     return chore;
      //   }
      // });

      // so far we have
      // bAssignments for array of Assignment
      // bScope to represent the Assignment Object
      // bUser for the User object
      // bChore for the Chore object

      //console.log('aChore', aChore);
      // 2c. add to scope()

      // action item
      bScope.assignmentId = action.currentAssignment.id;
      bScope.choreId = action.currentAssignment.choreId;

      // user info
      bScope.firstName = bUser.firstName;
      bScope.householdId = bUser.householdId;
      bScope.userId = bUser.userId;
      // chore stuff
      bScope.image = bChore.image;
      bScope.instructions = bChore.instructions;
      bScope.points = bChore.points;
      bScope.status = bChore.status;
      bScope.type = bChore.type;

      // 3. ADD the assignment to the array of assignments
      //console.log('CR scope', aScope);
      bAssignments.push(bScope);

      return {
        ...currentState,
        // currentAssignment: action.currentAssignment,
        assignments: bAssignments,
        errorMsg: action.errorMsg
      };

    //////////////////////////////////////////////////////////////////
    case 'CREATE_ASSIGNMENT':
      // 1. create new Array of state of assignments
      let theAssignments = currentState.assignments;

      // 2. create a scope object to represent joining of tables
      let aScope = {};

      // 2a. get the current user from user Array in state
      let aUser = currentState.users.filter(user => {
        //console.log('COMPARE', user.userId, action.currentAssignment.assignedUserId);
        if (user.userId === action.currentAssignment.assignedUserId) {
          //console.log('CCreturn USER', user);
          return user;
        }
      });

      //console.log('ARRY VS CC', currentState.chores, action.currentAssignment);

      // 2b. get the current chore from chore Array in state
      let aChore = currentState.chores.filter(chore => {
        if (chore.id === action.currentAssignment.choreId) {
          return chore;
        }
      });

      //console.log('aChore', aChore);
      // 2c. add to scope()

      aScope.assignmentId = action.currentAssignment.id;
      aScope.choreId = action.currentAssignment.choreId;
      aScope.firstName = aUser[0].firstName;
      aScope.householdId = aUser[0].householdId;
      aScope.userId = aUser[0].userId;
      // chore stuff
      aScope.image = aChore[0].image;
      aScope.instructions = aChore[0].instructions;
      aScope.points = aChore[0].points;
      aScope.status = aChore[0].status;
      aScope.type = aChore[0].type;

      // 3. ADD the assignment to the array of assignments
      //console.log('CR scope', aScope);
      theAssignments.push(aScope);

      ////console.log('RR INSIDE CR', action.currentAssignment);
      return {
        ...currentState,
        currentAssignment: action.currentAssignment,
        assignments: theAssignments,
        errorMsg: action.errorMsg
      };

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
      console.log('GET_USER_BY_TOKEN', action.userInfo);
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
      //console.log('INSIDE RR GET_USERS', action.users);
      return {
        ...currentState,
        users: action.users,
        errorMsg: action.errorMsg
      };
    case 'GET_TOKEN':
      return {
        ...currentState,
        userInfo: action.userInfo,
        assignments: [],
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
