import React, { Component } from 'react';
import { Text, View, Picker, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import COLORS from '../assets/colors';
import { StyleSheet } from 'react-native';

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
                            <Label>Event Name</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Event Date</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Event Type</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Content style={{ paddingTop: 40}}>
                        <Button style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.slateGrey}} title="Create Event">
                        </Button>
                    </Content>
                </Content>
            </Container>
            // <View style={{flex: 1, backgroundColor: '#FEF2E4'}}>
            //     <Image
            //         style={{flex:1, height: undefined, width:undefined}}
            //         source ={require('../../images/profile.png')} 
            //         resizeMode="contain"
                    
            //         />
            //     <View>
            //         <TextInput style = {{margin:15,height:40, borderColor: '#3B291E',borderWidth:1, backgroundColor: '#FFFFFF'}}
            //             underlineColorAndroid = "transparent"
            //             placeholder="Event Title - EX: Resume Reviews"
            //             placeholderTextColor="#3B291E"
            //             autoCapitalize="none"
            //             />
            //     </View>
            //     <View>
            //         <TextInput style = {{margin:15,height:40, borderColor: '#3B291E',borderWidth:1, backgroundColor: '#FFFFFF'}}
            //             underlineColorAndroid = "transparent"
            //             placeholder="Event Date - EX: 2/20/2020"
            //             placeholderTextColor="#3B291E"
            //             autoCapitalize="none"
            //             />
            //     </View>
            //     <View>
            //             <Picker
            //             selectedValue={this.state.language}
            //             style={{height: 50, margin: 15}}
                        
            //             onValueChange={(itemValue, itemIndex) =>
            //                 this.setState({language: itemValue})
            //             }>
                        
            //             <Picker.Item label="Choose Event Type" value="default" />
            //             <Picker.Item label="Career Event" value="careerEvent" />
            //             <Picker.Item label="Resume Reviews" value="resumeEvent" />
            //             <Picker.Item label="Club Event" value="clubEvent" />
            //             </Picker>
            //     </View>
            //     <View>
            //         <Button
            //         title="Create"
            //         style={{alignItems: 'center', margin:10,heigh:40}}
            //         />
            //         </View>
            // </View>
        );
    }
}