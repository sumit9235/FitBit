// Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProgressTrackingScreen from '../components/ProgressTrackingScreen'; // Import your ProgressTrackingScreen
import FitnessGoalsScreen from '../components/FitnessGoalsScreen';
import UserProfileScreen from '../components/UserProileScreen';
import WorkoutLogScreen from '../components/HandelGoalsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfileScreen">
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="FitnessGoals" component={FitnessGoalsScreen} />
        <Stack.Screen name="ProgressTracking" component={ProgressTrackingScreen} />
        <Stack.Screen name="HandelGoals" component={WorkoutLogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
