import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function TopUp({styles , monthlyAmount , setMonthlyAmount , selectedDay , setSelectedDay}) {
  return (
    <>
    <Text style={styles.title}>Your monthly top up</Text>
    <Text style={styles.subtitle}>
        We’ll remind you on a monthly basis to add this amount towards your goal.
    </Text>

    {/* TextInput for Monthly Amount */}
    <TextInput
        style={styles.input}
        placeholder="Enter amount in AED"
        value={monthlyAmount}
        onChangeText={setMonthlyAmount}
        keyboardType="numeric"
    />

    {/* Dropdown for selecting the day */}
    <View style={styles.dropdownContainer}>
        <TextInput
            style={styles.dropdownInput}
            value={selectedDay}
            onChangeText={setSelectedDay}
            keyboardType="numeric"
        />
        <Ionicons name="chevron-down" size={24} color="#625EEE" style={styles.dropdownIcon} />
    </View>
</>
  )
}
