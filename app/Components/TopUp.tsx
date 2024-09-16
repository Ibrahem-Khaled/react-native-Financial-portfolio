import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useFormContext } from '../Store/Store';
import ModalSelector from 'react-native-modal-selector';
import { TopUpProps } from '../../interfaces/interfaces';

const TopUp: React.FC<TopUpProps> = ({ styles }) => {
  const { formData, updateFormData } = useFormContext(); // Access form data from context
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const data = days.map((day) => ({ key: day, label: `${day}` }));

  return (
    <View>
      <Text style={styles.title}>Your monthly top-up</Text>
      <Text style={styles.subtitle}>
        We’ll remind you on a monthly basis to add this amount towards your goal.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount in AED"
        value={formData.monthlyAmount}
        onChangeText={(text) => updateFormData('monthlyAmount', text)}
        keyboardType="numeric"
      />


      <View style={styles.input}>
        <ModalSelector
          data={data}
          initValue={formData.selectedDay}
          onChange={(option) => updateFormData('selectedDay', option.key)}
        >
          <TextInput
            style={styles.dropdownInput}
            editable={false}
            placeholder="Select Day"
            value={formData.selectedDay}
          />
        </ModalSelector>
      </View>
    </View>
  );
};

export default TopUp;
