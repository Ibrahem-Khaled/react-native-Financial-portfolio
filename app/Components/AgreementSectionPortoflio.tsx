import React from 'react';
import { Alert, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import {AgreementSectionPortoflioProps} from '../../interfaces/interfaces'

const AgreementSectionPortoflio: React.FC<AgreementSectionPortoflioProps> = ({
  styles,
  handleAgreementChange,
  agreement,
}) => {
  return (
    <View style={styles.agreementContainer}>
      <Checkbox
        value={agreement}
        onValueChange={handleAgreementChange}
        color={agreement ? '#625EEE' : undefined}
        accessibilityLabel="Agreement Checkbox"
      />
      <Text style={styles.agreementText}>
        I’ve read and agreed to{' '}
        <Text
          style={styles.linkText}
          onPress={() => Alert.alert('Agreement', 'FinFlx Account Opening Agreement')}
          accessibilityRole="link"
        >
          FinFlx Account Opening Agreement
        </Text>
      </Text>
    </View>
  );
};

export default AgreementSectionPortoflio;
