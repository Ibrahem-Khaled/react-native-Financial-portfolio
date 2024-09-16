import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";



const PortoflioHeader = ({styles , navigation}) => (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack} accessibilityLabel="Close Portfolio">
        <Ionicons name="close" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );

  export default PortoflioHeader