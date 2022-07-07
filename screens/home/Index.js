import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index({navigation}) {

  const  handlessPressDetail= () => {
    navigation.navigate('Detaile')
  
    };  
  
    return (
      <View style={styles.container}>

    <View style={styles.divBtnProfil}>
      <TouchableOpacity >
            <Icon name="user" size={30} color="#000"  />
          </TouchableOpacity> 
      </View>
      
      <Text style={styles.baseText}>
        <Text style={styles.h1}>Rechercher votre destinations</Text>   {"\n"}   {"\n"}
        <Text>Localiser les meilleur adresse à la Réunion</Text>
        {"\n"}
      </Text>

      <TextInput style={styles.input}  placeholder='Recherche...'>
      <Icon name="search" size={20} color="#d43d35"  />

      </TextInput>

      <View style={styles.ul}>
      <ScrollView horizontal={true}>

      <TouchableOpacity>
      <Text style={styles.li}>Tout |</Text>
      </TouchableOpacity>
  
     

      </ScrollView>

      </View>

      <View style={styles.bloc}>
      <ScrollView horizontal={true}>

       <View>
       <TouchableOpacity onPress={handlessPressDetail}>
       <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1'}}
       style={styles.img} />
       </TouchableOpacity>
  


        <View style={styles.divCard}>

        <Text style={styles.textCardTop}> Saint-Denis</Text>

        <TouchableOpacity>
        <Icon name="heart" size={30} color="#d43d35" style={styles.iconlike} />
        </TouchableOpacity>

     
        <View style={styles.textContaireBotton}>
        <Text style={styles.textCardBottom}>Hotêl Dina</Text>
        <Text style={styles.prix}>210€/nuit</Text>
        </View>




        </View>






       </View>

 
     

       <View>
       <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1'}}
       style={styles.img} />


        <View style={styles.divCard}>

        <Text style={styles.textCardTop}> Saint-Denis</Text>

        <TouchableOpacity>
        <Icon name="heart" size={30} color="#d43d35" style={styles.iconlike} />
        </TouchableOpacity>

        <View style={styles.textContaireBotton}>
        <Text style={styles.textCardBottom}>Hotêl Dina</Text>
        <Text style={styles.prix}>210€/nuit</Text>
        </View>
         





        </View>






       </View>

    
       </ScrollView>
      </View>



     

    <Text style={styles.h2}>Catégories</Text> 


<View style={styles.divCat}>

<View  style={styles.blocCat}>


      
<TouchableOpacity>
<Image
style={styles.iconCat}
source={require('../../public/img/3d-fluency-oak-tree.png')}/>
<Text style={styles.textCat}>
Nature
</Text>
</TouchableOpacity>  


<TouchableOpacity>
<Image
style={[styles.iconCat,{marginLeft:36}]}
source={require('../../public/img/3d-fluency-spoon-and-knife.png')}/>
<Text style={styles.textCat}>
Restaurants
</Text>
</TouchableOpacity>

<TouchableOpacity>
<Image
style={styles.iconCat}
source={require('../../public/img/3d-fluency-orange-suitcase.png')}/>
<Text style={styles.textCat}>
Hotêls 
</Text>
</TouchableOpacity>

</View>



</View>

</View>


    );
  
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        margin:10,
        alignItems:"left",
        //justifyContent: 'center',
    },
    divBtnProfil:{
        display:'flex',
        width: 358,
        flexDirection:'row-reverse',
        bottom:20,
        width: '100%',
    },
    
    baseText: {
        fontFamily: "Verdana",
       textAlign:'left'

      },
      h1:{
          color:"#125386",
          fontSize: 30,
          fontWeight: "bold"
      },
      h2:{
        color:"#125386",
        fontSize: 20,
        fontWeight: "bold"
      },
      input:{

        backgroundColor:'#fafafa',
        height:'4%',
        margin:10,
        width:'90%',
        borderRadius:40,
        padding:30,
        color:'black',

        
    },
    ul:{

      display:'flex',
      flexDirection:'row',
      padding:10,
      alignItems:'center',
    },
    li:{
      paddingRight:10
    },
    bloc:{

      display:'flex',
      flexDirection:'row',
      padding:10,
      alignItems:'center',
    },
    img:{
      width:200,
      height:180,
      borderRadius:10,
      marginRight:25
    },
    divCard:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    },
    textCardTop:{
      position: 'relative',
      bottom:170,
      left:0,
      color:"#fff",
      fontWeight:'bold',
    },
    iconlike:{
      position: 'relative',
      bottom:170,
      left:70
    },
    textCardBottom:{
      position: 'relative',
      bottom:30,
      right:90,
      color:"#fff",
      fontWeight:'bold',

    },
    prix:{
      position: 'relative',
      bottom:30,
      right:40,
      color:'#d43d35',
      fontWeight:'bold',
      backgroundColor:'#FFF'
      

    },
    textContaireBotton:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      marginLeft:-20
    },
    iconCat:{
      width:60,
      height:60,
      marginLeft:30,

      
    
    },
    blocCat:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      
    },
    blocTextCat:{
      flexDirection:'row',
      textAlign:'center',
    },
    textCat:{
      display:'flex',
      textAlign:'center',
      marginLeft:20,
      paddingLeft:10

    },
    divCat:{
      display:'flex',
      alignContent:'center',
      alignItems:'center',
      textAlign:'center',
      display:'flex',
      marginLeft:35,
      marginTop:10
      
    }
});