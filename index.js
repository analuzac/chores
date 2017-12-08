import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Container } from 'native-base';

// HEADER:
import Header from './src/components/header';
// FOOTER:

//  USER:
import LogIn from './src/components/LogIn';
import SignUp from './src/components/SignUp';
import UserProfileView from './src/components/UserProfileView';
import UserProfileUpdate from './src/components/UserProfileUpdate';

// HOUSEHOLD:
import JoinHousehold from './src/components/JoinHousehold';
import RegisterHousehold from './src/components/RegisterHousehold';
import HouseholdProfileView from './src/components/HouseholdProfileView';
import HouseholdProfileUpdate from './src/components/HouseholdProfileUpdate';

// CHORES:
import ChoreProfileAdd from './src/components/ChoreProfileAdd';
import ChoreProfileView from './src/components/ChoreProfileView';
import ChoreProfileUpdate from './src/components/ChoreProfileUpdate';
//import ChoreLibrary from './src/components/ChoreLibrary';

// ASSIGNMENTS:
//
//
//

let esoEso = {
  uno: 'Bailando',
  dos: 'ChaChaCha'
};

// Create a Component
const App = () =>
  <Container>
    <Header headerText={'ChoreZap'} />
    <HouseholdProfileUpdate
      leHouse={{
        name: 'Pokemon World',
        description: 'We are a world of beautiful exotic creatures',
        members: [
          { name: 'Pikachu', points: 150 },
          { name: 'Eevee', points: 200 },
          { name: 'Charmander', points: 50 }
        ]
      }}
    />
  </Container>;

/* <UserProfileView /> */

// {/* <UserProfileView
//   leUser={{
//     name: 'Pikachu',
//     email: 'pika@chu.com',
//     household: 'Pokemon',
//     role: 'Head of Household',
//     pointsAwarded: 100,
//     pointsReedemed: 50
//   }}
// /> */}

// {/* <HouseholdProfileView
//   leHouse={{
//     name: 'Pokemon World',
//     description: 'We are a world of beautiful exotic animals',
//     members: [{name:'Pikachu', points: 150}, {name: 'Eevee', points: 200}, {name: 'Charmander', points: 50}]
//   }}
// /> */}

// <ChoreProfileView
//   leChore={{
//     type: 'Floors',
//     instructions: 'ChaChaCha while sweeping',
//     points: 1,
//     status: 'active'
//   }}
// />

// Render it to the device
AppRegistry.registerComponent('chores', () => App); //AppRegistry is only used in the Root component
