import React from 'react';
import { Image, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useFormContext } from '../Store/Store';
import {CreateGoalProps} from '../../interfaces/interfaces'

const CreateGoal: React.FC<CreateGoalProps> = ({ styles }) => {
  const { formData, updateFormData } = useFormContext();
  const goalName = formData.goalName || '';

  return (
    <View>
      <Text style={styles.title}>Create a Goal</Text>
      <Text style={styles.subtitle}>
        Write the name of the item or experience you’re saving for.
      </Text>

      <LinearGradient
        colors={['rgba(216, 215, 255, 1)', 'rgba(242, 241, 255, 1)']}
        style={styles.imageContainer}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{ padding: 20, backgroundColor: 'rgba(255, 244, 216, 1)', borderRadius: 50 }}
        >
          <Image source={require('../images/bank.png')} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <Ionicons name="pencil" size={18} color="#625EEE" style={styles.editIcon} />
      </LinearGradient>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Goal Name"
          value={goalName}
          onChangeText={(text) => updateFormData('goalName', text)}
        />
      </View>
    </View>
  );
};

export default CreateGoal;
