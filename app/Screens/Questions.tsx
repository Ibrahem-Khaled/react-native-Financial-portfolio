import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { questions } from '../../interfaces/StaticData';
import { useFormContext } from '../Store/Store';
import { paths } from '../../interfaces/Urls';

const Questions = () => {
    const { formData, updateFormData } = useFormContext();
    const navigation : any = useNavigation();
    const [progress, setProgress] = useState(0);
  
    const step = formData.questionStep || 0;
    const selectedOptions = formData.selectedOptions || [];
  
    const handleNext = () => {
        if (step < questions.length) {
          updateFormData('questionStep', step + 1);
          setProgress((step + 1) / (questions.length + 1));
        } else {
          navigation.navigate(paths.userResult);
        }
      };
  
    const handleBack = () => {
      if (step > 0) {
        updateFormData('questionStep', step - 1);
        setProgress(Math.max((step - 1) / (questions.length + 1), 0));
      }
    };
  
    const handleOptionSelect = (option) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[step - 1] = option; 
        updateFormData('selectedOptions', updatedOptions);
      };
  
      const isOptionSelected = (option) => {
        return selectedOptions[step - 1] === option;
      };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          {step > 0 && (
            <TouchableOpacity onPress={handleBack}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate(paths.investment)}>
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
  
            <Image source={require('../images/meter.png')} style={styles.image} />
  
            <Text style={styles.findText}>Find the suitable portfolio for you</Text>
  
            <TouchableOpacity style={styles.startButton} onPress={handleNext}>
              <Text style={styles.startButtonText}>Let’s start</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.questionText}>{questions[step - 1].question}</Text>
            <Text style={styles.subText}>{questions[step - 1].subText}</Text>
  
            {questions[step - 1].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.optionButton, isOptionSelected(option) && styles.selectedOption]}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
                {isOptionSelected(option) && <Ionicons name="checkmark-circle" size={24} color="#625EEE" />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
  
        {step > 0 && (
          <View style={styles.footer}>
            <TouchableOpacity onPress={handleBack}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.forwardButton,
                !selectedOptions[step - 1] && styles.buttonDisabled,
              ]}
              onPress={handleNext}
              disabled={!selectedOptions[step - 1]}
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
