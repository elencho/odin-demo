import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Welcome: undefined;
};

export type NavigateFromAuth = AuthStackParamList & {
  Main: undefined;
};

export type AuthScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<NavigateFromAuth, Screen>;
