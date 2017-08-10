import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { Provider, connect } from 'react-redux'
import Lists from './components/Lists';
import store from './configStore';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Love Images</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Text>
                            This is Content Section
                        </Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Provider>
        );
    }
}
