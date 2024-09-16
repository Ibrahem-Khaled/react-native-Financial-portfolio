// Portfolio.tsx
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { paths } from '../../interfaces/Urls';
import { useFormContext } from '../Store/Store';
import { useAnalytics } from '@segment/analytics-react-native';

const Portfolio: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();
  const { track } = useAnalytics();
  // Animated values for loading dots
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;


  track('Investment Goal Created', {
    goalName: formData.goalName,               
    initialGoalAmount: formData.initialAmount,  
    goalDeadline: '2025-12-31',        
    chosenPortfolio: formData.selectedOptions,  
    paymentRecurrence: 'monthly',      
  });

  // Function to animate loading dots
  const animateDots = () => {
    Animated.loop(
      Animated.stagger(200, [
        Animated.timing(dot1, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dot2, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dot3, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  // Start or reset animations based on loading state
  useEffect(() => {
    if (loading) {
      animateDots();
    } else {
      // Reset dots when not loading
      Animated.timing(dot1, { toValue: 0, duration: 0, useNativeDriver: true }).start();
      Animated.timing(dot2, { toValue: 0, duration: 0, useNativeDriver: true }).start();
      Animated.timing(dot3, { toValue: 0, duration: 0, useNativeDriver: true }).start();
    }

    // Cleanup animation on unmount
    return () => {
      dot1.stopAnimation();
      dot2.stopAnimation();
      dot3.stopAnimation();
    };
  }, [loading, dot1, dot2, dot3]);

  // Handle Create Goal action
  const handleCreateGoal = () => {
    if (!agreement) {
      Alert.alert('Agreement Required', 'Please agree to the terms to create a goal.');
      return;
    }

    setLoading(true);
    animateDots();

    // Simulate API call and navigation
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(paths.myTaps);
    }, 3000);
  };

  // Handle Back action
  const handleBack = () => {
    navigation.goBack();
  };

  // Handle Agreement checkbox change
  const handleAgreementChange = (value: boolean) => {
    updateFormData('agreement', value);
  };

  // Access data from formData with default values
  const {
    goalName = 'Home Deposit',
    amount: initialAmount = '100,000',
    monthlyAmount: monthlyTopUp = '500',
    selectedDay = '25',
    portfolioChoice = 'Growth & Income',
    agreement = false,
  } = formData;

  // Inline Header Component
  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} accessibilityLabel="Close Portfolio">
        <Ionicons name="close" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );

  // Inline Image Section Component
  const ImageSection = () => (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F270%2F486%2Foriginal%2Fvector-online-shopping-web-banner.jpg&f=1&nofb=1&ipt=f548f279d733dd8b330b2c4e142f01624d0060e0c5b13227d7426f181e777066&ipo=images',
        }}
        style={styles.image}
      />
      <View style={styles.imageTextContainer}>
        <Text style={styles.imageTitle}>{goalName}</Text>
      </View>
    </View>
  );

  const InfoBox = ({
    label,
    value,
    onEdit,
    hasDropdown,
  }: {
    label: string;
    value: string | number;
    onEdit?: () => void;
    hasDropdown?: boolean;
  }) => (
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>{label}</Text>
      <View style={styles.infoBoxContent}>
        <Text style={styles.infoValue}>{value}</Text>
        {hasDropdown && (
          <TouchableOpacity accessibilityLabel={`Select ${label}`}>
            <MaterialIcons name="arrow-drop-down" size={18} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  // Inline Recurring Payment Section Component
  const RecurringPaymentSection = () => (
    <View style={styles.recurringPaymentContainer}>
      <Text style={styles.sectionTitle}>Recurring Payment</Text>
      <Text style={styles.infoDescription}>You will be able to change this later</Text>
      <InfoBox
        label="Monthly Top Up"
        value={`AED ${monthlyTopUp}`}
        onEdit={() => Alert.alert('Edit', 'Edit Monthly Top Up')}
      />
    </View>
  );

  // Inline Investment Choice Section Component
  const InvestmentChoiceSection = () => (
    <View>
      <Text style={styles.sectionTitle}>Investment Choice</Text>
      <InfoBox label="Portfolio" value={portfolioChoice} />
    </View>
  );

  // Inline Agreement Section Component
  const AgreementSection = () => (
    <View style={styles.agreementContainer}>
      <Checkbox
        value={agreement}
        onValueChange={handleAgreementChange}
        color={agreement ? '#625EEE' : undefined}
        accessibilityLabel="Agreement Checkbox"
      />
      <Text style={styles.agreementText}>
        I’ve read and agreed to{' '}
        <Text
          style={styles.linkText}
          onPress={() => Alert.alert('Agreement', 'FinFlx Account Opening Agreement')}
          accessibilityRole="link"
        >
          FinFlx Account Opening Agreement
        </Text>
      </Text>
    </View>
  );

  // Inline Button Section Component
  const ButtonSection = () => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBack}
        accessibilityLabel="Back Button"
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.createGoalButton,
          {
            backgroundColor: agreement ? 'rgba(98, 94, 238, 1)' : 'rgba(233, 233, 233, 1)',
          },
        ]}
        disabled={!agreement || loading}
        onPress={handleCreateGoal}
        accessibilityLabel="Create Goal Button"
      >
        {loading ? (
          <View style={styles.loadingDots}>
            <Animated.Text style={{ opacity: dot1, color: 'white', fontSize: 20 }}>
              •
            </Animated.Text>
            <Animated.Text style={{ opacity: dot2, color: 'white', fontSize: 20 }}>
              •
            </Animated.Text>
            <Animated.Text style={{ opacity: dot3, color: 'white', fontSize: 20 }}>
              •
            </Animated.Text>
          </View>
        ) : (
          <Text
            style={[
              styles.createGoalButtonText,
              { color: agreement ? 'white' : 'rgba(188, 188, 188, 1)' },
            ]}
          >
            Create Goal
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Image with Title */}
      <ImageSection />

      {/* Goal Summary Section */}
      <Text style={styles.sectionTitle}>Goal Summary</Text>
      <InfoBox
        label="Initial Amount"
        value={`AED ${initialAmount}`}
        onEdit={() => Alert.alert('Edit', 'Edit Initial Amount')}
      />

      {/* Recurring Payment Section */}
      {!monthlyTopUp == false && <RecurringPaymentSection />}

      {/* On the Day Section */}
      <InfoBox
        label="On the day"
        value={selectedDay}
        hasDropdown
        onEdit={() => Alert.alert('Select Day', 'Select On the Day')}
      />

      {/* Investment Choice Section */}
      <InvestmentChoiceSection />

      {/* Agreement Section */}
      <AgreementSection />

      {/* Buttons Section */}
      <ButtonSection />
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
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  // Image Section Styles
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 179,
    borderRadius: 20,
    marginVertical: 10,
  },
  imageTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  // Section Title Styles
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // InfoBox Styles
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
  // Recurring Payment Styles
  recurringPaymentContainer: {
    marginBottom: 10,
  },
  infoDescription: {
    color: '#8E8E8E',
    marginBottom: 10,
  },
  // Agreement Section Styles
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
  // Button Section Styles
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
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
    fontWeight: 'bold',
  },
  createGoalButton: {
    flex: 2,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createGoalButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
