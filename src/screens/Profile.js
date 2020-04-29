import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { Container, Header, Content, Form, Item, Input, Label, List, ListItem } from 'native-base';
import COLORS from '../assets/colors';

const TabIcon = (props) => (
    <Icon
      name="person"
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
)

const styles = StyleSheet.create({
    listHeader: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 0,
        paddingTop: 10
    }
 });

export default class Profile extends Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20, backgroundColor: COLORS.appBackground }}>
                    <Avatar rounded source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}} size="xlarge" />
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <List>
                                <ListItem itemHeader first>
                                    <Text style={styles.listHeader}>My Events</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Event 1</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Event 2</Text>
                                </ListItem>
                            </List>
                        </View>
                        <View style={{flex: 1}}>
                            <List>
                                <ListItem itemHeader first>
                                    <Text style={styles.listHeader}>Upcoming Events</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Event 1</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Event 2</Text>
                                </ListItem>
                            </List>
                        </View>

                    </View>
                        
            </View>
        );
    }
}