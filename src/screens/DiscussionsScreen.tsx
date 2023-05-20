import React, { FC, useCallback } from 'react';
import {
    FlatList,
    ListRenderItem,
    Platform,
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import { Label } from '../components/Label';
import { DiscussionsScreenProps } from '../navigation/NavigationTypes';
import colors from '../theme/colors';
import { DiscussionsScreenStrings } from '../theme/strings';
import FastImage from 'react-native-fast-image'
import moment from 'moment';

interface Group {
    id: number;
    title: string;
    lastMessage: string;
    date: string;
    image: string;
}

const DiscussionsScreen: FC<DiscussionsScreenProps> = ({ navigation }) => {
    /****************************************** ATTRIBUTES ************************************************/

    /****************************************** FUNCTIONS ************************************************/

    const renderConversationItem: ListRenderItem<Group> = useCallback(({ item }) => {
        /** Group Item **/
        return <View style={groupItem}>
            <View style={groupItemLeftContent}>
                <FastImage
                    style={groupImage}
                    source={{
                        uri: item.image
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={groupTexts}>
                    <Label
                        size={16}
                        text={item.title} />
                    <Label
                        text={item.lastMessage}
                        color={colors.secondaryGray} />
                </View>
            </View>
            <View>
                <Label
                    size={12}
                    color={colors.secondaryGray}
                    text={moment(item.date).format('DD/MM/YYYY')} />
            </View>
        </View>
    }, [DUMMY_DATA])

    const renderItemSeperator = useCallback(() => {
        /** Group Item **/
        return <View style={seperator} />
    }, [DUMMY_DATA])

    /****************************************** UI ************************************************/

    return (
        <SafeAreaView style={safeArea}>
            <View style={container}>
                {/** Header **/}
                <View style={header}>
                    <Label size={20} text={DiscussionsScreenStrings.title} />
                </View>
                {/** Conversations List **/}
                <FlatList
                    keyExtractor={(item) => `${item.id}`}
                    data={DUMMY_DATA}
                    ItemSeparatorComponent={renderItemSeperator}
                    renderItem={renderConversationItem}
                />
            </View>

        </SafeAreaView>
    );
};
const {
    safeArea,
    container,
    header,
    groupItem,
    groupTexts,
    seperator,
    groupImage,
    groupItemLeftContent
} = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.whiteSecondary,
        flex: 1,
    },
    container: {
        backgroundColor: colors.defaultWhite,
        flex: 1,
    },
    header: {
        backgroundColor: colors.whiteSecondary,
        height: Platform.OS === 'ios' ? 60 : 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    groupItem: {
        height: 70,
        paddingHorizontal: 16,
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    groupTexts: {
        marginStart: 20,
    },
    seperator: {
        backgroundColor: colors.lightGray,
        height: 1,
        marginStart: 90,
        flex: 1
    },
    groupImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    groupItemLeftContent: {
        flexDirection: 'row',
    },
});

export default DiscussionsScreen;


/****************************************** DUMMY DATA ************************************************/

const DUMMY_DATA = [
    {
        id: 1182838,
        title: 'Feminen-Femininal',
        lastMessage: 'I like the name of this group!',
        date: '2023-05-13 11:54:07',
        image: 'https://cdn-icons-png.flaticon.com/512/4192/4192341.png'
    },
    {
        id: 2342342,
        title: 'TLV Survivors',
        lastMessage: 'Hi everyone, im Ellen 😊',
        date: '2023-05-11 18:30:07',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/0f/2a/bd/tlv-art-gallery.jpg'
    },
    {
        id: 8382823,
        title: `Women's aid`,
        lastMessage: 'I will join in a second',
        date: '2023-05-01 16:29:07',
        image: 'https://charity.celticfc.com/wp-content/uploads/2022/11/7-4.png'
    },
]