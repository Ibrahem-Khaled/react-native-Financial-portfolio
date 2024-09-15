import React from 'react'
import { Switch, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default function UrIntialAmount({styles , amount , setAmount , isMonthlyDeposit , setIsMonthlyDeposit}) {
  return (
    <>
    <Text style={styles.title}>Your Initial amount</Text>
    <Text style={styles.subtitle}>
        Enter the amount you will start investing to achieve this goal
    </Text>

    {/* TextInput for Amount */}
    <TextInput
        style={styles.input}
        placeholder="Enter amount in AED"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
    />

    {/* Schedule Monthly Deposit */}
    <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Schedule a monthly deposit</Text>
        <Switch
            value={isMonthlyDeposit}
            onValueChange={setIsMonthlyDeposit}
            thumbColor={isMonthlyDeposit ? "#625EEE" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#D1D1D6" }}
        />
    </View>

    {/* Bank Transfer Notice */}
    <View style={styles.noticeContainer}>
        <Ionicons name="information-circle" size={24} color="#625EEE" />
        <Text style={styles.noticeText}>
            All bank transfers will require your explicit confirmation.
        </Text>
    </View>
</>
  )
}
