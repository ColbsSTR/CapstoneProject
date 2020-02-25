import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

const TabIcon = (props) => (
    <Icon
			name='home'
  		type='font-awesome'
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Home extends Component {
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
                <Text>Hello from the home screen</Text>
            </View>
        );
    }
}