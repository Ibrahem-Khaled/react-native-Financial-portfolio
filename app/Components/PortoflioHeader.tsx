import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import React from 'react';
import {PortoflioHeaderProps} from '../../interfaces/interfaces'

const PortoflioHeader: React.FC<PortoflioHeaderProps> = ({ styles, navigation }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={navigation.goBack} accessibilityLabel="Close Portfolio">
      <Ionicons name="close" size={30} color="black" />
    </TouchableOpacity>
  </View>
);

export default PortoflioHeader;
