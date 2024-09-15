import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ServiceCardProps } from '../../interfaces/interfaces';

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
    const iconName = item.icon ? item.icon : 'help-circle'; 
    return (
        <View style={[styles.serviceCard, { backgroundColor: item.backgroundColor || 'white' }]}>
            {item.icon && <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={38} color="#625EEE" />}
            {item.image && <Image source={item.image} style={styles.serviceImage} />}
            <Text>{item.title}</Text>
            {item.description && <Text style={styles.serviceDescription}>{item.description}</Text>}
            {item.buttonText && (
                <TouchableOpacity style={styles.requestButton}>
                    <Text style={styles.requestButtonText}>{item.buttonText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
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

export default ServiceCard;
