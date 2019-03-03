import React, {Component} from 'react'
import {View, Text, Image, AsyncStorage, BackHandler, Alert, FlatList, TouchableOpacity, ScrollView, AppState} from 'react-native'
import {Header, Left, Right, Card, Fab, Container, Button} from 'native-base'
import {withNavigation} from 'react-navigation'
import {getPokemons} from '../src/publics/redux/actions/pokemons'
import {connect} from 'react-redux'

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data:[],
            active:false
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus',async ()=>{
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton) 
        this.fetchData()
        })
    }

    async fetchData() {
        await this.props.dispatch(getPokemons())
    }

    async _handleLogout() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('id')
        axios.defaults.headers.common['Authorization'] = ""
        this.props.navigation.navigate('Login')
    }

    // async componentDidMount() {
    //     let year = await new Date().getFullYear()
    //     Date.prototype.getMonthFormatted = function() {
    //         var month = this.getMonth() + 1;
    //         return month < 10 ? '0' + month : month;
    //     }
    //     Date.prototype.getDateFormatted = function() {
    //         var date = this.getDate();
    //         return date < 10 ? '0' + date : date;
    //     }
    //     let date = new Date()
    //     await this.setState({
    //         currentDate: year+'-'+date.getMonthFormatted()+'-'+date.getDateFormatted()
    //     })
    //     await AsyncStorage.setItem('currentDate',String(this.state.currentDate))
    //     AppState.addEventListener('change', this._handleAppStateChange)
    //     this.focusListener = this.props.navigation.addListener('didFocus',()=>{
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton) 
    //     this._fetchData()
    //     })
    //   }

    // async _fetchData() {
    //     await this.props.dispatch(getNotes())
    // }

    // async handleEditScreen(id, data) {
    //     await BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
    //     this.props.navigation.navigate('editItem', {id, data})
        
    // }
      
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
    //     AppState.removeEventListener('change', this._handleAppStateChange)
    //   }


    async handleDetail(item) {
        await BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
        await this.props.navigation.navigate('detailPokemon', {
            id: item
        })
        
    }

    // async handleAddButton(item) {
    //     await BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
    //     await this.props.navigation.navigate('newPokemon', {
    //         id: item
    //     })
        
    // }

    // _handleAppStateChange = (nextAppState) => {
    //     if (
    //       this.state.appState.match(/inactive|background/) &&
    //       nextAppState === 'active'
    //     ) {
    //       console.log('App has come to the foreground!')
    //     }
    //     this.setState({appState: nextAppState})
    //   }

    // handleBackButton = () => {
    //     Alert.alert(
    //         'Exit App',
    //         'Exit meganote?',
    //         [
    //           {
    //             text: 'Cancel',
    //             onPress: () => console.log('Cancel Pressed'),
    //             style: 'cancel'
    //           },
    //           {
    //             text: 'OK',
    //             onPress: () => BackHandler.exitApp()
    //           }
    //         ],
    //         {
    //           cancelable: false
    //         }
    //       );
    //       return true
    // }

    // async _handleLogout() {
    //     this.props.dispatch(changeLoginStatus(false))
    //     await AsyncStorage.removeItem('token')
    //     await this.props.navigation.navigate('loginScreen')
    // }

    // async _handleCheckToken() {
    //     const a = await AsyncStorage.getItem('token')
    //     const b = await AsyncStorage.getItem('id')
    //     const currentDate = await AsyncStorage.getItem('currentDate')
    //     alert(JSON.stringify(currentDate))
    // }

    // _regularExpression(item) {
    //     let s
    //     let date

    //     if(item != null) {
    //         s = item
    //         date = s.match(/^\d{4}-\d{2}-\d{2}/g)
    //     } else {
    //         date = ''
    //     }
    //         return date
    // }

    render() {
        return (

            <Container>
                <ScrollView>
                <View>
                    <Header style={{backgroundColor:'#cc1a43'}}>
                        <Left>
                            <IconMaterialIcons color='white' name='menu' size={30} onPress={()=>{alert(JSON.stringify(this.props.pokemons))}}/>   
                        </Left>
                        <View style={{alignSelf:'center',marginHorizontal:30}}>
                            <Text style={{color:'white'}}>Pokemon Dumb</Text>
                        </View>
                        <Right>
                            <IconMaterialIcons color='white' name='search' size={20} onPress={()=>{}}/> 
                        </Right>
                    </Header>
                    <Card style={{flexDirection:'row', marginTop:10, paddingVertical:10}}>
                        <Image style={{marginLeft:10, resizeMode:'stretch', width:50, height:50, justifyContent:'center', alignSelf:'center'}} source={{uri:'https://i.dlpng.com/static/png/86485_thumb.png'}} />
                        <Text onPress={()=>{}} style={{fontSize:20, marginLeft:5, fontWeight:'bold', color:'#cc1a43', alignSelf:'center'}}>Pokemon Lists</Text>
                    </Card>
                        <FlatList
							data={this.props.pokemons.data.pokemon}
							refreshing={this.props.pokemons.isLoading}
							showsHorizontalScrollIndicator={false}
							keyExtractor={(item,index)=>String(index)}
							renderItem={({item, index}) => {
                                return (
                                    <TouchableOpacity style={{alignItems:'center', borderBottomWidth:1, borderBottomColor:'#cc1a43'}} onPress={()=>{this.handleDetail(item.id)}}>
                                        <View>
                                            <Text style={{marginLeft:10, fontSize:20, color:'#cc1a43'}}>{item.pokemon_name}</Text>
                                        </View>
                                        <Image style={{marginLeft:10, marginBottom:10, resizeMode:'stretch', width:100, height:100}} source={{uri: item.image}} />
                                    </TouchableOpacity>
                                )
                            }}
                            />
                </View>
                <Button onPress={()=>{this._handleLogout()}} style={{alignSelf:'center', marginTop:20, width:100}}><Text style={{color:'white', alignSelf:'center'}}>Logout</Text></Button>
                </ScrollView>
                <View style={{flex:1}}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#cc1a43' }}
                        position="bottomRight"
                        onPress={()=>{this.handleAddButton()}}>
                        <IconFontAwesome name="plus" />
                    </Fab>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps)(withNavigation(Home))