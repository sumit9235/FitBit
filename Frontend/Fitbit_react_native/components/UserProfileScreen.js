import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const navigateToFitnessGoals = async () => {
    // Prepare data for the POST request
    const userData = {
      name,
      age,
      gender,
      height,
      weight,
      email,
      contactNumber,
    };

    // Replace this with your actual backend API endpoint
    const apiUrl = 'https://dummy-api-url.com/save-user-data';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Data saved successfully, navigate to the FitnessGoals screen
        navigation.navigate('FitnessGoals');
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
      />
      <Button title="Go to Fitness Goals" onPress={navigateToFitnessGoals} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '80%',
  },
  picker: {
    width: '80%',
    marginBottom: 10,
  },
});

export default UserProfileScreen;
