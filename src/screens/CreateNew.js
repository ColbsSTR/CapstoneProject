import React, { Component } from 'react';
import { Container, Content, Item, Input, Button, Text, Right, Title, Body, Form } from 'native-base';
import { Icon } from 'react-native-elements';
import COLORS from '../assets/colors';
import { Alert } from 'react-native';

export default class CreateNew extends Component {

    static navigationOptions = {
        title: 'Create New User',
        headerShown: true,
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rePassword: '',
            equal: true,
        };
    }

    componentDidMount() {
        
    }

    setRePassword(text)
    {
        if (text === this.state.password) {
            this.setState({ rePassword: text, equal: true});
        } else if (text === '') {
            this.setState({ rePassword: '', equal: true});
        } else {
            this.setState({ rePassword: text, equal: false});
        }
    }

    setPassword(text)
    {
        if (text === this.state.rePassword) {
            this.setState({ password: text, equal: true});
        } else if (text === '') {
            this.setState({ password: '', equal: true});
        } else {
            this.setState({ password: text, equal: false});
        }

    }

    createUser()
    {
        if(this.state.equal === false) {
            Alert.alert('Password do not match.');
        } else if(this.state.password.length < 6) {
            Alert.alert('Please enter a longer password.');
        } else {
            this.props.navigation.navigate('Home');
        }


    }

    render() {
        return (
             <Container style={{ backgroundColor: COLORS.appBackground}}>
                <Content padder>
                    <Form>
                        <Item>
                            <Input onChangeText={ (text) => { this.setState({ username: text})}} placeholder='Enter New Username'/>
                        </Item>
                        <Item>
                            <Input onChangeText={ (text) => { this.setPassword(text)}} placeholder='Enter Password'/>
                        </Item>
                        <Item>
                            <Input onChangeText={ (text) => { this.setRePassword(text)}} placeholder= 'Repeat Password'/>
                            <Icon name={this.state.equal ? 'check' : 'times-circle'} type='font-awesome'/>
                        </Item>
                    </Form>
                <Content style={{ paddingTop: 20}}>
                    <Button style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.slateGrey}} onPress={() => { this.createUser()}}>
                        <Text> Create Account </Text>
                    </Button>
                </Content>
                </Content>
             </Container>
        );
    }
}