import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput,Dimensions , FlatList, TouchableOpacity, Image,StyleSheet} from 'react-native';

const number = 55;

const Main = (props) => {
    const [hesap, setHesap] = useState([
        {id:"0", text:'günlük kalori ihtiyacı hesaplama', tik:true, url:"https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
        {id:"1", text:'günlük karbondidrat ihtiyacı hesaplama', tik:true, url:"https://images.unsplash.com/photo-1518634535905-13f21073199b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
        {id:"2", text:'Vucut Kitle indeksi', tik:true, url:"https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
        {id:"3", text:'Vucut yağ oranı hesaplama', tik:true, url:"https://images.pexels.com/photos/1172019/pexels-photo-1172019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    ]);

    const liste = ({item}) => {
        return (


            <View style={styles.container}> 
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => props.navigation.navigate(item.id, {selectedValue:{item} })}
                    
                >

                    <Image
                    source={{uri:item.url}}
                    style={styles.image}
                    />
                    <Text style={styles.text}>{item.text}</Text>

                </TouchableOpacity>
            </View>


           
        )
    }



    return (
        <SafeAreaView>
            <View>

                <FlatList
                    data= {hesap}
                    renderItem={liste}
                    numColumns={2}

                />





                {/* <Text style={{ fontSize: 40 }}>First</Text>
                <Text style={{ fontSize: 40 }}>{number}</Text>

                <Text style={{ fontWeight: 'bold', margin: 5 }}>Girilen değer: {userName}</Text>
                <View style={{ backgroundColor: '#e0e0e0', padding: 10, margin: 10, borderRadius: 5 }}>
                    <TextInput
                        value={hesap}
                        onChangeText={text => setHesap(text)}
                    />
                </View> */}

                <Button
                    title="HESAPLA!"
                    // onPress={() => props.navigation.navigate('SecondPage', { selectedValue: userName })}
                />
            </View>
        </SafeAreaView>
    );
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#0f0',
        margin:10,
    },
    image: {
       
        height: Dimensions.get('window').height / 5,
        resizeMode: 'contain'
    },
    button: {
       
       
    },
    text: {
        textAlign:'center',
        fontSize:20
        
    }
})