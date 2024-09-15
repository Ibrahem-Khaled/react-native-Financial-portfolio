import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import MyTaps from './Screens/taps/MyTaps';
import Investment from './Screens/Investment';
import NewGoal from './Screens/NewGoal';
import Questions from './Screens/Questions';
import UserResult from './Screens/UserResult';

const Stack = createNativeStackNavigator();

const IndexNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="myTaps" component={MyTaps} />
                <Stack.Screen name="investment" component={Investment} />
                <Stack.Screen name="newGoal" component={NewGoal} />
                <Stack.Screen name="questions" component={Questions} />
                <Stack.Screen name="userResult" component={UserResult} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const IndexNavScreen = () => {
    return (
        <View>
            <Text>IndexNav Screen</Text>
        </View>
    );
};

export default IndexNav;
