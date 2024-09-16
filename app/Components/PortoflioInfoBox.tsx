import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
export default function PortoflioInfoBox({styles  , label , value }) {
  return (
    <View style={styles.infoBox}>
    <Text style={styles.infoLabel}>{label}</Text>
    <View style={styles.infoBoxContent}>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
  )
}
