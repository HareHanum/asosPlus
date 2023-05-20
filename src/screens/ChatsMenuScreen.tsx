import React, { FC, useState } from 'react';
import {
    ActivityIndicator,
    NativeModules,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Label } from '../components/Label';
import { ChatMenuScreenStrings } from '../theme/strings';
import Icon from '../components/icons';
import colors from '../theme/colors';
import { Card } from 'react-native-paper';
import { ChatsMenuScreenProps } from '../navigation/NavigationTypes';
import Routes from '../navigation/routes';

const ChatsMenuScreen: FC<ChatsMenuScreenProps> = ({ navigation }) => {
    /****************************************** ATTRIBUTES ************************************************/

    const [isLoadingSupport, setLoadingSupport] = useState(false);

    var RNKommunicateChat = NativeModules.RNKommunicateChat;
    const conversationObject = {
        'appId': 'e3c3387ca29771fa3e7835155248250a',
        isSingleConversation: false
    }

    /****************************************** FUNCTIONS ************************************************/

    const onPressSupport = () => {
        setLoadingSupport(true)
        RNKommunicateChat.buildConversation(conversationObject, (response: any, responseMessage: any) => {
            setLoadingSupport(false)
            if (response == "Success") {
                console.log("Conversation Successfully with id:" + responseMessage);
            } else {
                console.log("Kommunicate create conversation failed : " + responseMessage);
            }
        });
    }

    const onPressDiscussions = () => {
        navigation.navigate(Routes.discussionsScreen)
    }

    /****************************************** UI ************************************************/

    return (
        <SafeAreaView style={container}>
            {/** First Spacer **/}
            <View style={spacer} />
            {/** Support Card Button **/}
            <Card style={button}>
                <TouchableOpacity onPress={onPressSupport} style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    {isLoadingSupport ? <ActivityIndicator color={colors.black} size={'large'} style={iconStyle} /> : <Icon style={iconStyle} color={colors.black} size={40} name='sos' />
                    }
                    <Label text={ChatMenuScreenStrings.firstButtonText} size={30} />
                </TouchableOpacity>
            </Card>
            {/** Discussions Card Button **/}
            <Card style={button}>
                <TouchableOpacity onPress={onPressDiscussions} style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon style={iconStyle} color={colors.black} size={40} name='discussion' />
                    <Label text={ChatMenuScreenStrings.secondButtonText} size={30} />
                </TouchableOpacity>
            </Card>
            {/** Second Spacer **/}
            <View style={spacer} />
        </SafeAreaView>
    );
};
const {
    container,
    button,
    iconStyle,
    spacer,
} = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    spacer: {
        flex: 0.2
    },
    button: {
        marginHorizontal: 24,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.4
    },
    iconStyle: {
        marginEnd: 16
    }
});

export default ChatsMenuScreen;
