import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Detaile({navigation,route}){


    const [like, setLike] = useState('#000');
    const  onClicLike = () => {

        if (like === '#d43d35') {
            setLike('#000')

        }else{
            setLike('#d43d35')
        }
    };
    
    const { name } = route.params.item;
    const { price } = route.params.item;
    const { categorie } = route.params.item;
    const { description } = route.params.item;
    const { photos } = route.params.item;
    const { avantage } = route.params.item;
 
   
    switch (categorie) {
        case "Hotels":
            var string = "€/nuit"
        break;
        case "Restaurants":
            var string = "€/plat"
        break;

        default:
            var string = ""

        break;
    }
   

    const list = () => {
        return avantage.map(obj => {

          return (
            <View key={obj.id} style={styles.divContenteIcone}>
                <Image style={styles.icon} source={obj.icon}/>
            <Text style={styles.textIcon}>{obj.point_fort}</Text>
            </View>
          );
        });
      };

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
        <TouchableOpacity onPress={onClicLike}>
        <Icon name="heart" size={30} color={like} style={styles.iconhead} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon name="share" size={30} color="#000" style={styles.iconhead} />
        </TouchableOpacity>

        </View>
        </View>
        <Image source={{uri: photos}}
       style={styles.imghead} />


        <View style={styles.divInfo}>

            <View style={styles.titre}>

            <Text style={styles.h1}>{name}</Text>
            <Text style={styles.price}>{price}{string}</Text>

            </View>

        
            <Text> <Icon name="star" size={25} color="#f2da15" style={styles.iconhead} /> 4.5 (16 avis)</Text>

                <View style={styles.divDescription}>

                <Text>{description}</Text>


                


                <Text style={styles.h2}>Points forts :</Text>

                <View style={styles.divIcon}>

                {list()}
     

             


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
   
    float:'right',
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
       // margin:0,
       marginBottom:5
      
    },
    textIcon:{

        padding:5,
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
        position:'relative',
        top:0,
       
      },
     
})   