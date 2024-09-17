import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useFormContext } from '../Store/Store'; 
import CreateGoal from '../Components/CreateGoal';
import UrIntialAmount from '../Components/UrIntialAmount';
import TopUp from '../Components/TopUp';
import { paths } from '../../interfaces/Urls';
import { RootStackParamList } from '../../interfaces/interfaces';

const NewGoal = () => {
    const { formData, updateFormData } = useFormContext();
    const [step, setStep] = useState<number>(formData.step || 1);
    const progressAnim : any = useRef(new Animated.Value(0)).current;
    const navigation   = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        setStep(formData.step || 1);
    }, [formData.step]);

    useEffect(() => {
        const maxStep = formData.isMonthlyDeposit ? 3 : 2;
        const progress = step / maxStep;
        Animated.timing(progressAnim, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [step, formData.isMonthlyDeposit, progressAnim]);

   
    const handleNext = () => {
        const maxStep = formData.isMonthlyDeposit ? 3 : 2;
        const newStep = step + 1;

        if (newStep > maxStep) {
            navigation.navigate(paths.questions);
            return;
        }
        setStep(newStep);
        updateFormData('step', newStep);
        const progress = newStep / maxStep;
        Animated.timing(progressAnim, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const handleBack = () => {
        if (step > 1) {
            const newStep = step - 1;
            setStep(newStep);
            updateFormData('step', newStep);

            const maxStep = formData.isMonthlyDeposit ? 3 : 2;
            const progress = newStep / maxStep;
            Animated.timing(progressAnim, {
                toValue: progress,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            // Navigate back to the previous screen if on the first step
            navigation.goBack();
        }
    };


    const isButtonDisabled = () => {
        const { goalName, amount, monthlyAmount, selectedDay } = formData;
        if (step === 1) {
            return goalName.trim().length === 0;
        } else if (step === 2) {
            return amount.trim().length === 0;
        } else if (step === 3 && formData.isMonthlyDeposit) {
            return monthlyAmount.trim().length === 0 || selectedDay.trim().length === 0;
        }
        return false;
    };

    

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-back" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons onPress={() => navigation.navigate(paths.investment)} name="close" size={30} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.progressContainer}>
                        <Animated.View
                            style={[
                                styles.progressBar,
                                {
                                    width: progressAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'],
                                    }),
                                },
                            ]}
                        />
                    </View>

                    {/* Content */}
                    <View style={styles.content}>
                        {step === 1 && <CreateGoal styles={styles} />}
                        {step === 2 && <UrIntialAmount styles={styles} />}
                        {step === 3 && formData.isMonthlyDeposit && <TopUp styles={styles} />}
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
        width: 200,
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
        color: '#625EEE',
        margin : 'auto',
        textAlign : 'center',
        marginBottom : 20
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
