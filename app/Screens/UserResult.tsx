import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const UserResult = () => {
  const screenWidth = Dimensions.get('window').width;

  // Data for the line chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [10000, 11000, 12000, 14000, 13000, 15000],
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
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
          <Text style={styles.portfolioDescription}>
            This portfolio is a typical retirement portfolio, suitable for strategic investors who are willing to tolerate some market risk in search for long-term gains.
          </Text>
        </View>
      </View>

      {/* Performance Chart using react-native-chart-kit */}
      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={screenWidth - 40} // from Dimensions
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
      <TouchableOpacity style={styles.choosePortfolioButton}>
        <Text style={styles.choosePortfolioButtonText}>Choose Portfolio</Text>
      </TouchableOpacity>

      {/* Allocation List */}
      <View style={styles.allocationContainer}>
        <Text style={styles.allocationTitle}>Growth & Income Portfolio</Text>
        <Text style={styles.allocationSubTitle}>Risk Level 3/5</Text>
        <Text style={styles.allocationDetails}>40% fixed income, 60% equities</Text>

        <View style={styles.allocationList}>
          <View style={styles.allocationItem}>
            <Text style={styles.allocationItemText}>BND</Text>
            <Text style={styles.allocationPercentage}>20%</Text>
          </View>
          <View style={styles.allocationItem}>
            <Text style={styles.allocationItemText}>BNDX</Text>
            <Text style={styles.allocationPercentage}>20%</Text>
          </View>
          <View style={styles.allocationItem}>
            <Text style={styles.allocationItemText}>VTI</Text>
            <Text style={styles.allocationPercentage}>32%</Text>
          </View>
          <View style={styles.allocationItem}>
            <Text style={styles.allocationItemText}>VXUS</Text>
            <Text style={styles.allocationPercentage}>21%</Text>
          </View>
        </View>
      </View>

      {/* Portfolio Key Facts */}
      <View style={styles.portfolioFacts}>
        <Text style={styles.portfolioFactsTitle}>Portfolio Key Facts</Text>
        <View style={styles.factItem}>
          <Text style={styles.factLabel}>Annualized Return</Text>
          <Text style={styles.factValue}>12.0%</Text>
        </View>
        <View style={styles.factItem}>
          <Text style={styles.factLabel}>Dividend Yield</Text>
          <Text style={styles.factValue}>2.30%</Text>
        </View>
        <View style={styles.factItem}>
          <Text style={styles.factLabel}>Total Expense Ratio</Text>
          <Text style={styles.factValue}>0.05%</Text>
        </View>
        <View style={styles.factItem}>
          <Text style={styles.factLabel}>Standard Deviation</Text>
          <Text style={styles.factValue}>11.1%</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: 10,
    color: '#6F6F6F',
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
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  allocationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  allocationSubTitle: {
    color: '#6F6F6F',
  },
  allocationDetails: {
    marginVertical: 10,
    color: '#6F6F6F',
  },
  allocationList: {
    marginTop: 10,
  },
  allocationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  allocationItemText: {
    fontSize: 16,
  },
  allocationPercentage: {
    fontSize: 16,
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
    marginBottom: 20,
  },
  factItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  factLabel: {
    color: '#6F6F6F',
  },
  factValue: {
    fontWeight: 'bold',
  },
});
