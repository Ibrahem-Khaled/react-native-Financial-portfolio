import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Congrats = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="bounceIn" iterationCount="infinite" direction="alternate" style={styles.congratsText}>
        Congratulations! 🎉
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Congrats;
