import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import { Container, Content, Input, Item, Form, Header, Title } from 'native-base';

const TabIcon = (props) => (
    <Icon
      name="event"
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Profile extends Component {
    static navigationOptions = {
        title: "Create New Event",
        tabBarIcon: TabIcon,
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
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Event Title" />
                        </Item>
                        <Item>
                            <Input placeholder="Event Title" />
                        </Item>
                    </Form>
               </Content>
            </Container>
        );
    }
}