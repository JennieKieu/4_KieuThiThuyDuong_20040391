import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen1 from "./screen/screen1";

const App = () => {
    
    const Stack =  createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="screen1" component={screen1}/>
            </Stack.Navigator>

        </NavigationContainer>
    );                          
};

export default App;