import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.groceryapp',
  appName: 'Grocery App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
