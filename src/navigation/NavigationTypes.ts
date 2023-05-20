import { StackScreenProps } from '@react-navigation/stack';
import Routes from './routes';

export type RootStackParamList = {
    [Routes.homeScreen]: undefined;
    [Routes.chatsMenuScreen]: undefined;
    [Routes.discussionsScreen]: undefined;
};

export type HomeScreenProps = StackScreenProps<
    RootStackParamList,
    Routes.homeScreen
>;
export type ChatsMenuScreenProps = StackScreenProps<
    RootStackParamList,
    Routes.chatsMenuScreen
>;
export type DiscussionsScreenProps = StackScreenProps<
    RootStackParamList,
    Routes.discussionsScreen
>;