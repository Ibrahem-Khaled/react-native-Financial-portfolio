import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import Header from '../../Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ServiceCard from '../../Components/ServiceCard';
import AcademyCard from '../../Components/AcademyCard';
import FinancialAcademy from '../../Components/FinancialAcademy';

const services = [
    {
        id: '1',
        icon: 'add',
        title: 'Cash in advance',
        description: 'You can now avail up to 50% of your total balance.',
        buttonText: 'Request Cash',
    },
    {
        id: '2',
        image: require('../../images/car.png'),
        title: 'Car Insurance',
        border: true,
    },
    {
        id: '3',
        image: require('../../images/Rectangle.png'),
        title: 'Health Insurance',
        border: true,
    },
];

const academyItems = [
    {
        id: '1',
        image: require('../../images/icons/savings2.png'),
        title: 'Earn daily on your savings!',
        actionText: 'START SAVING',
    },
    {
        id: '2',
        image: require('../../images/icons/invetion.png'),
        title: 'Invest and put your money to work',
        actionText: 'START INVESTMENT',
    },
];

const academy = [
    {
        id: '1',
        image: require('../../images/acadmy1.png'),
        title: 'Earn daily on your savings!',
        actionText: 'START SAVING',
    },
    {
        id: '2',
        image: require('../../images/acadmy2.png'),
        title: 'Invest and put your money to work',
        actionText: 'START INVESTMENT',
    },
    {
        id: '3',
        image: require('../../images/acadmy3.png'),
        title: 'Earn daily on your savings!',
        actionText: 'START SAVING',
    }
];






const ExploreScreen : React.FC  = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Text style={styles.planText}>Gratuity Plan</Text>

                {/* Balance Section */}
                <Text style={styles.balanceText}>10,984 <Text style={styles.currencyText}>AED</Text></Text>
                <View style={styles.paginationDots}>
                    <View style={styles.activeDot} />
                    <View style={styles.inactiveDot} />
                    <View style={styles.inactiveDot} />
                </View>

                <View style={styles.contentContainer}>
                    {/* Action Buttons */}
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity>
                            <Ionicons name="add" size={28} color="#625EEE" style={styles.actionIcon} />
                            <Text style={styles.actionText}>New goal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="arrow-forward" size={28} color="#625EEE" style={styles.actionIcon} />
                            <Text style={styles.actionText}>Add fund</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Feather name="list" size={28} color="#625EEE" style={styles.actionIcon} />
                            <Text style={styles.actionText}>Statement</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Academy Section */}
                    <FlatList
                        data={academyItems}
                        renderItem={({ item }) => <AcademyCard nav={navigation} item={item} />}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />

                    {/* Service Hub */}
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <Text style={styles.sectionTitle}>Service Hub</Text>
                        <AntDesign name="right" size={18} color="rgba(0, 0, 0, 0.5)" />
                    </TouchableOpacity>
                    <FlatList
                        data={services}
                        renderItem={({ item }) => <ServiceCard item={item} />}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <Text style={styles.sectionTitle}>Service Hub</Text>
                        <AntDesign name="right" size={18} color="rgba(0, 0, 0, 0.5)" />
                    </TouchableOpacity>
                    <FlatList
                        data={academy}
                        renderItem={({ item }) => <FinancialAcademy item={item} />}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#625EEE',
    },
    planText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20,
    },
    balanceText: {
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
    },
    currencyText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '400',
    },
    paginationDots: {
        flexDirection: 'row',
        marginVertical: 20,
        alignSelf: 'center',
    },
    activeDot: {
        width: 20,
        height: 4,
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 5,
    },
    inactiveDot: {
        width: 10,
        height: 4,
        borderRadius: 5,
        backgroundColor: '#bbb',
        marginHorizontal: 5,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    actionIcon: {
        padding: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#625EEE26',
        borderRadius: 8,
        textAlign: 'center',
    },
    actionText: {
        marginTop: 5,
        fontSize: 14,
        color: '#333',
    },
    card: {
        backgroundColor: '#F2F1FF',
        height: 121,
        width: 262,
        margin: 12,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'space-between',
    },
    cardText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        maxWidth: '70%',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    serviceCard: {
        padding: 12,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'rgba(143, 143, 143, 1)',
        width: 148,
        height: 203,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(99, 99, 99, 1)',
    },
    serviceDescription: {
        color: '#777',
        marginVertical: 10,
    },
    requestButton: {
        backgroundColor: '#625EEE',
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
    },
    requestButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    serviceImage: {
        width: '100%',
        height: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});

export default ExploreScreen;
