import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon, Overlay } from 'react-native-elements'
import { Container, Content, Card, CardItem, Body, Left, Button, List, ListItem } from 'native-base';
import COLORS from '../assets/colors';

const TabIcon = (props) => (
    <Icon
	    name='home'
  		type='font-awesome'
        size={35}
        color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    constructor(props) {
        super(props);

        this.state = {
            //Placeholder data until the database is setup
            events:  [
                {
                    name: 'Career Fair',
                    description: 'Come and meet potential employers for life after college!',
                    venue: 'Bud Walton',
                    coordinator: 'John Doe',
                    coordinatorEmail: 'jdoe@gmail.com',
                    startTime: '11:00 AM',
                    endTime: '5:00 PM',
                    fee: 0
                },
                {
                    name: 'Google comes to Campus',
                    description: 'Info session with Google. Come meet Google employees and learn more about the company as a whole.',
                    venue: 'J.B. Hunt',
                    coordinator: 'James Smith',
                    coordinatorEmail: 'jsmith@gmail.com',
                    startTime: '4:00 PM',
                    endTime: '6:00 PM',
                    fee: 0
                },
                {
                    name: 'Freshman Year Welcome Party',
                    description: 'Come celebrate the start of your new life at the University of Arkansas!',
                    venue: 'Union Mall',
                    coordinator: 'John Doe',
                    coordinatorEmail: 'jdoe@gmail.com',
                    startTime: '3:00 PM',
                    endTime: '6:00 PM',
                    fee: 0
                  },
                  {
                    name: 'Cardinal Nights',
                    description: 'Come join us for free prizes, food, and good times!',
                    venue: 'Union Mall',
                    coordinator: 'Colby Crowne',
                    coordinatorEmail: 'test@gmail.com',
                    startTime: '7:00 PM',
                    endTime: '11:00 PM',
                    fee: 5
                  },
              ],
              modalVisible: false,
              selected: 0
        };
    }

    componentDidMount() {

    }

    detailView() {
        return (
            <Overlay
                    isVisible={this.state.modalVisible}
                    onBackdropPress={() => this.setState({ modalVisible: false })}
                    width="90%"
                    height="90%"
                    overlayBackgroundColor="#FEF2E4"
            >
                <View style={{marginTop: 22, flex: 1, justifyContent: 'center', marginBottom: 20}}>
                    <List>
                        <ListItem listHeader first>
                            <Text style={styles.listHeader}> {this.state.events[this.state.selected].name}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Coordinator: {this.state.events[this.state.selected].coordinator}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Coordinator Email: {this.state.events[this.state.selected].coordinatorEmail}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Event Start Time: {this.state.events[this.state.selected].startTime}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Event End Time: {this.state.events[this.state.selected].endTime}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Participation Fee: {this.state.events[this.state.selected].fee} $</Text>
                        </ListItem>
                    </List>
                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 30}}>
                        <View style={{flex:1}}>
                            <Button style={{justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.slateGrey, marginRight: 10}}>
                                <Text style={{color: 'white'}}> Attend </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Overlay>
        );
    }

    eventCard(item, index) {
        return (
            <TouchableOpacity onPress={() => {this.setState({modalVisible: true, selected: index})}}>
                <Content style={{ padding: 5 }}>
                    <Card>
                        <CardItem header bordered style={styles.card}>
                            <Left>
                                <Icon
                                    name='users'
                                    type='font-awesome'
                                />
                                <Body>
                                    <Text style={{ color: '#F19C00', paddingBottom: 5}}>{item.name}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={styles.card}>
                            <Body>
                                <Text>{item.description}</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer style={styles.card}>
                            <Icon
                                name='map-pin'
                                type='font-awesome'
                                size={15}
                            />
                            <Text style={{paddingLeft: 8}}>{item.venue}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Container style={styles.background}> 
                    <Image
                    source ={require('../../images/homelogo.png')} 
                    resizeMode="contain"
                    style={{ alignSelf: 'center', marginTop: 20, width: '100%', height: '12%' }}
                    />
                <Content>
                    <FlatList
                        data={this.state.events}
                        renderItem={({item, index}) => this.eventCard(item, index)}
                    />
                </Content>
                {this.detailView()}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
    card: {
        backgroundColor: COLORS.appBackground
    },
    listHeader: {
         fontWeight: "bold",
         fontSize: 20,
         paddingBottom: 0,
         paddingTop: 10
     }
 });