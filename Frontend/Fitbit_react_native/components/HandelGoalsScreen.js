import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WorkoutLogScreen = () => {
  const navigation = useNavigation();
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [workoutLogs, setWorkoutLogs] = useState([]); // Store logged activities

  const handleAddActivity = () => {
    // Add the logged activity to the list
    if (activity && duration) {
      const newActivityLog = { activity, duration };
      setWorkoutLogs([...workoutLogs, newActivityLog]);

      // Clear input fields
      setActivity('');
      setDuration('');
    }
  };

  const Navigate_to_ProgressTracking = () => {
    // Navigate to another screen for adding activities
    navigation.navigate('ProgressTracking');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Workout Log</Text>
      <TextInput
        style={styles.input}
        placeholder="Activity Name"
        value={activity}
        onChangeText={setActivity}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <Button title="Add Activity" onPress={handleAddActivity} />

      <Button title="ProgressTracking" onPress={Navigate_to_ProgressTracking} />
      
      {/* Display the logged activities */}
      {workoutLogs.map((log, index) => (
        <View key={index} style={styles.activityLog}>
          <Text>{`Activity: ${log.activity}`}</Text>
          <Text>{`Duration: ${log.duration} minutes`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  activityLog: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default WorkoutLogScreen;
