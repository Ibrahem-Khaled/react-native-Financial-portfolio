import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // استيراد أيقونات Expo
import ExploreScreen from './HomeScreen';

const Tab = createBottomTabNavigator();
const AcademyScreen = () => (
    <View>
        <Text>Academy Screen</Text>
    </View>
);

const SavingsScreen = () => (
    <View>
        <Text>Savings Screen</Text>
    </View>
);

const ServicesScreen = () => (
    <View>
        <Text>Services Screen</Text>
    </View>
);

const SettingsScreen = () => (
    <View>
        <Text>Settings Screen</Text>
    </View>
);

const MyTaps = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Explore') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Academy') {
                        iconName = focused ? 'bulb' : 'bulb-outline';
                    } else if (route.name === 'Savings') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === 'Services') {
                        iconName = focused ? 'grid' : 'grid-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // إرجاع الأيقونة المناسبة مع Expo Vector Icons
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#625EEE', // لون عند التركيز
                tabBarInactiveTintColor: 'gray',  // لون عند عدم التركيز
                headerShown: false
            })}
        >
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="Academy" component={AcademyScreen} />
            <Tab.Screen name="Savings" component={SavingsScreen} />
            <Tab.Screen name="Services" component={ServicesScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default MyTaps;
