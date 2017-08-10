import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Provider, connect } from 'react-redux';
import Favorites from './components/Favorites';
import Categories from './components/Categories';
import Share from './components/Share';
import Abouts from './components/Abouts';
import MyFooter from './components/MyFooter';

import store from './configStore';

const RouterWithRedux = connect()(Router)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <RouterWithRedux>
                        <Scene key="root" tabs={true} tabBarComponent={MyFooter} >
                            <Scene key="Home"
                                component={Categories}
                                title="Love Images"
                                inital={true} />
                            <Scene key="Favorites"
                                component={Favorites}
                                title="Favorites" />
                            <Scene key="Share"
                                component={Share}
                                title="Share" />
                            <Scene key="About"
                                component={Abouts}
                                title="About Us" />
                        </Scene>
                    </RouterWithRedux>
                </Container>
            </Provider>
        );
    }
}
