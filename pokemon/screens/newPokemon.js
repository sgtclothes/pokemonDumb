import React, { Component } from 'react'
import {Text, View, Modal, TextInput, TouchableOpacity} from 'react-native'
import {Header, Left, Right, Container, Icon} from 'native-base'
import {connect} from 'react-redux'
import {addPokemon} from '../src/publics/redux/actions/pokemon'
import {withNavigation} from 'react-navigation'

import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

class newPokemon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus',async ()=>{
            await this.fetchData()
        })
    }

    async fetchData() {
        await this.props.dispatch(addPokemon(data))
    }

    render() {
        return (

            <Container>
                <View>
                    <Header>
                        <Left>
                            <TouchableOpacity onPress={()=>{}}>
                                <IconMaterialIcons name='arrow-back' size={30} color='white'/>
                            </TouchableOpacity>
                        </Left>
                        <Text style={{alignSelf:'center', fontWeight:'bold', color:'white'}}>ADD NEW POKEMON</Text>
                        <Right>
                            <TouchableOpacity onPress={()=>{}}>
                                <IconFontAwesome name='check' size={30} color='white'/>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps)(withNavigation(newPokemon))