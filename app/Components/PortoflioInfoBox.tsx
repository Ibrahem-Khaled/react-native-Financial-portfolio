import React from 'react';
import { Text, View } from 'react-native';
import {PortoflioInfoBoxProps} from '../../interfaces/interfaces'

const PortoflioInfoBox: React.FC<PortoflioInfoBoxProps> = ({ styles, label, value }) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>{label}</Text>
      <View style={styles.infoBoxContent}>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
};

export default PortoflioInfoBox;
