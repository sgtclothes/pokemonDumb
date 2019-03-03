import React, {Component} from 'react'
import {View, Text, Image, AsyncStorage, BackHandler, Alert, FlatList, TouchableOpacity, ScrollView, AppState} from 'react-native'
import {Header, Left, Right, Card, Fab, Container, Button} from 'native-base'
import {withNavigation} from 'react-navigation'
import {getPokemon, deletePokemon} from '../src/publics/redux/actions/pokemon'
import {connect} from 'react-redux'

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

class detailPokemon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:'',
            name:'',
            image:'',
            type:'',
            category:''
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus',()=>{
            this.fetchData()
        })
    }

    async fetchData() {
        try{
        const id = await this.props.navigation.getParam('id','no id')
        this.setState({id})
        await this.props.dispatch(getPokemon(id))
        this.setState({
            name : this.props.pokemon.data.pokemon.pokemon_name,
            image: this.props.pokemon.data.pokemon.image,
            type: this.props.pokemon.data.type.name,
            category: this.props.pokemon.data.category.name_category
        })
    } catch(e) {

    }
    }

    async handleDelete() {
        await this.props.dispatch(deletePokemon(id))
        await this.props.navigation.navigate('Home')
    }

   

    render() {
        return (
            <View style={{alignSelf:'center', marginTop:'10%'}}>
                <Image style={{resizeMode:'stretch', width:300, height:300, borderBottomWidth:1}} source={{uri:this.state.image}} />
                <Text style={{borderWidth:2, borderRadius:10, borderColor:'gray', alignSelf:'center',marginTop:20, paddingHorizontal:50, color:'#cc1a43', fontSize:20, fontWeight:'bold'}}>{this.state.name}</Text>
                <Text style={{marginTop:30}}>Type : {this.state.type}</Text>
                <Text style={{}}>Category : {this.state.category}</Text>

                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Button style={{marginTop:20, alignSelf:'center', marginRight:20}}><Text style={{color:'white', width:100, textAlign:'center'}}>Update</Text></Button>
                    <Button onPress={()=>{this.handleDelete(this.state.id)}} style={{marginTop:20, alignSelf:'center'}}><Text style={{color:'white', width:100, textAlign:'center'}}>Remove</Text></Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps)(withNavigation(detailPokemon))