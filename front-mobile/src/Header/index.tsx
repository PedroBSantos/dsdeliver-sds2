import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <Text style={styles.text}>DS Delivery</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 95,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default Header;