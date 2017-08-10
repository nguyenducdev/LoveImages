import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { Provider, connect } from 'react-redux';
import Lists from './components/Lists';
import Test from './components/Test';

import store from './configStore';

const RouterWithRedux = connect()(Router)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="Home"
                            component={Test}
                            title="Home"
                            inital={true} />
                        <Scene key="List"
                            component={Lists}
                            title="List" />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}
