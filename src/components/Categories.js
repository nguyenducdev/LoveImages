import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Categories extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>New</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Popular <Icon name="star" /></Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem onPress={Actions.ListImages}>
                            <Text>Advice</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}