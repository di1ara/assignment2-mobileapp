// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Student: Dilara Yalniz</Text>
      <Text style={styles.id}>Student ID: 101376617</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    marginBottom: 8,
  },
  id: {
    fontSize: 18,
  },
});

export default AboutScreen;
