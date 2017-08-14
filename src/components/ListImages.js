import React, { Component } from 'react';
import { Container, Content, List, ListItem, } from 'native-base';

import CardImage from './CardImage';

export default class ListImages extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                        <ListItem>
                            <CardImage />
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}