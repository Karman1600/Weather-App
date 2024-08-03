import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherDetails = ({weatherData}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currentTemperature}>{weatherData?.main?.temp}°C</Text>
      <Text style={styles.weatherCondition}>
        {weatherData?.weather[0].description}
      </Text>
      <Text style={styles.weatherCondition}>
        Wind speed: {weatherData?.wind?.speed} m/s
      </Text>
      <Text style={styles.weatherCondition}>
        Humidity: {weatherData?.main?.humidity}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  currentTemperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  weatherCondition: {
    fontSize: 18,
    color: '#666',
  },
  location: {
    fontSize: 18,
    color: '#666',
  },
  refreshButtonContainer: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  refreshButton: {
    fontSize: 18,
    color: '#fff',
  },
});
export default WeatherDetails;
