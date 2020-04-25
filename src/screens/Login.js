import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Alert } from 'react-native';
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
            color: COLORS.beige,
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
            <Container style={{ backgroundColor: COLORS.darkGrey}}>
                <Content padder>
                <Form>
                    <Item floatingLabel>
                    <Label style={styles.textColor}>Username</Label>
                    <Input style={styles.textColor} onChangeText={(text) => {this.setState({username: text})}}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label style={styles.textColor}>Password</Label>
                    <Input style={styles.textColor} onChangeText={(text) => {this.setState({password: text})}}/>
                    </Item>
                </Form>
                <Content style={{ paddingTop: 20}}>
                    <Button style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.slateGrey}} onPress={() => { this.signIn() }}><Text style={styles.textColor}> Login </Text></Button>
                </Content>
                <Content>
                    <Button onPress={() => { this.createNew() }} transparent style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Create New User</Text>
                    </Button>
                </Content>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    textColor: {
        color: COLORS.beige
    }
})