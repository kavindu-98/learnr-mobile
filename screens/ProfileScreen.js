import { StyleSheet, Text,Image, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import TextIconButton from '../components/TextIconButton';
import { ionicons, MaterialIcons  } from 'react-native-vector-icons';


const ProfileScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
          backgroundColor: COLORS.grey,
          height: "0%",
         

      },
      headerTintColor: COLORS.white,
      headerTitle: false,
      headerTitle: "",
 

  

      
       
    });

  }, [navigation]);
  return (
   <SafeAreaView style={styles.container}>

  

        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titlebar}>
        <TouchableOpacity >

          <Image
          source= {icons.logout}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 300,
            marginTop: 15
          }}
          >
            
          </Image>
        </TouchableOpacity>
        <TouchableOpacity >

            <Image
            source= {icons.settings}
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 15
            }}
            >
              
            </Image>
            </TouchableOpacity>
            </View>
        <View style={{ alignSelf: "center", marginTop: 20}}>
          <View style={styles.profileimage}>
              <Image source={require('../assets/images/profile.jpg')} style={styles.profileimage} resizeMode="center"
              />
          </View>

          <View style={styles.add}>
                <TouchableOpacity >

                  <Image
                  source= {icons.add}
                  style={{
                    width: 50,
                    height: 50,
                    top: -45,
                    bottom: 0,
                    position: 'absolute',
                    backgroundColor: COLORS.transparentWhite,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 140                   
                  }}
                  >
                    
                  </Image>
                  </TouchableOpacity>

          </View>
        </View>

        <View style={styles.proname}>
          <Text style={styles.nameTitle}>Kasun Akalanka</Text>
          <Text style={styles.nametag}>@Kavindu_98</Text>
        </View>

        <View style={styles.proname}>
          <Text style={styles.prodes}>"Lorem ipsum dolor  ri ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuui officia deserunt mollit anim id est laborum."</Text>
        
        </View>


            

        
    

         </ScrollView>
         </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({

  header: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

},


container: {
  backgroundColor: COLORS.background,
  height: "100%",
  flex: 1
},
titlebar: {
  flexDirection: 'row',

},

profileimage: {
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: "hidden",

},
nameTitle : {
   color: COLORS.black,
   marginTop: 15,
   fontSize: SIZES.h2,

   
},
proname : {
  alignItems: 'center'
},
nametag : {
  color: COLORS.dark_grey,
  marginTop: 3,
  fontSize: SIZES.h3,

  
},
prodes : {
  color: COLORS.grey,
  marginTop: -5,
  padding: 35,
  fontSize: SIZES.body5,

  
},




})