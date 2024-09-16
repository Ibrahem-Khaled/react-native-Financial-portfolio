import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation , NavigationProp } from '@react-navigation/native';
import {RootStackParamList} from '../../interfaces/interfaces'
import { paths } from '../../interfaces/Urls';

const InvestmentScreen : React.FC = () => {
    const navigation  = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <LinearGradient
            colors={['rgba(237, 235, 229, 1)', 'rgba(237, 235, 229, 0)']}
            style={styles.container}
        >
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', padding: 20 }}>
                <View style={styles.closeIcon}>
                    <Ionicons onPress={() => navigation.goBack()} name="close" size={30} color="black" />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.emoji}>💰</Text>
                    </View>

                    <Text style={styles.title}>Invest & put your money to work</Text>
                    <Text style={styles.description}>
                        Get closer to your dream with our fully managed portfolios tailored to fit your risk appetite, time horizon, and personal values.
                    </Text>
                    <Text style={styles.description}>
                        Find out the most suitable portfolio for you in minutes.
                    </Text>
                </View>

                <TouchableOpacity onPress={() => {navigation.navigate(paths.newGoal)}} style={styles.button}>
                    <Text style={styles.buttonText}>Start Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default InvestmentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    closeIcon: {
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    contentContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
    },
    iconContainer: {
        backgroundColor: '#F5F6FB',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    emoji: {
        fontSize: 40, 
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        marginVertical: 22,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'left',
        marginVertical: 10,
        lineHeight: 22,
    },
    button: {
        backgroundColor: '#625EEE',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
