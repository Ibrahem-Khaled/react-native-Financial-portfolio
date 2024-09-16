import React, {useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { paths } from '../../interfaces/Urls';
import { useFormContext } from '../Store/Store';
import { useAnalytics } from '@segment/analytics-react-native';
import PortoflioHeader from '../Components/PortoflioHeader';
import PortoflioIMageSection from '../Components/PortoflioIMageSection';
import PortoflioInfoBox from '../Components/PortoflioInfoBox';
import AgreementSectionPortoflio from '../Components/AgreementSectionPortoflio';
import ButtonSectionPortoflio from '../Components/ButtonSectionPortoflio';
import Congrats from '../Components/Congrats';

const Portfolio: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [order, setorder] = useState(false)
  const navigation = useNavigation<NavigationProp<any>>();
  const { track } = useAnalytics();
  useEffect(() => {
    track('Investment Goal Created', {
      goalName: formData.goalName,
      initialGoalAmount: formData.amount,
      goalDeadline: '2025-12-31',
      chosenPortfolio: formData.selectedOptions,
      paymentRecurrence: 'monthly',
    });
  }, [formData, track]);

  const handleCreateGoal = () => {
    setorder(true)
    if (!formData.agreement) {
      Alert.alert('Agreement Required', 'Please agree to the terms to create a goal.');
      return;
    }
    setTimeout(() => {
       navigation.navigate(paths.myTaps);
    }, 1000);
   
  };


  const handleAgreementChange = (value: boolean) => {
    updateFormData('agreement', value);
  };

  const {
    goalName = 'Home Deposit',
    amount: initialAmount = '100,000',
    monthlyAmount: monthlyTopUp = '500',
    selectedDay = '25',
    portfolioChoice = 'Growth & Income',
    agreement = false,
  } = formData;


  return (
    <SafeAreaView style={styles.container}>
      <PortoflioHeader styles={styles} navigation={navigation} />
      <PortoflioIMageSection goalName={goalName} styles={styles} />
      <Text style={styles.sectionTitle}>Goal Summary</Text>
      <PortoflioInfoBox styles={styles}  label="Initial Amount" value={`AED ${initialAmount}`} />
      {monthlyTopUp && <PortoflioInfoBox styles={styles} label="Monthly Top Up" value={`AED ${monthlyTopUp}`} />}
      <PortoflioInfoBox label="months" value={selectedDay} styles={styles} />
      <PortoflioInfoBox styles={styles} label="Portfolio" value={portfolioChoice} />
      <AgreementSectionPortoflio styles={styles} agreement={agreement} handleAgreementChange={handleAgreementChange}  />
      <ButtonSectionPortoflio agreement={agreement} navigation={navigation} styles={styles} handleCreateGoal={handleCreateGoal} />
      {order && <Congrats />}
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
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
