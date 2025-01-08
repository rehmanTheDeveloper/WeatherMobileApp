# Weather Mobile Application Documentation

## Overview
The Weather Mobile App is a React Native application designed to provide real-time weather data for user-selected or current locations. The app features city management, detailed weather forecasts, and customizable settings. It integrates seamlessly with a weather API for accurate and up-to-date weather information.

---

## Features
1. **Weather Data:**
   - Fetch current weather and forecasts.
   - Display temperature, humidity, wind speed, and more.
2. **Location Management:**
   - Automatically fetch user’s current location.
   - Add, view, and remove favorite cities.
3. **Settings Customization:**
   - Toggle between Light and Dark themes.
   - Reset application data.
4. **Persistent Data Storage:**
   - Use AsyncStorage to save user preferences and favorite cities.

---

## Packages Used
1. **@react-native-community/geolocation:** Fetch the user’s current location.
2. **axios:** Handle API requests to fetch weather data.
3. **react-native-wind:** Utility-first CSS styling for React Native components.
4. **react-native-heroicons:** Icon library for enhancing UI.
5. **react-native-svg:** Render SVG images for weather icons.
6. **react-native-uuid:** Generate unique identifiers.
7. **react-native-rename:** Rename the app during development.
8. **moment:** Format and manage date/time data.
9. **dayjs:** Lightweight date/time formatting alternative.
10. **@react-navigation/native:** Core library for React Navigation.
11. **@react-navigation/stack:** Implement stack-based navigation.
12. **@react-navigation/bottom-tabs:** Create bottom tab navigations.
13. **react-native-safe-area-context:** Respect device safe areas.
14. **react-native-gesture-handler:** Handle touch gestures.
15. **react-native-screens:** Optimize performance with native screen usage.
16. **@react-native-async-storage/async-storage:** Persistent local storage.

---

## APIs
- **Weather API:**
  - **Endpoint:** [WeatherAPI](https://www.weatherapi.com/)
  - Provides weather details such as current conditions, forecasts, and weather images.

---

## Fonts
- **NoirPro:** Used throughout the app for a consistent and modern typography.

---

## Pages
1. **OnBoard:**
   - Displays app features and collects location permissions during the first launch.
2. **Home:**
   - Shows current weather details and forecasts for the user’s location.
   - Includes navigation options for Settings and Cities screens.
3. **Cities:**
   - Lists saved cities with options to view or remove them.
4. **Search:**
   - Allows users to search for and add new cities by name.
5. **Settings:**
   - Includes theme toggling and app reset functionality.

---

## Hooks
### **useCity**
- **searchCity:** Search for a city by name.
- **addCity:** Add a city to the saved list.
- **removeCity:** Remove a city from the saved list.
- **fetchCities:** Fetch all saved cities from AsyncStorage.

### **useWeather**
- **currentWeather:** Fetch the current weather for a location.
- **weatherForecast:** Fetch the weather forecast for a location.
- **getWeatherImage:** Retrieve corresponding weather icons.

---

## Helpers
### **AsyncHelpers**
- **getItem:** Retrieve data from AsyncStorage.
- **setItem:** Save data to AsyncStorage.
- **removeItem:** Remove data from AsyncStorage.

---

## Application Flow
### 1. **App Launch Behavior:**
   - On first launch, the Onboarding screen is displayed.
   - Subsequent launches will display the Home screen directly.

### 2. **Location Fetching and Weather Data:**
   - The user is prompted to allow location access after onboarding.
   - The current location (city, region, country) is fetched and stored in AsyncStorage.
   - Weather data is retrieved using the stored location and displayed on the Home screen.

### 3. **Settings Screen:**
   - Options include:
     - Toggle between Light and Dark themes.
     - Reset the app to its initial state by clearing AsyncStorage data.

### 4. **Cities Screen:**
   - Displays a list of saved cities stored in AsyncStorage.
   - Includes navigation options for adding a new city or returning to the Home screen.

### 5. **Add City Screen:**
   - Search for cities using an input field.
   - Add selected cities to AsyncStorage.

---

## Installation and Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the Metro bundler with `npm start`.
4. Run the application:
   - For Android: `npm run android`
   - For iOS: `npm run ios`

---

## Future Enhancements
1. **Notifications:** Add weather alerts and reminders.
2. **Advanced Search:** Enable filtering by country or region.
3. **Multi-Language Support:** Provide localization for different languages.
4. **Integration with Wearables:** Display weather data on smartwatches.
5. **Improved Weather Visuals:** Add animations for different weather conditions.

---

## Conclusion
The Weather Mobile App offers a clean and efficient solution for accessing real-time weather data. Its user-friendly features and responsive design make it a reliable tool for everyday weather tracking.