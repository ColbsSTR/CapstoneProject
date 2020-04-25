import React, { Component } from 'react';
import { Container, Content, Item, Input, Header, Left, Right, Title, Body } from 'native-base';
import { Icon } from 'react-native-elements';

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
            success: false,
        };
    }

    componentDidMount() {
        
    }

    render() {

        console.log('password: ', this.state.password);

        return (
             <Container>
                <Content>
                <Item>
                    <Icon
                    name={"home"}
                    size={35}
                    color={'darkgrey'}
                    />
                    <Input onChangeText={ (text) => { this.setState({ username: text})}} placeholder='Enter New Username'/>
                </Item>
                <Item>
                    <Input onChangeText={ (text) => { this.setState({ password: text})}} placeholder='Enter Password'/>
                </Item>
                <Item>
                    <Input onChangeText={ (text) => { this.setState({ rePassword: text})}} placeholder= 'Repeat Password'/>
                    <Icon name={"check"} />
                </Item>
                </Content>
            </Container>
        );
    }
}