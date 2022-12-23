import { createContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme, Dimensions, View } from 'react-native'

export const AppContext = createContext();
const { width, height } = Dimensions.get("screen");

export function AppProvider({ children }) {
  const [scheme, setSchem] = useState(useColorScheme());
  const bgColor = scheme === 'dark' ? '#0d1216' : scheme === 'light' ? '#ededed' : scheme === 'ultra-dark' ? `black` : scheme === 'light-two' ? 'white' : 'white';
  const textColor = scheme === 'light' ? '#2c3e50' : scheme === 'dark' ? '#e6e3e3' : scheme === 'ultra-dark' ? `#bdc1c6` : scheme === 'light-two' ? 'black' : 'white';
  const PrimaryColor = '#f32c55'
  const setScheme = (theme) => {
    setSchem(theme);
    // AsyncStorage.setItem('theme', theme)
  }
  return (
    <NavigationContainer>
      <View style={{
        backgroundColor: bgColor,
        flex: 1
      }}>
        <AppContext.Provider
          value={{
            textColor,
            bgColor,
            setScheme,
            PrimaryColor,
            width,
            height,
          }}>
          {children}
        </AppContext.Provider>
      </View>
    </NavigationContainer>
  );
};
