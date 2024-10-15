import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, WelcomeScreen } from '@/screens/auth';
import { AuthStackParamList } from '../hooks/auth';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
