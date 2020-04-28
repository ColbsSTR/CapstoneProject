import React, { Component } from 'react';
import { Button, DatePickerIOS } from 'react-native'; 
import { Icon } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Label, Picker } from 'native-base';
import COLORS from '../assets/colors';

const TabIcon = (props) => (
    <Icon
      name={"event"}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Create extends Component {
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
                        </Item>
                        <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name={"arrow-down"}/>}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    //placeholderStyle={{ color: "black" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue="Computer Science"
                                    onValueChange={(val) => {this.setState({selected2: val})}}
                                >
                                    <Picker.Item label="Computer Science" value="Computer Science" />
                                    <Picker.Item label="ATM Card" value="key1" />
                                    <Picker.Item label="Debit Card" value="key2" />
                                    <Picker.Item label="Credit Card" value="key3" />
                                    <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                            </Item>
                    </Form> 
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