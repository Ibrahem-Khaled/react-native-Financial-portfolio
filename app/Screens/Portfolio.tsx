import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';  // استيراد CheckBox من المكتبة الجديدة
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Portfolio = () => {
  const [isSelected, setSelection] = useState(false); // حالة تحديد الـ CheckBox

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Image with title */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150' }} // رابط للصورة (يمكنك تغييره)
          style={styles.image}
        />
        <View style={styles.imageTextContainer}>
          <Text style={styles.imageTitle}>Home Deposit</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Goal Summary Section */}
      <Text style={styles.sectionTitle}>Goal Summary</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Initial Amount</Text>
        <View style={styles.infoBoxContent}>
          <Text style={styles.infoValue}>AED 100,000</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Recurring Payment Section */}
      <Text style={styles.sectionTitle}>Recurring payment</Text>
      <Text style={styles.infoDescription}>
        You will be able to change this later
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Monthly Top Up</Text>
        <View style={styles.infoBoxContent}>
          <Text style={styles.infoValue}>AED 500</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>On the day</Text>
        <View style={styles.infoBoxContent}>
          <Text style={styles.infoValue}>25</Text>
          <TouchableOpacity>
            <MaterialIcons name="arrow-drop-down" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Investment Choice Section */}
      <Text style={styles.sectionTitle}>Investment Choice</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Portfolio</Text>
        <Text style={styles.infoValue}>Growth & Income</Text>
      </View>

      {/* Agreement Section */}
      <View style={styles.agreementContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: '#625EEE', false: '#000' }}
        />
        <Text style={styles.agreementText}>
          I’ve read and agreed to{' '}
          <Text style={styles.linkText}>FinFlx Account Opening Agreement</Text>
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createGoalButton} disabled={true}>
          <Text style={styles.createGoalButtonText}>Create Goal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  imageTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    color: '#8E8E8E',
  },
  infoValue: {
    fontWeight: 'bold',
  },
  infoBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoDescription: {
    color: '#8E8E8E',
    marginBottom: 10,
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  agreementText: {
    marginLeft: 10,
    color: '#333',
  },
  linkText: {
    color: '#625EEE',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  backButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#EDEDED',
    borderWidth: 1,
    marginRight: 10,
  },
  backButtonText: {
    color: '#333',
  },
  createGoalButton: {
    flex: 2,
    paddingVertical: 15,
    backgroundColor: '#ECEAFE',
    borderRadius: 10,
    alignItems: 'center',
  },
  createGoalButtonText: {
    color: '#BEBEBE',
    fontWeight: 'bold',
  },
});
