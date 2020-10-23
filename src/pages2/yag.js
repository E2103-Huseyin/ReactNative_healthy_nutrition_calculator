import React from 'react';
import { SafeAreaView, View, Text, Button, ImageBackground,StyleSheet,Dimensions,TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import Slider from '@react-native-community/slider';
import { color } from 'react-native-reanimated';
const Yag = (props) => {
    // const userValue = props.route.params.selectedValue.url
    const [value, onChangeText] = React.useState('170');
    const [kilo, setKilo] = React.useState('80');
    const [age, setAge] = React.useState('30');

    const sonuc = Math.round(0.0009*Number(age)*Number(kilo)*Number(value))/100;

    return (
        <SafeAreaView>
            <View style={styles.Container}>

                <ImageBackground
                    // source={{uri:userValue}}
                    source={{uri:"https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                    style={styles.imageContainer}>

                    <Text style={styles.text0}>Vucut yağ oranı </Text>
                    {/* <Text style={styles.text1}>Günlük kalori ihtiyacı</Text> */}

                </ImageBackground>



               
                {/* <Text style={{ fontSize: 40 }}>Value: {userValue}</Text> */}
                <Button
                    style={styles.button}
                    title="Back"
                    onPress={() => props.navigation.goBack()}
                    
                />
            </View>
            <View style={styles.Container2}>
                <Text style={styles.text2}>Boy? </Text>
                <Slider
                    style={{ height: 40,flex:2,}}
                    minimumValue={90}
                    maximumValue={250}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="blue"
                    value={170}
                    step={1}
                    onValueChange={(value)=>onChangeText(value)}
                    // onSlidingComplete={(value)=>onChangeText(value)}
                />
                <Text style={styles.text2}>{value} cm </Text>

            </View>
            <View style={styles.Container2}>
                <Text style={styles.text2}>Kilo </Text>
                <Slider
                    style={{ height: 40,flex:2,}}
                    minimumValue={30}
                    maximumValue={200}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="blue"
                    value={80}
                    step={1}
                    onValueChange={(kilo)=>setKilo(kilo)}
                    
                />
                <Text style={styles.text2}>{kilo} kg</Text>

            </View>
            <View style={styles.Container2}>
                <Text style={styles.text2}>Yaşınız </Text>
                <Slider
                    style={{ height: 40,flex:2,}}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="blue"
                    value={30}
                    step={1}
                    onValueChange={(age)=>setAge(age)}
                    
                />
                <Text style={styles.text2}>{age} </Text>
            </View>
            
            <Text style={styles.text4}>Sonuç: {sonuc} </Text>
            
            

           
        </SafeAreaView>
    );
}

export default Yag;

const styles = StyleSheet.create({
    Container: {
        // backgroundColor:'rgba(0,0,0,0.7)'
        // backgroundColor:'red'
        

    },
    imageContainer: {
        height: Dimensions.get('window').height / 2.5,
        resizeMode: 'contain',
        flexDirection:'column'
        

    },
    Container2: {
        // backgroundColor:'rgba(0,0,0,0.5)'
        
        // flex:1,
        flexDirection:'row',
        marginBottom:10,
        marginTop:10,
        marginHorizontal:5,
        backgroundColor:'#ffee58',
        borderRadius:15,
        

    },
    text0: {
        fontSize:40,
        backgroundColor:'rgba(50,200,50,0.7)',
        color:'#3d4',
        color:'white',
        fontWeight:'900'
        
        
        
    },
    text1: {
        fontSize:16,
        backgroundColor:'rgba(50,200,50,0.5)',

        color:'black',
        padding:8
        
        
    },
    text2: {
        flex:1,        
        backgroundColor:'#2e6',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
        fontWeight:'bold',
        // color:'white'
        borderRadius:15,
        
        
    },
    text3: {
        
        backgroundColor:'#2e6'
        
        
    },


    // image: {
       
    //     height: Dimensions.get('window').height / 6,
    //     resizeMode: 'contain'
    // },
    button: {
        
        
       
       
    },
    
    text4: {
        
        backgroundColor:'#2e6',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
        padding:10,
        fontWeight:'bold',
        // color:'white'
        borderRadius:15,
        margin:20
        
        
    },

})