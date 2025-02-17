import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [steps, setSteps] = useState(0);
  const [cryptoEarnings, setCryptoEarnings] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prevSteps) => prevSteps + Math.floor(Math.random() * 5));
      setCryptoEarnings((prevEarnings) => prevEarnings + Math.random() * 0.001);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync('Join me on this amazing fitness journey with crypto rewards!');
    }
  };

  return (
    <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.container}>
      <Text style={styles.headline}>Move More, Earn Crypto</Text>
      <Text style={styles.subheadline}>Track your steps and earn crypto rewards.</Text>

      {/* <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Steps: {steps}</Text>
        <Text style={styles.statsText}>Crypto Earned: {cryptoEarnings.toFixed(6)} BTC</Text>
      </View> */}

      {/* <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity> */}

      <View style={styles.challengeContainer}>
        <Text style={styles.challengeTitle}>🔥 Daily Challenge</Text>
        <Text style={styles.challengeText}>Walk 5,000 steps to unlock a reward!</Text>
      </View>

      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>🏆 Top Earners</Text>
        <Text style={styles.leaderboardText}>1. Alice - 0.05 BTC</Text>
        <Text style={styles.leaderboardText}>2. Bob - 0.03 BTC</Text>
        <Text style={styles.leaderboardText}>3. Charlie - 0.02 BTC</Text>
      </View>

      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <FontAwesome name="share-alt" size={24} color="white" />
        <Text style={styles.buttonText}>Share Your Progress</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheadline: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 20,
  },
  statsText: {
    fontSize: 18,
    color: 'white',
  },
  primaryButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  challengeContainer: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  challengeText: {
    fontSize: 14,
    color: 'white',
  },
  leaderboardContainer: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold',
  },
  leaderboardText: {
    fontSize: 14,
    color: 'white',
  },
  shareButton: {
    flexDirection: 'row',
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;