import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FitnessGoalsScreen = () => {
  const navigation = useNavigation();
  const [goalType, setGoalType] = useState('Weight Loss');
  const [target, setTarget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [goals, setGoals] = useState([]);

  const handleCreateGoal = () => {
    const newGoal = {
      goalType,
      target,
      timeline,
    };

    // Update the local goals array with the new goal
    setGoals([...goals, newGoal]);

    // Reset the fields after creating
    setGoalType('Weight Loss');
    setTarget('');
    setTimeline('');
  };

  const handleNavigateToAnotherScreen = () => {
    // You can navigate to another screen here
    // For example, navigate to 'SomeOtherScreen'
    navigation.navigate('HandelGoals');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Fitness Goal</Text>
      <Picker
        selectedValue={goalType}
        style={styles.picker}
        onValueChange={(itemValue) => setGoalType(itemValue)}
      >
        <Picker.Item label="Weight Loss" value="Weight Loss" />
        <Picker.Item label="Muscle Gain" value="Muscle Gain" />
        <Picker.Item label="Endurance" value="Endurance" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Target"
        value={target}
        onChangeText={setTarget}
      />
      <TextInput
        style={styles.input}
        placeholder="Timeline"
        value={timeline}
        onChangeText={setTimeline}
      />
      <Button title="Create Goal" onPress={handleCreateGoal} />

      <Text style={styles.subTitle}>Current Goals:</Text>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text>Goal Type: {item.goalType}</Text>
            <Text>Target: {item.target}</Text>
            <Text>Timeline: {item.timeline}</Text>
          </View>
        )}
      />

      {/* Add another button to navigate to another screen */}
      <Button title="Navigate to Handel Goals" onPress={handleNavigateToAnotherScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  picker: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  goalItem: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default FitnessGoalsScreen;
