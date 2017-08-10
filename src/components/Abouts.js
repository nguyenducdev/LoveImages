import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid, Col } from 'native-base';

export default class Abouts extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://forsharing.info/logo_new.png' }} />
                                <Body>
                                    <Text>Forsharing Dev</Text>
                                    <Text note>Forsharing.info</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://via.placeholder.com/350x150' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>List Apps</Text>
                        </CardItem>
                        <CardItem>
                            <Content>
                                <Grid>
                                    <Col>
                                        <Text>Blog</Text>
                                        <Thumbnail large source={{ uri: 'https://forsharing.info/logo_new.png' }} />
                                    </Col>
                                </Grid>
                            </Content>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}