import React, {Component} from 'react'
import {View, Text, Image, Button, TouchableOpacity, BackHandler} from 'react-native'
import {Container, Header, Content, Form, Item, Input, Card, Label} from 'native-base'
import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation'
import {registerUser} from '../src/publics/redux/actions/users'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            email:'',
            password:''
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus',async ()=>{
        await BackHandler.addEventListener('hardwareBackPressRegister',this.handleBackButtonRegister)
     })
    }

    handleBackButtonRegister = async () =>{
        await BackHandler.removeEventListener('hardwareBackPressRegister',this.handleBackButtonRegister)   
        this.props.navigation.goBack()
    }

    //Actions from redux
    async _handleRegister(data) {
        if(this.state.username==''||this.state.email==''||this.state.password==''){
            alert('Please fill it correct')
        }

        try {
            await this.props.dispatch(registerUser(data))
            await alert('Register successful')
            this.props.navigation.push('Login')
        } catch(e) {
            alert('Please fill it correct')
        }
    }


    static navigationOptions = {
        title: 'Create Account',
        headerTintColor : '#cc1a43'
        }
    
    render() {
        return (    
        <Container>
            <Content>
            <Image style={{marginTop:30, marginBottom:10, width:250, height:100,resizeMode:'stretch', alignSelf:'center'}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'}}/>
            <Text style={{position:'absolute', color:'#cc1a43', fontWeight:'bold', marginTop:120, marginLeft:200}}>DUMB</Text>
                <Card style={{marginLeft:20, marginRight:20, paddingBottom:20, borderRadius:10}}>
                     <View style={{marginLeft:10, width:280}}>
                        <Form>
                            <Item floatingLabel>
                                <Label style={{fontSize:12}}>Username</Label>
                                <Input style={{fontSize:15}} onChangeText={(username)=>{this.setState({username})}}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={{fontSize:12}}>Email</Label>
                                <Input style={{fontSize:15}} onChangeText={(email)=>{this.setState({email})}}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={{fontSize:12}}>Password</Label>
                                <Input secureTextEntry={true} style={{fontSize:15}} onChangeText={(password)=>{this.setState({password})}}/>
                            </Item>
                        </Form>
                    </View>
                    <View style={{alignSelf:'center', marginTop:20, width:200}}>
                        <View style={{width:300, alignSelf:'center', marginLeft:30, paddingRight:20, marginBottom:20}}>
                            <Text style={{fontSize:10}}>By clicking Create Account, you are agreeing to our <Text style={{textDecorationLine:'underline'}}>Terms of Service</Text> and <Text style={{textDecorationLine:'underline'}}>Privacy Policy</Text></Text>
                        </View>
                        <TouchableOpacity style={{width:270, alignSelf:'center'}}>
                            <Button onPress={()=>this._handleRegister(this.state)} color='#cc1a43' title=' Create Account'/>
                        </TouchableOpacity>
                    </View>
                </Card>
                <View style={{alignItems:'center', marginTop:10}}>
                    <Text>Already have an account? <Text onPress={()=>this.props.navigation.goBack()} style={{color:'#cc1a43'}}>Sign in</Text></Text>
                    <Text>----------------------------or----------------------------</Text>
                    <Card style={{alignSelf:'center', width:250, paddingVertical:5, marginTop:15, borderWidth:1}}>
                        <TouchableOpacity style={{color:'red'}}>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{marginLeft:20, marginRight:10, width:25, height:25, resizeMode:'stretch'}} source={{uri:'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'}}/>
                                <Text>Sign in with Google</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>
            </Content>      
        </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(withNavigation(Register))