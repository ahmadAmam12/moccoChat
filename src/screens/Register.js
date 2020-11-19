import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container, Button, Text, Form, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation()
    return (
        <>
            <Container style={styles.parrent}>
                <Form>
                    <Item>
                        <Input placeholder="Country" />
                    </Item>
                    <View style={styles.container}>
                        <Item style={styles.code}>
                            <Input value="+62" />
                        </Item>
                        <Item style={styles.phone}>
                            <Input placeholder="Number Phone" />
                        </Item>
                    </View>
                </Form>
                <Text style={styles.textBottom} note>Please confirm your country code and enter your phone number </Text>
            </Container>
            <View style={styles.btnCheck}>
                    <Button style={styles.check} onPress={()=>navigation.navigate('Verification')}>
                        <Icon name='arrow-right' size={30} color='#ffffff' />
                    </Button>
            </View>
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    parrent: {
        paddingRight: 15,
        flex: 1,
        backgroundColor: "#fffef2",
        paddingTop: 25
    },
    container:{
        flexDirection: 'row'
    },
    code: {
        width: 50,
        borderBottomColor: 'blue',
        borderWidth: 1,
        marginTop: 25
    },
    phone: {
        width: 265,
        borderWidth: 1,
        marginTop: 25
    },
    textBottom: {
        fontSize: 17,
        marginLeft: 15,
        marginTop: 20
    },
    btnCheck: {
        position: 'absolute',
        bottom: 25,
        right: 15,
        flexDirection: 'row'
    },
    check: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: '#1c3661'
    },
})
