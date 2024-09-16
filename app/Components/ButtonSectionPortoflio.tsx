import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {ButtonSectionPortoflioProps} from '../../interfaces/interfaces'


const ButtonSectionPortoflio: React.FC<ButtonSectionPortoflioProps> = ({
  styles,
  navigation,
  agreement,
  handleCreateGoal,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack} accessibilityLabel="Back Button">
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.createGoalButton,
          { backgroundColor: agreement ? 'rgba(98, 94, 238, 1)' : 'rgba(233, 233, 233, 1)' },
        ]}
        disabled={!agreement}
        onPress={handleCreateGoal}
        accessibilityLabel="Create Goal Button"
      >
        <Text style={[styles.createGoalButtonText, { color: agreement ? 'white' : 'rgba(188, 188, 188, 1)' }]}>
          Create Goal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSectionPortoflio;
