import React from 'react'
import { Alert, Text, View } from 'react-native'
import Checkbox from 'expo-checkbox';
export default function AgreementSectionPortoflio({styles , handleAgreementChange , agreement}) {
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
  )
}
