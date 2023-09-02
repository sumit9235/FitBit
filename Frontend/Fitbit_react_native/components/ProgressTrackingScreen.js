import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProgressTrackingScreen = () => {
  const navigation = useNavigation();

  // Example progress data (you can replace this with your data)
  const goals = [
    { title: 'Workout', target: 150, completed: 75 },
    { title: 'Diet', target: 1800, completed: 1200 },
  ];

  const redirectToUserProfile = () => {
    navigation.navigate('UserProfileScreen'); // Replace 'UserProfile' with your actual profile screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      {goals.map((goal, index) => (
        <View key={index} style={styles.goalContainer}>
          <Text>{`Goal: ${goal.title}`}</Text>
          <Text>{`Target: ${goal.target}`}</Text>
          <Text>{`Completed: ${goal.completed}`}</Text>
          <progress
            style={styles.progress}
            max={goal.target}
            value={goal.completed}
          ></progress>
        </View>
      ))}

      {/* Button to redirect to User Profile Screen */}
      <Button
        title="Go to User Profile"
        onPress={redirectToUserProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  goalContainer: {
    marginBottom: 20,
  },
  progress: {
    width: 200,
  },
});

export default ProgressTrackingScreen;
