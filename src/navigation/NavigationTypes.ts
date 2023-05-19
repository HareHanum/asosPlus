import { StackScreenProps } from '@react-navigation/stack';
import Routes from './routes';

export type RootStackParamList = {
    [Routes.homeScreen]: undefined;
};

export type HomeScreenProps = StackScreenProps<
    RootStackParamList,
    Routes.homeScreen
>;