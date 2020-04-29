import React, { Component } from 'react';
import { Button, DatePickerIOS } from 'react-native'; 
import { Icon } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Label, Text } from 'native-base';
import COLORS from '../assets/colors';
import { connect } from 'react-redux';
import {addEvent} from '../state/Actions/addEvent';

const TabIcon = (props) => (
    <Icon
      name={"event"}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

class Create extends Component {
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
            date: new Date(),
            language: 'java'
        };
    }

    componentDidMount() {
        this.props.AddEvent({
            name: 'Something New',
            description: 'Come and meet potential employers for life after college!',
            venue: 'New New',
            coordinator: 'New New',
            coordinatorEmail: 'jdoe@gmail.com',
            startTime: '11:00 AM',
            endTime: '5:00 PM',
            fee: 0
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Item>
                                <Label>Event Name</Label>
                                <Input />
                            </Item>
                            <Item>
                                <Label>Event Description</Label>
                                <Input regular/>
                            </Item>
                            <Item>
                                <Label>Event Category</Label>
                                <Input regular/>
                            </Item>
                        </Item>
                    </Form> 
                    <Content contentContainerStyle={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
                            Please enter a date
                        </Text>
                    </Content>
                    <DatePickerIOS
                        date={this.state.date} 
                        onDateChange={(date)=>this.setState({date})}
                        mode="date"
                    />
                    <Content style={{ paddingTop: 40}}>
                        <Button style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.slateGrey}} title="Create Event">
                        </Button>
                    </Content>
                </Content>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    AddEvent: addEvent
}

export default connect(null, mapDispatchToProps)(Create);