// InputField.js
import React from 'react';
import { TextInput, View, Text, Switch, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText, isSwitchOn, onSwitchChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          accessibilityLabel={`${label} Input`}
        />
        <Text style={styles.unitText}>{isSwitchOn ? 'Square Meters' : 'Square Feet'}</Text>
      </View>
      <Switch
        value={isSwitchOn}
        onValueChange={onSwitchChange}
        accessibilityLabel={`Switch to ${isSwitchOn ? 'Square Meters' : 'Square Feet'}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  unitText: {
    marginLeft: 10,
    fontSize: 14,
  },
});

export default InputField;
