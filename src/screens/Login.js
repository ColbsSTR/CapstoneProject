import React, { Component } from 'react';
//import { Button, View, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Alert } from 'react-native';

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
            username: '',
            password: ''
        };
    }

    componentDidMount() {

    }

    signIn() {
        if (this.state.username || this.state.password === '') {
            Alert.alert('Please Fill Out Both Fields');
        } else {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <Container>
                <Content padder>
                <Form>
                    <Item floatingLabel>
                    <Label>Username</Label>
                    <Input onChangeText={(text) => {this.setState({username: text})}}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input onChangeText={(text) => {this.setState({password: text})}}/>
                    </Item>
                </Form>
                <Content style={{ paddingTop: 20}}>
                    <Button style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} primary onPress={() => { this.signIn() }}><Text> Login </Text></Button>
                </Content>
                </Content>
            </Container>
        );
    }
}