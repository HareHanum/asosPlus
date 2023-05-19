import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ alignSelf: 'center', marginTop: 40 }}>Hello World</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
