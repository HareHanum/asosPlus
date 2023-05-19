import React from 'react';
import { Text, StyleProp, StyleSheet, TextStyle } from 'react-native';

import { isEmpty } from '../utils/stringsUtils';

interface Props {
    style?: StyleProp<TextStyle>;
    partOne?: string;
    partTwo?: string;
}

const Title: React.FC<Props> = ({ style = {}, partOne = '', partTwo = '' }) => (
    <Text style={[styles.title, style]}>
        {isEmpty(partOne) ? partOne : `${partOne} `}
        <Text style={styles.bold}>{partTwo}</Text>
    </Text>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'OktaNeue-Normal',
    },
    bold: {
        fontFamily: 'OktaNeue-Bold',
    },
});

export { Title };
