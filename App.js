import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import ModelContainer from './src/components/Model';

export default function App() {
  const [model, setModel] = useState("Full Skateboard")
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ModelContainer modelName={model} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
