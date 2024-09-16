import React, { useEffect } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFormContext } from '../Store/Store';
import {UrInitialAmountProps} from '../../interfaces/interfaces'
import { useAnalytics } from '@segment/analytics-react-native';

const UrInitialAmount: React.FC<UrInitialAmountProps> = ({ styles }) => {
  const { formData, updateFormData } = useFormContext();
  const isMonthlyDeposit = formData.isMonthlyDeposit; 
  const { track } = useAnalytics();
  return (
    <View>
      <Text style={styles.title}>Your Initial Amount</Text>
      <Text style={styles.subtitle}>
        Enter the amount you will start investing to achieve this goal
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount in AED"
        value={formData.amount}
        onChangeText={(text) => updateFormData('amount', text)}
        keyboardType="numeric"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Schedule a monthly deposit</Text>

       
        <Switch
          value={isMonthlyDeposit}
          onValueChange={(value) => {
            updateFormData('isMonthlyDeposit', value)
            track('goal updated' , {
              goalchoosenNotConfirmed : value
            })
          }}
          thumbColor={isMonthlyDeposit ? '#625EEE' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#D1D1D6' }}
        />
      </View>

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
