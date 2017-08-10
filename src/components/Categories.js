import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon } from 'native-base';

export default class Categories extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem >
                            <Text>New</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Popular <Icon name="star" /></Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Advice</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}