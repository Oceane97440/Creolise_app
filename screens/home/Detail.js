import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Detaile({navigation}){

    const  handlessPressBack = () => {
        navigation.goBack()
      
        };

    return (

        <View style={styles.container}>

       


        <View style={styles.divBtnHead}>

        <View style={styles.divIconBack}>  
        <TouchableOpacity onPress={handlessPressBack}>
            <Icon name="arrow-left"  size={30} style={styles.iconback} color="#000"  /> 
        </TouchableOpacity>    
        </View> 

        <View style={styles.divIcon}>
        <TouchableOpacity>
        <Icon name="heart" size={30} color="#d43d35" style={styles.iconhead} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon name="share" size={30} color="#000" style={styles.iconhead} />
        </TouchableOpacity>

        </View>
        </View>
        <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1'}}
       style={styles.imghead} />


        <View style={styles.divInfo}>

            <View style={styles.titre}>

            <Text style={styles.h1}>Hotêl Dina</Text>
            <Text style={styles.price}>100€/nuit</Text>

            </View>

        
            <Text> <Icon name="star" size={25} color="#f2da15" style={styles.iconhead} /> 4.5 (16 avis)</Text>
        
      

                <View style={styles.divDescription}>

                <Text>
                Situé à Saint-Denis, il se trouve à environ 1,3 km du musée d'histoire naturelle de la Réunion et à 2,8 km du parc de la Trinité.</Text>


                


                <Text style={styles.h2}>Points forts :</Text>

                <View style={styles.divIcon}>

                <View style={styles.divContenteIcone}>

                <Image style={styles.icon} source={require('../../public/img/3d-fluency-spoon-and-knife.png')}/>
                <Text style={styles.textIcon}>Restaurant</Text>

                </View>
     

                <View style={styles.divContenteIcone}>
                <Image style={styles.icon} source={require('../../public/img/3d-fluency-football-player.png')}/>
                <Text style={styles.textIcon}>Salle de sport</Text>
                </View>

                <View style={styles.divContenteIcone}>
                <Image style={styles.icon} source={require('../../public/img/3d-fluency-pink-flower.png')}/>
                <Text style={styles.textIcon}>Spa</Text>
                </View>

                <View style={styles.divContenteIcone}>
                <Image style={styles.icon} source={require('../../public/img/3d-fluency-blue-car.png')}/>
                <Text style={styles.textIcon}>Place de parking</Text>
                </View>



                </View>


                <View style={styles.divBtn}>
                <TouchableOpacity onPress={3}  style={styles.btnSite}>
                    <Text style={{color:"#fff",fontSize:20,fontWeight: "bold" ,padding:10}}>
                    <Icon name="link" size={20} color="#fff" style={styles.iconSite} />

                        
                        Voir le site</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={3}  style={styles.btnPhone}>
                    <Text style={{color:"#d43d35",fontSize:20,fontWeight: "bold" ,padding:10}}>
                    <Icon name="phone" size={20} color="#d43d35" style={styles.iconSite} />

                        
                        Réserver</Text>
                </TouchableOpacity>


                </View>

                </View>
           
         
         
        </View>




        </View>


    )




  

}


const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        margin:10,
        alignItems:"left",
    },
    divBtnHead:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        bottom:20,
        justifyContent:'space-between',
        width: '100%',
    },
    divIcon:{
   
    float:'right'
    },
    iconhead:{
        padding:10,
        margin:10
    },
    iconback:{
        padding:10,
        margin:10,
      

      
    },

    imghead:{
        width:"100%",
        height:250,
        borderRadius:20,
    },
    divInfo:{

        padding:2
    },
    h1:{
        color:"#125386",
        fontSize: 25,
        fontWeight: "bold"
    },
    price:{
        color:"#d43d35",
        fontSize: 25,
        fontWeight: "bold"
    },
    titre:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
        justifyContent:'space-between',
        padding:10
    },
    divDescription:{
       
        marginTop:10,
        alignSelf:'flex-start'
        
    },
    h2:{
        color:"#125386",
        fontSize: 20,
        fontWeight: "bold",
        marginTop:5
    },
    icon:{
        width:40,
        height:40,
   
    },
    divIcon:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        margin:1,
      
    },
    textIcon:{

        padding:4,
        fontSize:15,
    },
    divContenteIcone:{
        textAlign:'center',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    btnSite:{
        backgroundColor:'#d43d35',
        borderRadius: 20,
        fontWeight: "bold",
         height:54,
        width:'49%',
        alignItems:'center',
        padding:5,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
       
      },
      btnPhone:{
        backgroundColor:'#f5f5f5',
        borderRadius: 20,
        fontWeight: "bold",
        height:54,
        width:'49%',
        alignItems:'center',
        padding:5,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
       
      },
      divBtn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        margin:10
      },
     
})   