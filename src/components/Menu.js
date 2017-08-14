import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, H1, H2, H3, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Menu extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Button block info style={styles.button} onPress={Actions.M}>
                    <Text>Categories</Text>
                </Button>
                <Button block info style={styles.button} onPress={Actions.M}>
                    <Text>Color</Text>
                </Button>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        marginTop: 10,
        width: 200
    }
});