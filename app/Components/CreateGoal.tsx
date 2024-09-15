import React from 'react'
import { Image, Text , TouchableOpacity , TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
export default function CreateGoal({styles  , image , goalName , setGoalName}) {
  return (
    <>
    <Text style={styles.title}>{goalName === '' ? 'Create a Goal' : goalName}</Text>
    <Text style={styles.subtitle}>Write the name of the item or experience you’re saving for.</Text>

    {image ? (
        <Image source={{ uri: image }} style={styles.imageContainer} />
    ) : (
        <LinearGradient colors={['rgba(216, 215, 255, 1)', 'rgba(242, 241, 255, 1)']} style={styles.imageContainer}>
            <TouchableOpacity onPress={() => { }} style={{ padding: 15, backgroundColor: 'rgba(255, 244, 216, 1)', borderRadius: 50 }}>
                <Image source={require('../images/bank.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <Ionicons name="pencil" size={18} color="#625EEE" style={styles.editIcon} />
        </LinearGradient>
    )}

    {/* TextInput for Goal Name */}
    <TextInput
        style={styles.input}
        placeholder="Goal Name"
        value={goalName}
        onChangeText={setGoalName}
    />
</>
  )
}
