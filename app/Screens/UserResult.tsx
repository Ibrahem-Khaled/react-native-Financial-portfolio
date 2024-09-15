import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// مكون FactItem
const FactItem = ({ label, value }) => (
  <View style={styles.factItem}>
    <Text style={styles.factLabel}>{label}</Text>
    <Text style={styles.factValue}>{value}</Text>
    <AntDesign name="questioncircleo" size={20} color="rgba(188, 188, 188, 1)" />
  </View>
);

// مكون AllocationItem
const AllocationItem = ({ label, name, percentage, color }) => (
  <View style={styles.allocationItem}>
    <View style={[styles.allocationIcon, { backgroundColor: color }]}>
      <Text style={styles.allocationIconText}>{label}</Text>
    </View>
    <View style={styles.allocationDetails}>
      <Text style={styles.allocationName}>{name}</Text>
      <Text style={styles.allocationPercentage}>{percentage}</Text>
    </View>
  </View>
);

const UserResult = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation<any>();
  // Data for the line chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [10000, 11000, 12000, 14000, 13000, 15000],
        strokeWidth: 2,
      },
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Suggested Portfolio</Text>
          <TouchableOpacity>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Growth & Income Section */}
        <View style={styles.portfolioInfo}>
          <View style={styles.riskLevel}>
            <Text style={styles.riskLevelNumber}>3</Text>
          </View>
          <View>
            <Text style={styles.portfolioTitle}>Growth & Income</Text>
            <Text style={styles.riskLevelText}>Risk level 3</Text>
          </View>
        </View>
        <Text style={styles.portfolioDescription}>
          This portfolio is a typical retirement portfolio, suitable for strategic investors who are willing to tolerate some market risk in search for long term gains, usually with a mid to long term investment time horizon (5-10 years).
        </Text>

        {/* Performance Chart */}
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#625EEE',
              backgroundGradientTo: '#ECEAFE',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              strokeWidth: 2,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Text style={styles.chartText}>Performance of USD 10,000 in the past 6 months</Text>
        </View>

        {/* Choose Portfolio Button */}
        <TouchableOpacity onPress={() => navigation.navigate('ChoosePortfolio')} style={styles.choosePortfolioButton}>
          <Text style={styles.choosePortfolioButtonText}>Choose Portfolio</Text>
        </TouchableOpacity>

        <Text style={{}}>Growth & Income Portfolio</Text>
        <Text style={{}}>Risk Level 3/5</Text>
        <Text style={styles.allocationDetails}>40% fixed income, 60% equities</Text>

        {/* Allocation List */}
        <View style={styles.allocationContainer}>
          <AllocationItem label="BND" name="Vanguard Total World Stock Index Fund ETF" percentage="20%" color="#C0C0C0" />
          <AllocationItem label="BNDX" name="Vanguard Total World Stock Index Fund ETF" percentage="20%" color="#C0C0C0" />
          <AllocationItem label="VTI" name="Vanguard Total World Stock Index Fund ETF" percentage="32%" color="#625EEE" />
          <AllocationItem label="VXUS" name="Vanguard Total World Stock Index Fund ETF" percentage="21%" color="#625EEE" />
          <AllocationItem label="VB" name="Vanguard Total World Stock Index Fund ETF" percentage="2%" color="#625EEE" />
          <AllocationItem label="VTV" name="Vanguard Total World Stock Index Fund ETF" percentage="2%" color="#625EEE" />
          <AllocationItem label="VSS" name="Vanguard Total World Stock Index Fund ETF" percentage="2%" color="#625EEE" />
          <AllocationItem label="VWO" name="Vanguard Total World Stock Index Fund ETF" percentage="1%" color="#625EEE" />
        </View>

        {/* Download link */}
        <TouchableOpacity style={styles.downloadLink}>
          <AntDesign name="download" size={20} color="black" />
          <Text style={styles.downloadText}>Download the pdf sheet to know more</Text>
        </TouchableOpacity>

        {/* Portfolio Key Facts */}
        <View style={styles.portfolioFacts}>
          <Text style={styles.portfolioFactsTitle}>Portfolio Key Facts</Text>
          <Text style={[styles.portfolioFactsTitle, { fontSize: 14, fontWeight: '400', color: 'gray' }]}>Last updated on 11/11/2023</Text>
          <FactItem label="Annualized Return" value="12.0%" />
          <FactItem label="Dividend Yield" value="2.30%" />
          <FactItem label="Total Expense Ratio" value="0.05%" />
          <FactItem label="Standard Deviation" value="11.1%" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  portfolioInfo: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  riskLevel: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ECEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  riskLevelNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#625EEE',
  },
  portfolioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  riskLevelText: {
    color: '#6F6F6F',
  },
  portfolioDescription: {
    margin: 20,
    color: '#6F6F6F',
    maxWidth: '75%',
  },
  chartContainer: {
    padding: 20,
    alignItems: 'center',
  },
  chartText: {
    color: '#6F6F6F',
    marginTop: 10,
  },
  choosePortfolioButton: {
    backgroundColor: '#625EEE',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  choosePortfolioButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  allocationContainer: {
    marginVertical: 20,
  },
  allocationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    justifyContent: 'space-between',
  },
  allocationIcon: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
    width: 100,
  },
  allocationIconText: {
    fontSize: 16,
    color: 'white',
  },
  allocationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  allocationName: {
    fontSize: 16,
    color: '#333',
    maxWidth: '70%',
  },
  allocationPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadLink: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  downloadText: {
    marginLeft: 10,
    color: 'rgba(98, 94, 238, 1)',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  portfolioFacts: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F9F9F9',
  },
  portfolioFactsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  factItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(233, 233, 233, 0.5)',
    padding: 14,
    alignItems: 'center',
  },
  factLabel: {
    color: '#6F6F6F',
    flex: 1,
  },
  factValue: {
    fontWeight: 'bold',
    marginRight: '20%',
  },
});
