import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const barHeights = [60, 70, 65, 80, 75, 85, 90, 88, 92, 95];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.search}>Search tokens...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Total Balance (USDT)</Text>
        <Text style={styles.balanceAmount}>192,615.98</Text>
        <Text style={styles.balanceChange}>+1,764$ (5.93%)</Text>
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.chart}>
          <View style={styles.barContainer}>
            {barHeights.map((height, i) => (
              <View key={i} style={[styles.bar, { height }]} />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.timeframe}>
        <TouchableOpacity style={styles.timeButton}>
          <Text>1W</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.timeButton, styles.active]}>
          <Text>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeButton}>
          <Text>6M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeButton}>
          <Text>1Y</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Deposit</Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity style={styles.actionButton}>
          <Text>Buy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.positions}>
        <Text style={styles.positionsTitle}>Portfolio positions</Text>
        <View style={styles.positionItem}>
          <View style={styles.tokenInfo}>
            <View style={[styles.tokenIcon, styles.v]} />
            <Text style={styles.tokenName}>V 1 st by 275.84</Text>
          </View>
          <View style={styles.tokenStats}>
            <Text style={styles.positionValue}>273.25</Text>
            <Text style={[styles.positionChange, { color: '-0.84%'.startsWith('+') ? '#00FF7F' : '#FF6347' }]}>-0.84%</Text>
          </View>
        </View>
        <View style={styles.positionItem}>
          <View style={styles.tokenInfo}>
            <View style={[styles.tokenIcon, styles.spot]} />
            <Text style={styles.tokenName}>SPOT 1 st by 340.28</Text>
          </View>
          <View style={styles.tokenStats}>
            <Text style={styles.positionValue}>379.70</Text>
            <Text style={[styles.positionChange, { color: '+8.73%'.startsWith('+') ? '#00FF7F' : '#FF6347' }]}>+8.73%</Text>
          </View>
        </View>
        <View style={styles.positionItem}>
          <View style={styles.tokenInfo}>
            <View style={[styles.tokenIcon, styles.ma]} />
            <Text style={styles.tokenName}>MA 1 st by 492.62</Text>
          </View>
          <View style={styles.tokenStats}>
            <Text style={styles.positionValue}>491.24</Text>
            <Text style={[styles.positionChange, { color: '-0.28%'.startsWith('+') ? '#00FF7F' : '#FF6347' }]}>-0.28%</Text>
          </View>
        </View>
      </View>
      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>Featured Tokens</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featuredItem}>
        <View style={styles.tokenInfo}>
          <View style={[styles.tokenIcon, styles.btc]} />
          <Text style={styles.tokenName}>Bitcoin BTC</Text>
        </View>
        <View style={styles.tokenStats}>
          <Text style={styles.featuredValue}>66,729.90</Text>
          <Text style={[styles.featuredChange, { color: '+5.2%'.startsWith('+') ? '#00FF7F' : '#FF6347' }]}>+5.2%</Text>
        </View>
      </View>
      <View style={styles.featuredItem}>
        <View style={styles.tokenInfo}>
          <View style={[styles.tokenIcon, styles.sol]} />
          <Text style={styles.tokenName}>Solana SOL</Text>
        </View>
        <View style={styles.tokenStats}>
          <Text style={styles.featuredValue}>227.80</Text>
          <Text style={[styles.featuredChange, { color: '+3.8%'.startsWith('+') ? '#00FF7F' : '#FF6347' }]}>+3.8%</Text>
        </View>
      </View>
      <View style={styles.featuredItem}>
        <View style={styles.tokenInfo}>
          <View style={[styles.tokenIcon, styles.eth]} />
          <Text style={styles.tokenName}>Ethereum ETH</Text>
        </View>
        <View style={styles.tokenStats}>
          <Text style={styles.featuredValue}>3,531</Text>
          <Text style={[styles.featuredChange, { color: '-1.2%'.startsWith('+') ? '#00FF7F' : '#FF6347' }]}>-1.2%</Text>
        </View>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Tokens</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1A1A2E', padding: 10 },
  header: { marginBottom: 20 },
  search: { color: '#A9A9A9', fontSize: 16, padding: 10, backgroundColor: '#2E2E3A', borderRadius: 10 },
  balanceContainer: { alignItems: 'center', marginBottom: 20 },
  balanceLabel: { color: '#A9A9A9', fontSize: 14 },
  balanceAmount: { color: '#FFF', fontSize: 32, fontWeight: 'bold' },
  balanceChange: { color: '#00FF7F', fontSize: 14 },
  chartContainer: { height: 100, backgroundColor: '#2E2E3A', borderRadius: 10, marginBottom: 20 },
  chart: { flex: 1, backgroundColor: '#3A3A50' },
  barContainer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', height: '100%' },
  bar: { width: 20, backgroundColor: '#00FF7F', marginHorizontal: 2 },
  timeframe: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  timeButton: { padding: 10, backgroundColor: '#2E2E3A', borderRadius: 5 },
  active: { backgroundColor: '#00FF7F' },
  actions: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  actionButton: { padding: 15, backgroundColor: '#2E2E3A', borderRadius: 5 },
  positions: { marginBottom: 20 },
  positionsTitle: { color: '#A9A9A9', fontSize: 16, marginBottom: 10 },
  positionItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#2E2E3A', borderRadius: 5, marginBottom: 10 },
  tokenInfo: { flexDirection: 'row', alignItems: 'center' },
  tokenName: { marginLeft: 10, color: '#FFF' },
  tokenStats: { alignItems: 'flex-end' },
  tokenIcon: { width: 20, height: 20, borderRadius: 5 },
  v: { backgroundColor: '#4169E1' },
  spot: { backgroundColor: '#32CD32' },
  ma: { backgroundColor: '#FF4500' },
  positionValue: { color: '#FFF', fontWeight: 'bold' },
  positionChange: { fontSize: 12 },
  featured: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  featuredTitle: { color: '#A9A9A9', fontSize: 16 },
  viewAll: { color: '#00FF7F' },
  featuredItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#2E2E3A', borderRadius: 5, marginBottom: 10 },
  btc: { backgroundColor: '#DAA520' },
  sol: { backgroundColor: '#C238D8' }, // Custom Ray color
  eth: { backgroundColor: '#FFD23F' }, // Custom Orca color
  featuredValue: { color: '#FFF', fontWeight: 'bold' },
  featuredChange: { fontSize: 12 },
  nav: { flexDirection: 'row', justifyContent: 'space-around' },
  navButton: { padding: 10 },
});