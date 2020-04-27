import React, { Component } from 'react';
import { Container, Content, Item, Input, Button, Text, Right, Title, Body, Form } from 'native-base';
import { Icon } from 'react-native-elements';
import COLORS from '../assets/colors';

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
            error: false,
        };
    }

    componentDidMount() {
        
    }

    setRePassword(text)
    {
        if (text === this.state.password) {
            this.setState({ rePassword: text, error: false});
        } else if (text === '') {
            this.setState({ rePassword: '', error: false});
        } else {
            this.setState({ rePassword: text, error: true});
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
                            <Input onChangeText={ (text) => { this.setState({ password: text})}} placeholder='Enter Password'/>
                        </Item>
                        <Item>
                            <Input onChangeText={ (text) => { this.setRePassword(text)}} placeholder= 'Repeat Password'/>
                            <Icon name={this.state.error ? 'times-circle' : 'check'} type='font-awesome'/>
                        </Item>
                    </Form>
                <Content style={{ paddingTop: 20}}>
                    <Button style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.slateGrey}} onPress={() => { this.props.navigation.navigate('Home')}}>
                        <Text> Create Account </Text>
                    </Button>
                </Content>
                </Content>
             </Container>
        );
    }
}