import React from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFormContext } from '../Store/Store';
import {UrInitialAmountProps} from '../../interfaces/interfaces'

const UrInitialAmount: React.FC<UrInitialAmountProps> = ({ styles }) => {
  const { formData, updateFormData } = useFormContext();
  const isMonthlyDeposit = formData.isMonthlyDeposit; 

  return (
    <View>
      <Text style={styles.title}>Your Initial Amount</Text>
      <Text style={styles.subtitle}>
        Enter the amount you will start investing to achieve this goal
      </Text>

      {/* TextInput for Amount */}
      <TextInput
        style={styles.input}
        placeholder="Enter amount in AED"
        value={formData.amount}
        onChangeText={(text) => updateFormData('amount', text)}
        keyboardType="numeric"
      />

      {/* Schedule Monthly Deposit */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Schedule a monthly deposit</Text>

        {/* Switch for 'isMonthlyDeposit' */}
        <Switch
          value={isMonthlyDeposit}
          onValueChange={(value) => updateFormData('isMonthlyDeposit', value)}
          thumbColor={isMonthlyDeposit ? '#625EEE' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#D1D1D6' }}
        />
      </View>

      {/* Bank Transfer Notice */}
      <View style={styles.noticeContainer}>
        <Ionicons name="information-circle" size={24} color="#625EEE" />
        <Text style={styles.noticeText}>
          All bank transfers will require your explicit confirmation.
        </Text>
      </View>
    </View>
  );
};

export default UrInitialAmount;
