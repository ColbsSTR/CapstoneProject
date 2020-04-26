import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon, Overlay } from 'react-native-elements'
import { Container, Content, Card, CardItem, Body, Left } from 'native-base';
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
                  venue: 'Bud Walton'
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
              modalVisible: false
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
                >
                    <View style={{marginTop: 22}}>
                    <View>
                        <Text>Detail view!</Text>
                    </View>
                    </View>
            </Overlay>
        );
    }

    eventCard(item) {
        return (
            <TouchableOpacity onPress={() => {this.setState({modalVisible: true})}}>
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
                        renderItem={({item}) => this.eventCard(item)}
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
   }
});