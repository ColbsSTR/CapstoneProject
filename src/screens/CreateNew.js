import React, { Component } from 'react';
import { Container, Content, Item, Input } from 'native-base';
import { Icon } from 'react-native-elements';

export default class CreateNew extends Component {
    static navigationOptions = {
        title: "Create New",
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

    render() {
        return (
            <Container>
               <Content>
               <Item>
                   <Icon
                   name={"home"}
                   size={35}
                   color={'darkgrey'}
                   />
                   <Input onChangeText={(text) => { this.setState({ username: text})}} placeholder='Enter New Username'/>
               </Item>
               <Item>
                   <Input placeholder='Enter Password'/>
               </Item>
               <Item>
                   <Input placeholder= 'Repeat Password'/>
               </Item>
               </Content>
           </Container>
       );
    }
}