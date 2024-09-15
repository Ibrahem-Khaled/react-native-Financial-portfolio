import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation , NavigationProp } from '@react-navigation/native';
import {RootStackParamList} from '../../interfaces/interfaces'

const Questions = () => {
    const [step, setStep] = useState(0); // لتتبع السؤال الحالي
    const [progress, setProgress] = useState(0); // لتتبع التقدم
    const [selectedOption, setSelectedOption] = useState(null); // لتخزين الخيار المختار
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    // الأسئلة الممكنة
    const questions = [
        {
            question: 'For how long do you plan to keep investing for this goal?',
            subText: 'It’s important to understand the time horizon of your investment to provide a suitable portfolio.',
            options: ['Less than 3 years', '3-5 years', '6-10 years', '+11 years'],
        },
        {
            question: 'For how long do you plan to keep investing for this goal?',
            subText: 'It’s important to understand the time horizon of your investment to provide a suitable portfolio.',
            options: ['Growth', 'Income', 'Preservation'],
        },
        {
            question: 'Which of the following investment outcomes do you prefer?',
            subText: 'Different people have different preferences, understanding yours helps us provide a more suitable portfolio.',
            options: ['Little or no ups and downs in value, lower returns', 'Moderate ups and downs in value, slightly higher returns ', 'Extreme ups and downs in value, high potential returns'],
        },
    ];

    // التعامل مع الإجابة
    const handleAnswer = (index) => {
        setSelectedOption(index); // تعيين الخيار المختار
    };

    // الانتقال إلى السؤال التالي
    const handleNext = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
            setProgress((step + 1) / questions.length);
            setSelectedOption(null); // إعادة تعيين الخيار المختار للسؤال التالي
        } else {
            navigation.navigate('userResult');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* العنوان وشريط التقدم */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => alert('Back pressed')}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert('Close pressed')}>
                    <Ionicons name="close" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
            </View>

            {step === 0 ? (
                <View style={styles.introContainer}>
                    <Text style={styles.title}>Understanding your risk profile</Text>
                    <Text style={styles.subtitle}>
                        Answer 6 easy questions to help us recommend an investment portfolio suitable for you.
                    </Text>

                    <Image
                        source={require('../images/meter.png')} // يمكنك تغيير المسار إلى صورة العداد
                        style={styles.image}
                    />

                    <Text style={styles.findText}>Find the suitable portfolio for you</Text>

                    <TouchableOpacity style={styles.startButton} onPress={() => setStep(1)}>
                        <Text style={styles.startButtonText}>Let’s start</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.questionText}>{questions[step].question}</Text>
                    <Text style={styles.subText}>
                        It’s important to understand the time horizon of your investment to provide a suitable portfolio.
                    </Text>
                    {questions[step].options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.optionButton, selectedOption === index && styles.selectedOption]}
                            onPress={() => handleAnswer(index)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                            {selectedOption === index && <Ionicons name="checkmark-circle" size={24} color="#625EEE" />}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}

            {/* Footer */}
            {step > 0 && (
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => setStep(Math.max(step - 1, 0))}>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.forwardButton, selectedOption === null && styles.buttonDisabled]} // الزر معطل إذا لم يتم اختيار إجابة
                        onPress={handleNext}
                        disabled={selectedOption === null} // تعطيل الزر إذا لم يتم اختيار إجابة
                    >
                        <Ionicons name="arrow-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Questions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    progressContainer: {
        height: 8,
        backgroundColor: '#EDEDED',
        marginHorizontal: 20,
        borderRadius: 8,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#625EEE',
        borderRadius: 8,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    introContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#6F6F6F',
        textAlign: 'center',
        marginBottom: 30,
        maxWidth: '90%',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    findText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    startButton: {
        backgroundColor: '#625EEE',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
    },
    startButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    questionText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 15,
        color: '#000',
    },
    subText: {
        fontSize: 14,
        color: '#6F6F6F',
        textAlign: 'left',
        marginBottom: 25,
    },
    optionButton: {
        backgroundColor: '#F9F9F9',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    selectedOption: {
        backgroundColor: 'rgba(98, 94, 238, 0.15)',
        borderColor: 'rgba(98, 94, 238, 1)',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
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
