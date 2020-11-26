import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image, TextInput, StatusBar, Pressable } from 'react-native'
import { Container, Button, Card, CardItem, Body, Header, Left, Right, Text, Row } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-ionicons'
import { API_URL } from '@env'

import MessageBubble from '../components/bubbleChat'
import { sendChatAction, getChatDetail } from '../redux/action/chat'
import { getContactDetail } from '../redux/action/contact'
import avatar from '../assets/images/profile.png'

const ChatDetail = ({ route }) => {
    const navigation = useNavigation()
    const [Show, setShow] = useState(false)
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const getChat = useSelector(state => state.getChat)
    const sendChat = useSelector(state => state.sendChat)
    const dataContact = useSelector(state => state.detailContact.data)

    const [recipient, setRecipient] = useState(route.params)
    const [messages, setMessages] = useState('')

    useEffect(() => {
        dispatch(getChatDetail(token, route.params))
        dispatch(getContactDetail(token, route.params))
        console.log(sendChat)
    }, [token, route.params])

    const sendMessages = async () => {
        await dispatch(sendChatAction(token, messages, recipient))
    }

    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('ContactProfile', dataContact.id)}>
                <Header style={styles.header} transparent>
                    <StatusBar backgroundColor={'#421908'} />
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={30} color="#ffffff" />
                    </Button>
                    <Image style={styles.avatar} source={dataContact.photo ? { uri: `${API_URL}${dataContact.photo}` } : avatar} color="#000000" />
                    <View style={styles.identitiy}>
                        <Text style={styles.name}>{dataContact.user_name ? dataContact.user_name : dataContact.telphone}</Text>
                        <Text style={styles.status}>Status</Text>
                    </View>
                    <Right />
                    <Button transparent onPress={() => navigation.navigate('')}>
                        <Icon name='more' size={35} color="#ffffff" />
                    </Button>
                </Header>
            </TouchableOpacity>
            <View style={styles.parrent}>
                <FlatList
                    data={
                        getChat.data
                    }
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <MessageBubble
                            mine={item.sender === route.params ? true : false}
                            text={item.message}
                        />
                    )}
                    inverted
                />
            </View>
            <Card style={styles.inputChat} transparent>
                <Body style={styles.write}>
                    <Icon name='happy' size={30} color='#8e8e8e' />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Pesan"
                        value={messages}
                        onChangeText={messages => setMessages(messages)} />
                    {/* <Icon name='attach' size={30} color='#8e8e8e' style={{ marginRight: 30 }} />
                    <Icon name='mic' size={30} color='#8e8e8e' /> */}
                    <TouchableOpacity transparent onPress={sendMessages}>
                        <Icon name="send" color='#8e8e8e' style={{ marginLeft: 40 }} />
                    </TouchableOpacity>
                </Body>
            </Card>
        </>
    )
}

export default ChatDetail

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#421908',
        alignItems: 'center',
        height: 100,
    },
    parrent: {
        flex: 1,
        backgroundColor: "#fff5e7",
        paddingBottom: 50
    },
    title: {
        fontSize: 25,
        marginLeft: 25
    },
    avatar: {
        width: 50,
        height: 50,
        backgroundColor: '#e8e8e8',
        borderRadius: 50,
        marginLeft: 20
    },
    identitiy: {
        marginLeft: 10
    },
    name: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    status: {
        color: '#ffffff',
    },
    inputChat: {
        flexDirection: 'row',
        position: 'absolute',
        padding: 10,
        bottom: -4,
        height: 50,
        width: 359,
        backgroundColor: '#ecccb4',
        borderRadius: 25
    },
    textInput: {
        width: 230,
        height: 50,
        fontSize: 18,
        marginLeft: 8
    },
    write: {
        flexDirection: 'row'
    },
})
