import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- Type Definitions ---
type WifiNetwork = {
  SSID: string;
  BSSID: string;
};

// --- Whitelisted Networks (Static Display Only) ---
const WHITELIST: WifiNetwork[] = [
  { SSID: 'DICT-WIFI', BSSID: '00:11:22:33:44:55' },
  { SSID: 'NU-Secure', BSSID: '66:77:88:99:AA:BB' },
];

// --- Wi-Fi Scanner Tab ---
function WifiScanner() {
  const [wifiList, setWifiList] = useState<WifiNetwork[]>([]);

  const scanWifi = async () => {
    // Permission and scan logic to be added by students later
    // This is a placeholder to simulate scan button
    setWifiList([
      { SSID: 'DICT-WIFI', BSSID: '00:11:22:33:44:55' },
      { SSID: 'CoffeeShop-WiFi', BSSID: '11:22:33:44:55:66' },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button title="Scan Wi-Fi Networks" onPress={scanWifi} />

      <ScrollView style={{ marginTop: 20 }}>
        <Text style={styles.heading}>Detected Networks:</Text>
        {wifiList.map((wifi, index) => (
          <Text key={index} style={styles.listItem}>
            {wifi.SSID} ({wifi.BSSID})
          </Text>
        ))}

        <View style={{ marginTop: 30 }}>
          <Text style={styles.heading}>Whitelisted Networks:</Text>
          {WHITELIST.map((w, i) => (
            <Text key={i} style={styles.listItem}>
              {w.SSID} ({w.BSSID})
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// --- Other Tabs (Placeholder Components) ---
function WhitelistScreen() {
  return (
    <View style={styles.center}>
      <Text>Whitelist Settings Coming Soon</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.center}>
      <Text>Settings Page</Text>
    </View>
  );
}

// --- Navigation Setup ---
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Scanner" component={WifiScanner} />
        <Tab.Screen name="Whitelist" component={WhitelistScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 5,
    fontSize: 14,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
