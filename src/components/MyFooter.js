import React, { Component } from 'react';
import { Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class MyFooter extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={Actions.Home}>
                        <Icon name="apps" />
                        <Text>Menu</Text>
                    </Button>
                    <Button vertical onPress={Actions.Favorites}>
                        <Icon name="star" />
                        <Text>Favorites</Text>
                    </Button>
                    <Button vertical onPress={Actions.Share}>
                        <Icon name="navigate" />
                        <Text>Share</Text>
                    </Button>
                    <Button vertical onPress={Actions.Abouts}>
                        <Icon name="person" />
                        <Text>Abouts</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}