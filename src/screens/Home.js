import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import { Container, Content, Card, CardItem, Body, Left } from 'native-base';

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
            drinks:  [
                {
                  name: 'Moscow mule',
                  description: 'This is a timeless drink with the fusion of vodka and lime as the core ingredients.',
                  price: '5',
                  venue: 'Georges Majestic'
                },
                {
                  name: 'Gin and tonic',
                  description: 'A favorite amongst eastern peoples this may also be a cure for the corona virus! Drink up',
                  price: '4',
                  venue: 'Georges Majestic'
                },
                {
                  name: 'Crown and coke',
                  description: 'My personal favorite, has something to do with my last name.',
                  price: '5',
                  venue: 'Georges Majestic'
                },
                {
                    name: 'Moscow mule',
                    description: 'This is a timeless drink with the fusion of vodka and lime as the core ingredients.',
                    price: '5',
                    venue: 'Georges Majestic'
                  },
                  {
                    name: 'Gin and tonic',
                    description: 'A favorite amongst eastern peoples this may also be a cure for the corona virus! Drink up',
                    price: '4',
                    venue: 'Georges Majestic'
                  },
                  {
                    name: 'Crown and coke',
                    description: 'My personal favorite, has something to do with my last name.',
                    price: '5',
                    venue: 'Georges Majestic'
                  },
              ],
        };
    }

    componentDidMount() {

    }

    drinkCard(item) {
        return (
            <Card>
                <CardItem header bordered>
                    <Left>
                        <Icon
                            name='beer'
                            type='font-awesome'
                        />
                        <Body>
                            <Text style={{ color: 'darkblue', paddingBottom: 5}}>{item.name}</Text>
                            <Text>${item.price}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{item.description}</Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Icon
                        name='map-pin'
                        type='font-awesome'
                        size={15}
                    />
                    <Text style={{paddingLeft: 8}}>{item.venue}</Text>
                </CardItem>
            </Card>
        );
    }

    render() {
        return (
            // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            //     <Text>Hello from the home screen</Text>
                <Container>
                    <Content>
                        <FlatList
                            data={this.state.drinks}
                            renderItem={({item, index, separators}) => this.drinkCard(item)}
                        />
                    </Content>
                </Container>
            // </View>
        );
    }
}