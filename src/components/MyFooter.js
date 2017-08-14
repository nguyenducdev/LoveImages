import React, { Component } from 'react';
import { Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class MyFooter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={Actions.Index}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button vertical onPress={Actions.Favorites}>
                        <Icon name="star" />
                        <Text>Favorites</Text>
                    </Button>
                    <Button vertical onPress={Actions.Share}>
                        <Icon name="navigate" />
                        <Text>Share</Text>
                    </Button>
                    <Button vertical onPress={Actions.About}>
                        <Icon name="person" />
                        <Text>About</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}