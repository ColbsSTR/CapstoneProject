import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, Title } from 'native-base';
import COLORS from '../assets/colors';

const TabIcon = (props) => (
    <Icon
      name={"home"}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Login extends Component {
    static navigationOptions = {
        tabBarIcon: TabIcon,
        headerShown: false,
        headerTitleStyle: {
            color: 'black',
        },
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
        if (this.state.username === '' || this.state.password === '') {
            Alert.alert('Please Fill Out Both Fields');
        } else {
            this.props.navigation.navigate('Home');
        }
    }

    createNew()
    {
        this.props.navigation.navigate('CreateNew');
    }

    render() {
        return (
            <Container style={{ backgroundColor: COLORS.appBackground}}>
                <Image 
                source={require('../../images/homelogo.png')} 
                resizeMode="contain"
                style={{ alignSelf: 'center', marginTop: 20, width: '100%', height: '12%' }}
                />
                <Content padder>
                <Form>
                    <Item floatingLabel>
                    <Label> Username </Label>
                    <Input style={styles.textColor} onChangeText={(text) => {this.setState({username: text})}}/>
                    </Item>
                    <Item floatingLabel>
                    <Label> Password </Label>
                    <Input style={styles.textColor} onChangeText={(text) => {this.setState({password: text})}}/>
                    </Item>
                </Form>
                <Content style={{ paddingTop: 20}}>
                    <Button style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.slateGrey}} onPress={() => { this.signIn() }}><Text> Login </Text></Button>
                </Content>
                <Content>
                    <Button onPress={() => { this.createNew() }} transparent style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#F19C00'}}>Create New User</Text>
                    </Button>
                </Content>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    textColor: {
        color: 'black'
    }
})