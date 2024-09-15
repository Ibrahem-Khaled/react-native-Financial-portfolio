import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const GoalPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Image and Title */}
            <View>
                <ImageBackground
                    source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F270%2F486%2Foriginal%2Fvector-online-shopping-web-banner.jpg&f=1&nofb=1&ipt=f548f279d733dd8b330b2c4e142f01624d0060e0c5b13227d7426f181e777066&ipo=images' }}
                    style={styles.image}
                >
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-back" size={30} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="more-vert" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageTextContainer}>
                        <Text style={styles.imageTitle}>Home Deposit</Text>
                        <Text style={styles.riskLevelText}>Risk level 3 (Growth & Income)</Text>
                    </View>
                </ImageBackground>

            </View>

            {/* Progress Section */}
            <View style={styles.progressContainer}>
                <Text style={styles.almostText}>Almost there! 🚀</Text>
                <Text style={styles.progressDescription}>
                    You are one step closer, verify your identity to continue.
                </Text>

                {/* Checklist */}
                <View style={styles.checklist}>
                    <Text style={styles.checkItem}>✅ Goal Creation</Text>
                    <Text style={styles.checkItem}>✅ Portfolio Selection</Text>
                    <Text style={styles.uncheckItem}>⚪ Identity Verification</Text>
                    <Text style={styles.uncheckItem}>⚪ Personal Information</Text>
                    <Text style={styles.uncheckItem}>
                        ⚪ Acknowledgements & Tax Declaration
                    </Text>
                </View>

                {/* Footer Section */}
                <Text style={styles.footerText}>
                    All you need is a scan of your Emirates ID
                </Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default GoalPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    image: {
        width: '100%',
        height: 300,
        justifyContent: 'space-between',
    },
    imageTextContainer: {
        padding: 30,
    },
    imageTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    riskLevelText: {
        fontSize: 14,
        color: '#fff',
    },
    progressContainer: {
        padding: 20,
    },
    almostText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4a2f85',
    },
    progressDescription: {
        fontSize: 14,
        color: '#8E8E8E',
        marginVertical: 10,
    },
    checklist: {
        marginVertical: 20,
    },
    checkItem: {
        fontSize: 16,
        color: '#4a2f85',
        marginVertical: 5,
    },
    uncheckItem: {
        fontSize: 16,
        color: '#8E8E8E',
        marginVertical: 5,
    },
    footerText: {
        fontSize: 14,
        color: '#8E8E8E',
        textAlign: 'center',
        marginTop: '30%',
    },
    continueButton: {
        backgroundColor: '#625EEE',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
