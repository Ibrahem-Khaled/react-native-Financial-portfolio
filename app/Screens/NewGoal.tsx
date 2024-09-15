import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Animated, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/interfaces';
import CreateGoal from '../Components/CreateGoal';
import UrIntialAmount from '../Components/UrIntialAmount';
import TopUp from '../Components/TopUp';

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
                        {
                            step === 1 && 
                            <CreateGoal styles={styles} goalName={goalName} image={image} setGoalName={setGoalName} />
                        }
               

                        {step === 2 && (
                          <UrIntialAmount styles={styles} amount={amount} isMonthlyDeposit={isMonthlyDeposit} setAmount={setAmount} setIsMonthlyDeposit={setIsMonthlyDeposit} />
                        )}

                        {step === 3 && isMonthlyDeposit && (
                          <TopUp monthlyAmount={monthlyAmount} styles={styles} selectedDay={selectedDay} setMonthlyAmount={setMonthlyAmount} setSelectedDay={setSelectedDay} />
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
