import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleCityInput = (text: any) => {
    setCity(text);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  const fetchWeatherData = async (city: any) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=630cbf1b43ea91df13091e58cfe36a68`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <Image source={require('./sources/cloudy.png')} style={{height: 100, width:120}} />
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={handleCityInput}
      />
      <Button title="Search" onPress={handleSearch} />
      {weatherData ? (
        <WeatherDetails weatherData={weatherData} />
      ) : (
        <Text style={styles.noData}>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    fontSize: 36,
    fontWeight: 'bold',
  },
  input: {
    marginVertical:20,
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  noData: {
    fontSize: 18,
    color: 'gray',
  },
});

export default App;