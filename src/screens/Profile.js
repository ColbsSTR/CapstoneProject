import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

const TabIcon = (props) => (
    <Icon
      name="person"
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Profile extends Component {
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
                <Text>Hello from the profile screen</Text>
            </View>
        );
    }
}