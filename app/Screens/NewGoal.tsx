import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Animated, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/interfaces';

const NewGoal = () => {
    const [goalName, setGoalName] = useState('');
    const [progress, setProgress] = useState(0);
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState('');
    const [monthlyAmount, setMonthlyAmount] = useState('');
    const [selectedDay, setSelectedDay] = useState('1');
    const [isMonthlyDeposit, setIsMonthlyDeposit] = useState(false);
    const [image, setImage] = useState(null);
    const progressAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Function to move to the next step
    const handleNext = () => {
        if (step === 2 && !isMonthlyDeposit) {
            // Skip step 3 if isMonthlyDeposit is false and go directly to step 4
            const newProgress = Math.min(progress + 1.0, 1); // Full progress for skipping
            setProgress(newProgress);
            
            Animated.timing(progressAnim, {
                toValue: newProgress,
                duration: 500,
                useNativeDriver: false,
            }).start();
    
            navigation.navigate('questions'); // Navigate to the next section directly
        } else if (step < 3 || (step === 2 && isMonthlyDeposit)) {
            const newProgress = Math.min(progress + 0.50, 1);
            setProgress(newProgress);
    
            Animated.timing(progressAnim, {
                toValue: newProgress,
                duration: 500,
                useNativeDriver: false,
            }).start();
            setStep(step + 1);
        } else {
            navigation.navigate('questions'); 
        }
    };
    

    // Function to go back to the previous step
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
            const newProgress = Math.max(progress - 0.50, 0);
            setProgress(newProgress);

            Animated.timing(progressAnim, {
                toValue: newProgress,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
    };

    // Button disable logic
    const isButtonDisabled = () => {
        if (step === 1) {
            return goalName.trim().length === 0;
        } else if (step === 2) {
            return amount.trim().length === 0;
        } else if (step === 3 && isMonthlyDeposit) {
            return monthlyAmount.trim().length === 0 || selectedDay.trim().length === 0;
        }
        return false;
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // adjust as needed
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={handleBack}>
                            <Ionicons name="arrow-back" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons onPress={() => navigation.navigate('investment')} name="close" size={30} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <Animated.View
                            style={[styles.progressBar, {
                                width: progressAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0%', '100%']
                                })
                            }]}
                        />
                    </View>

                    {/* Content */}
                    <View style={styles.content}>
                        {step === 1 && (
                            <>
                                <Text style={styles.title}>{goalName === '' ? 'Create a Goal' : goalName}</Text>
                                <Text style={styles.subtitle}>Write the name of the item or experience you’re saving for.</Text>

                                {image ? (
                                    <Image source={{ uri: image }} style={styles.imageContainer} />
                                ) : (
                                    <LinearGradient colors={['rgba(216, 215, 255, 1)', 'rgba(242, 241, 255, 1)']} style={styles.imageContainer}>
                                        <TouchableOpacity onPress={() => { }} style={{ padding: 15, backgroundColor: 'rgba(255, 244, 216, 1)', borderRadius: 50 }}>
                                            <Image source={require('../images/bank.png')} style={{ width: 40, height: 40 }} />
                                        </TouchableOpacity>
                                        <Ionicons name="pencil" size={18} color="#625EEE" style={styles.editIcon} />
                                    </LinearGradient>
                                )}

                                {/* TextInput for Goal Name */}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Goal Name"
                                    value={goalName}
                                    onChangeText={setGoalName}
                                />
                            </>
                        )}

                        {step === 2 && (
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
                        )}

                        {step === 3 && isMonthlyDeposit && (
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
                        )}
                    </View>
                </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleBack}>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.forwardButton, isButtonDisabled() && styles.buttonDisabled]}
                        disabled={isButtonDisabled()}
                        onPress={handleNext}
                    >
                        <Ionicons name="arrow-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default NewGoal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    progressContainer: {
        height: 8,
        backgroundColor: '#EDEDED',
        borderRadius: 5,
        width: '100%',
        marginVertical: 20,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#625EEE',
        borderRadius: 5,
    },
    content: {
        flex: 1,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 17,
        color: '#6F6F6F',
        textAlign: 'left',
        marginVertical: 20,
        maxWidth: '90%',
    },
    imageContainer: {
        width: '100%',
        height: 160,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        alignSelf: 'center',
    },
    editIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 15,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#625EEE',
        borderRadius: 12,
        padding: 15,
        fontSize: 16,
        marginBottom: 20,
        color: '#625EEE',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    switchLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    noticeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        borderTopWidth: 1,
        paddingTop: 20,
        borderColor: 'rgba(233, 233, 233, 1)',
        alignSelf: 'center',
    },
    noticeText: {
        fontSize: 14,
        color: '#6F6F6F',
        marginLeft: 10,
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
    },
    dropdownInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    dropdownIcon: {
        marginLeft: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5,
    },
    backText: {
        fontSize: 16,
        color: '#625EEE',
        fontWeight: 'bold',
    },
    forwardButton: {
        backgroundColor: '#625EEE',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#B0B0B0',
    },
});
