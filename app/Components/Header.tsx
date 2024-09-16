import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Header : React.FC = () => {
    return (
        <View style={styles.header}>
            <Image
                source={{ uri: 'https://via.placeholder.com/50' }}
                style={styles.profileImage}
            />
            <Ionicons name="notifications" size={20} color="white" style={{ padding: 10, borderWidth: 1, borderColor: 'white', borderRadius: 25, textAlign: 'center' }} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#625EEE',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
})