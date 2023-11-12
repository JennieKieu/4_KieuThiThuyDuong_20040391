import * as React from "react";
import{View,Pressable,Text,StyleSheet , TextInput} from "react-native"


function screen2(params) {
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
    
});
export default screen2;
