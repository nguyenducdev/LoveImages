import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, H1, H2, H3, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Menu extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={{ width: 200, height: 100 }}
                        source={{ uri: 'https://forsharing.info/logo_new.png' }}
                    />
                </View>
                <View style={styles.body}>
                    <Button block info style={styles.button} onPress={Actions.M}>
                        <Text>Categories</Text>
                    </Button>
                    <Button block info style={styles.button} onPress={Actions.M}>
                        <Text>Color</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        marginTop: 10,
        width: 200,
        backgroundColor: '#000'
    }
});