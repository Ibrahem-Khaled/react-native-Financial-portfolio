import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {RootStackParamList} from '../../interfaces/interfaces'
import {AcademyCardProps} from '../../interfaces/interfaces'

const AcademyCard : React.FC<AcademyCardProps> = ({ item }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('investment')} style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.cardText}>{item.title}</Text>
                <Image source={item.image} resizeMode="contain" style={styles.image} />
            </View>
            <Text style={styles.actionText}>{item.actionText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    image: {
        width: 50,
        height: 50,
    },
    actionText: {
        color: '#625EEE',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default AcademyCard;
