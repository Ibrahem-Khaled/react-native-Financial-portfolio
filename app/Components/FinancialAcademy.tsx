import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import {FinancialAcademyProps} from '../../interfaces/interfaces'

const FinancialAcademy: React.FC<FinancialAcademyProps> = ({ item }) => (
    <ImageBackground
        source={item.image}
        style={styles.imageBackground}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
    />
);

const styles = StyleSheet.create({
    imageBackground: {
        width: 148,
        height: 203,
        margin: 10,
    },
});

export default FinancialAcademy;
