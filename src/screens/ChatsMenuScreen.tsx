import React from 'react';
import {
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

const ChatsMenuScreen = () => {
    /****************************************** ATTRIBUTES ************************************************/

    /****************************************** FUNCTIONS ************************************************/

    const onPressSupport = () => {
        //TODO: implement navigation to SOS support chat
    }

    const onPressDiscussions = () => {
        //TODO: implement navigation to Disccustions screen
    }

    /****************************************** UI ************************************************/

    return (
        <SafeAreaView style={container}>
            <View style={spacer} />
            <Card onPress={onPressSupport} style={button}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon style={iconStyle} color={colors.black} size={40} name='sos' />
                    <Label text={ChatMenuScreenStrings.firstButtonText} size={30} />
                </View>
            </Card>
            <Card onPress={onPressDiscussions} style={button}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon style={iconStyle} color={colors.black} size={40} name='discussion' />
                    <Label text={ChatMenuScreenStrings.secondButtonText} size={30} />
                </View>
            </Card>
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
