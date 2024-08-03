import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        //   params: {
        //     lat: 37.7749,
        //     lon: -122.4194,
        //     appid: '630cbf1b43ea91df13091e58cfe36a68',
        //   },
        // });
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat='51.0271596'&lon='-114.4174727'&appid=630cbf1b43ea91df13091e58cfe36a68`)
        setWeather(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchWeather();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{weather.main.temp}°C</Text>
      <Text style={styles.weatherCondition}>{weather.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 24,
    color: 'red',
  },
  loading: {
    fontSize: 24,
    color: 'gray',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  weatherCondition: {
    fontSize: 24,
  },
});

export default Weather;