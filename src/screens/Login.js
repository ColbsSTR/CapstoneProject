import React, { Component } from 'react';
import { Button, View } from 'react-native';
import Icon from 'react-native-ionicons'
import { Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

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
            <View style={{flex: 1, backgroundColor: '#FEF2E4'}}>
                <Image
                    style={{flex:1, height: undefined, width:undefined}}
                    source ={require('../images/logo.png')} 
                    resizeMode="contain"
                    
                    />
                    <View>
                        <TextInput style = {{margin:15,height:40, borderColor: '#3B291E',borderWidth:1}}
                        underlineColorAndroid = "transparent"
                        placeholder="Email"
                        placeholderTextColor="#3B291E"
                        autoCapitalize="none"

                        />
                    </View>
                    <View>
                    <TextInput style = {{margin:15,height:40, borderColor: '#3B291E',borderWidth:1}}
                        underlineColorAndroid = "transparent"
                        placeholder="Password"
                        placeholderTextColor="#3B291E"
                        autoCapitalize="none"
                        
                        />
                    </View>
                    <View>
                    <Button
                    title="Login"
                    style={{alignItems: 'center', margin:10,heigh:40}}
                    />
                    </View>
                    
            
            </View>

        );
    }
}