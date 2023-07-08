import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import { ThemeContext } from './src/context/ThemContext';
import { useState } from 'react';
import { myColors } from './src/styles/colors';

export default function App() {
  const [theme, setTheme] = useState(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#000' : undefined }]}>

      
      <StatusBar style="auto" />
      <Switch
        value={theme.theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
