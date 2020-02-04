import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Icon } from 'react-native-elements'

const TabIcon = (props) => (
    <Icon
      name={"home"}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Login extends Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button>Login</Button>
            </View>
        );
    }
}