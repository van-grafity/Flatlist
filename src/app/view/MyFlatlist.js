import React, { Component } from 'react';
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-gesture-handler'

const PROMO = [
    {
        name: 'Rambut bejo',
        distance: '4.3',
        items: [
            {
                id: 1,
                img: require('../assets/images/cukur_bejo.png'),
                title: 'Cukur Pendek',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry text of the printing and typesetting industry and typesetting industry text of the printing and typesetting .',
                pricePromo: '25.000',
                price: '50.000'
            },
            {
                id: 2,
                img: require('../assets/images/cukur_bejo.png'),
                title: 'Cukur Pendek',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry text of the printing and typesetting industry and typesetting industry text of the printing and typesetting .',
                pricePromo: '25.000',
                price: '50.000'
            },
            {
                id: 3,
                img: require('../assets/images/cukur_bejo.png'),
                title: 'Cukur Pendek',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry text of the printing and typesetting industry and typesetting industry text of the printing and typesetting .',
                pricePromo: '25.000',
                price: '50.000'
            },
            {
                id: 4,
                title: 'Cukur Pendek',
                img: require('../assets/images/cukur_bejo.png'),
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry text of the printing and typesetting industry and typesetting industry text of the printing and typesetting .',
                pricePromo: '25.000',
                price: '50.000'
            }
        ]
    }
]

export default class MyFlatlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            dataPromo: []
        };
    }

    componentDidMount() {
        PROMO.map(order => {
            order.items.map(item => {
                return item
            })
        })

        this.setState({
            dataPromo: PROMO
        })
    }

    renderHeaderList = () => {
        return (
            <View style={{ alignItems: 'center', borderRadius: 20, paddingHorizontal: 16, borderColor: "#E0E0E0", borderWidth: 1, marginVertical: 8, marginHorizontal: 16, height: 40 }}>
                <TextInput style={{ flex: 1, height: 40, fontSize: 14, fontFamily: 'Ubuntu-Medium', color: "#000000" }}
                    underlineColorAndroid={'transparent'}
                    placeholder='Search here'
                    onChangeText={(text) => this.setState({ text: text })}
                />
            </View>
        )
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({ item, index }) => (
        <Content
            data={item}
            index={index}
            selectedItem={this.selectItemOrder}
            addItem={this.addItem}
            lessItem={this.lessItem}
        />
    )
    render() {
        return (
            <View>
                <FlatList
                    ListHeaderComponent={this.renderHeaderList}
                    data={this.state.dataPromo}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ marginBottom: 8, backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: "row", alignItems: "center", height: 48, paddingHorizontal: 8 }}>
                    <View style={{ flex: 1, marginHorizontal: 8 }}>
                        <Text style={{ fontFamily: "Ubuntu-Regular", fontSize: 14, color: "#000000" }}>{this.props.data.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 8 }}>
                        <MaterialIcons name="location-on" size={14} color="#E0E0E0" />
                        <Text style={[{ fontFamily: "Ubuntu-Regular", fontSize: 12, }, { color: "#000000", marginLeft: 8 }]}>{this.props.data.distance}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8 }}>
                    {
                        this.props.data.items.map((item, key) =>
                            <TouchableOpacity key={key} style={{ padding: 8, flexDirection: "row" }}
                                onPress={() => this.onDetails(item)}>
                                <ImageBackground source={item.photo} borderRadius={8} style={{ marginHorizontal: 8, height: 56, width: 56, }}>
                                    <View style={{ width: 45, backgroundColor: "#E74C3C", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 8, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}>
                                        <Text style={{ fontFamily: "Ubuntu-Regular", fontSize: 8, color: "#FFFFFF" }}>25% off</Text>
                                    </View>
                                </ImageBackground>
                                <View style={{ flex: 1, marginHorizontal: 8 }}>
                                    <Text style={{ fontFamily: "Ubuntu-Medium", fontSize: 14, color: "#000000" }}>{item.name}</Text>
                                    <Text style={[{ fontFamily: "Ubuntu-Light", fontSize: 10, color: "#6A6A6A" }, { marginTop: 8 }]}>{item.desc}</Text>
                                    <View style={{ flexDirection: "row", marginTop: 12 }}>
                                        <Text style={{ fontFamily: "Ubuntu-Medium", fontSize: 14, color: "#000000" }}>{item.price_promo}</Text>
                                        <Text style={[{ fontFamily: "Ubuntu-Regular", fontSize: 14, color: "#BEC2C4" }, { marginLeft: 8, textDecorationLine: "line-through" }]}>{item.price}</Text>
                                    </View>
                                </View>
                                <View style={{ marginRight: 16, marginBottom: 4 }}>
                                    <TouchableOpacity style={{ backgroundColor: "#00D79E", alignSelf: "flex-end", height: 24, width: 24, borderRadius: 12, justifyContent: "center", alignItems: "center" }}
                                        onPress={
                                            console.log('Clicked your plus')
                                        }>
                                        <Feather name="plus" color="#FFFFFF" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        )
    }
}
