import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Form,
    ListItem,
    Body,
    CheckBox,
    Input,
    Grid,
    Row,
    Col
} from 'native-base';

import { View, StyleSheet } from 'react-native';

import SearchableDropdown from 'react-native-searchable-dropdown';


import productsJSON from '../data/data.json';

export default class Main extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.setState({ products: productsJSON });
        console.log('.json: ', productsJSON);
        console.log('lista: ', this.state.products);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        Conversor de Hectolitro.
                    </Text>

                    <Form>
                        <SearchableDropdown
                            onItemSelect={item => alert(JSON.stringify(item))}
                            containerStyle={{ padding: 5 }}
                            textInputStyle={{
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                            }}
                            itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#bbb',
                                borderWidth: 1,
                                borderRadius: 5,
                            }}
                            itemTextStyle={{ color: '#222' }}
                            itemsContainerStyle={{ maxHeight: 140 }}
                            items={this.state.products}
                            defaultIndex={1}
                            placeholder="Selecione o produto"
                            resetValue={false}
                            underlineColorAndroid="transparent"
                        />

                        <View>

                            <ListItem >
                                <CheckBox checked={true} />
                                <Body >
                                    <Input/>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <CheckBox checked={true} />
                                <Body>
                                    <Input />
                                </Body>
                            </ListItem>

                        </View>
                    </Form>

                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})