import React, { useContext } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFormContext } from '../Store/Store';
import { Picker } from '@react-native-picker/picker';
export default function TopUp({ styles }) {
  const { formData, updateFormData } = useFormContext() // Access form data from context
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  return (
    <View>
      <Text style={styles.title}>Your monthly top up</Text>
      <Text style={styles.subtitle}>
        We’ll remind you on a monthly basis to add this amount towards your goal.
      </Text>

      {/* TextInput for Monthly Amount */}
      <TextInput
        style={styles.input}
        placeholder="Enter amount in AED"
        value={formData.monthlyAmount}
        onChangeText={(text) => updateFormData('monthlyAmount', text)}
        keyboardType="numeric"
      />

<View style={styles.dropdownContainer}>
        <Picker
          selectedValue={formData.selectedDay}
          style={styles.dropdownInput}
          onValueChange={(itemValue) => updateFormData('selectedDay', itemValue)}
        >
          {days.map((day) => (
            <Picker.Item key={day} label={`${day}`} value={day} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
