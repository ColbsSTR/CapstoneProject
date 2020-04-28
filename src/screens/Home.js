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
                  name: 'Event 1',
                  description: 'Carreer fair for all students',
                  venue: 'Bud Walton',
                  coordinator: 'Alex Frey',
                  fee: 25
                },
                {
                  name: 'Event 2',
                  description: 'Google info session',
                  venue: 'Jb Hunt'
                },
                {
                    name: 'Event 3',
                    description: 'New residents application party',
                    venue: 'HillPlace'
                  },
                  {
                    name: 'Event 4',
                    description: 'Carreer fair for business majorss',
                    venue: 'Bud Walton'
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
                            <Text style={styles.listHeader}>Event Details: {this.state.events[this.state.selected].description}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Coordinator: {this.state.events[this.state.selected].coordinator}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Participation Fee: {this.state.events[this.state.selected].fee}</Text>
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