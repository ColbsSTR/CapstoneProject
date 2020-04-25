import React, { Component } from 'react';
import { Container, Content, Item, Input } from 'native-base';
import { Icon } from 'react-native-elements';

export default class CreateNew extends Component {
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
                <Item>
                    <Icon
                    name={"home"}
                    size={35}
                    color={'darkgrey'}
                    />
                    <Input placeholder='Icon Textbox'/>
                </Item>
                <Item>
                    <Input placeholder='Icon Alignment in Textbox'/>
                </Item>
                </Content>
            </Container>
        );
    }
}