import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Portfolio = () => {
    const [isSelected, setSelection] = useState(false); // حالة تحديد الـ CheckBox
    const [loading, setLoading] = useState(false); // حالة التحميل
    const navigation = useNavigation<any>();

    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    const animateDots = () => {
        Animated.loop(
            Animated.stagger(200, [
                Animated.timing(dot1, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(dot2, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(dot3, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    const handleCreateGoal = () => {
        setLoading(true);
        animateDots();

        // الانتقال بعد 3 ثواني
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('GoalPage'); // استبدل GoalPage بالصفحة المطلوبة
        }, 3000);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="close" size={30} color="black" />
                </TouchableOpacity>
            </View>

            {/* Image with title */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F270%2F486%2Foriginal%2Fvector-online-shopping-web-banner.jpg&f=1&nofb=1&ipt=f548f279d733dd8b330b2c4e142f01624d0060e0c5b13227d7426f181e777066&ipo=images' }}
                    style={styles.image}
                />
                <View style={styles.imageTextContainer}>
                    <Text style={styles.imageTitle}>Home Deposit</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Goal Summary Section */}
            <Text style={styles.sectionTitle}>Goal Summary</Text>
            <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Initial Amount</Text>
                <View style={styles.infoBoxContent}>
                    <Text style={styles.infoValue}>AED 100,000</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Recurring Payment Section */}
            <Text style={styles.sectionTitle}>Recurring payment</Text>
            <Text style={styles.infoDescription}>
                You will be able to change this later
            </Text>
            <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Monthly Top Up</Text>
                <View style={styles.infoBoxContent}>
                    <Text style={styles.infoValue}>AED 500</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>On the day</Text>
                <View style={styles.infoBoxContent}>
                    <Text style={styles.infoValue}>25</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="arrow-drop-down" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Investment Choice Section */}
            <Text style={styles.sectionTitle}>Investment Choice</Text>
            <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Portfolio</Text>
                <Text style={styles.infoValue}>Growth & Income</Text>
            </View>

            {/* Agreement Section */}
            <View style={styles.agreementContainer}>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={isSelected ? '#625EEE' : undefined}
                />
                <Text style={styles.agreementText}>
                    I’ve read and agreed to{' '}
                    <Text style={styles.linkText}>FinFlx Account Opening Agreement</Text>
                </Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.createGoalButton, { backgroundColor: isSelected ? 'rgba(98, 94, 238, 1)' : 'rgba(233, 233, 233, 1)' }]}
                    disabled={!isSelected}
                    onPress={handleCreateGoal}
                >
                    {loading ? (
                        <View style={styles.loadingDots}>
                            <Animated.Text style={{ opacity: dot1, color: 'white', fontSize: 20 }}>•</Animated.Text>
                            <Animated.Text style={{ opacity: dot2, color: 'white', fontSize: 20 }}>•</Animated.Text>
                            <Animated.Text style={{ opacity: dot3, color: 'white', fontSize: 20 }}>•</Animated.Text>
                        </View>
                    ) : (
                        <Text style={[styles.createGoalButtonText, { color: !isSelected ? 'rgba(188, 188, 188, 1)' : 'white' }]}>Create Goal</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Portfolio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    imageContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 179,
        borderRadius: 20,
        marginVertical: 10,
    },
    imageTextContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoBox: {
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLabel: {
        color: '#8E8E8E',
    },
    infoValue: {
        fontWeight: 'bold',
    },
    infoBoxContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoDescription: {
        color: '#8E8E8E',
        marginBottom: 10,
    },
    agreementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    agreementText: {
        marginLeft: 10,
        color: '#333',
    },
    linkText: {
        color: '#625EEE',
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
    },
    backButton: {
        flex: 1,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#EDEDED',
        borderWidth: 1,
        marginRight: 10,
    },
    backButtonText: {
        color: '#333',
    },
    createGoalButton: {
        flex: 2,
        paddingVertical: 15,
        backgroundColor: 'rgba(98, 94, 238, 1)',
        borderRadius: 10,
        alignItems: 'center',
    },
    createGoalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loadingDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
