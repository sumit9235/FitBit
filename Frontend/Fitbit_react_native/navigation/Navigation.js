// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from '../components/UserProfileScreen';
import FitnessGoalsScreen from '../components/FitnessGoalsScreen';
import ActivityLoggingScreen from '../components/ActivityLoggingScreen';
import ProgressTrackingScreen from '../components/ProgressTrackingScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfile">
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="FitnessGoals" component={FitnessGoalsScreen} />
        <Stack.Screen name="ActivityLogging" component={ActivityLoggingScreen} />
        <Stack.Screen name="ProgressTracking" component={ProgressTrackingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
