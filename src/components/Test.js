import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { Actions } from 'react-native-router-flux';

export default class Test extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        This is Content Section
                    </Text>
                    <Button onPress={Actions.List}>
                        <Text>List</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}