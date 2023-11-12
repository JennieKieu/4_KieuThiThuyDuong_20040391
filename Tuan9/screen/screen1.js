import * as React from "react";
import{View,Pressable,Text,StyleSheet , TextInput} from "react-native"


fetch("https://654da848cbc325355741c2bd.mockapi.io/:endpoint")
.then(response => response.json())
.then(data => {
    console.log(data);
});
function screen1(params) {
    return(
        <View style={styles.container}>
            <Text style={styles.lableDangNhap}>MANGAGE YOUR TASK</Text>
            {/* <TextInput style={styles.input} placeholder="User"></TextInput> */}
            <TextInput style={styles.input} placeholder="Enter your email"></TextInput>
            <Pressable style={{borderWidth:0, borderRadius: 10 , width:150 , height:40 ,justifyContent:"center" , alignItems:"center", marginTop: 50, backgroundColor: "#0099FF"}}><Text style={{color: "white"}}>GET STARTED </Text></Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    lableDangNhap :{
        fontSize:26,
        fontWeight:"bold",
        color: "#CC33FF"
    },
    input :{
        borderWidth:1,
        width: 200,
        height:40,
        marginTop:20,
        borderRadius:10, 
        paddingLeft: 10
    },

});
export default screen1;
