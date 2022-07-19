import React from 'react';
import {Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,ScrollView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Indexstyles } from '../../styles/IndexStyles';
export default function Index({navigation}) {


  //DATA JSON TEST

  const DATA =[
    {
      id:'1',
      name:'Hotêl Dina',
      price:'230',
      description:'Jolie hotel de st denis',
      ville:'Saint-Denis',
      categorie:'Hôtel',
      photos:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1',
      avantage:[
        {
          id:'1',
          point_fort:'Restaurant',
          icon:require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id:'2',
          point_fort:'Salle de sport',
          icon:require("../../public/img/3d-fluency-football-player.png")
        },
        {
          id:'3',
          point_fort:'Spa',
          icon:require("../../public/img/3d-fluency-pink-flower.png")
        },
        {
          id:'4',
          point_fort:'Place de parking',
          icon:require("../../public/img/3d-fluency-blue-car.png")
        },
      ]

    },
    {
      id:'2',
      name:'Relais \n Hermitage',
      price:'120',
      description:'Hotel au bord de mer de st-gille',
      ville:'Saint-Gilles',
      categorie:'Hôtel',
      photos:'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/32/05/320511_v6.jpeg',
      avantage:[
        {
          id:'1',
          point_fort:'Restaurant',
          icon:require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id:'2',
          point_fort:'Place de parking',
          icon:require("../../public/img/3d-fluency-blue-car.png")
        },
        {
          id:'3',
          point_fort:'Animation music',
          icon:require("../../public/img/3d-fluency-music-note.png")
        },
      ]

    },

    {
      id:'3',
      name:'Saint-Alexi',
      price:'320',
      description:'Hotel 4* qui se trouve à la plage du Boucant',
      ville:'Saint-Paul',
      categorie:'Hôtel',
      photos:'https://images.citybreak.com/image.aspx?ImageId=4571665',
      avantage:[
        {
          id:'1',
          point_fort:'Restaurant',
          icon:require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id:'2',
          point_fort:'Place de parking',
          icon:require("../../public/img/3d-fluency-blue-car.png")
        },
        {
          id:'3',
          point_fort:'Animation music',
          icon:require("../../public/img/3d-fluency-music-note.png")
        },
        {
          id:'4',
          point_fort:'Salle de sport',
          icon:require("../../public/img/3d-fluency-football-player.png")
        },
        {
          id:'5',
          point_fort:'Spa',
          icon:require("../../public/img/3d-fluency-pink-flower.png")
        },
      ]

    }
  ]

  const DATA_VILLE =[
    {
      id:'1',
      name:'Tout'
    },
    {
      id:'2',
      name:'Saint-Denis'
    },
    {
      id:'3',
      name:'Saint-Paul'
    },
    {
      id:'4',
      name:'Saint-Gilles'
    },
    {
      id:'5',
      name:'Saint-André'
    },
    {
      id:'6',
      name:'Saint-Marie'
    },
  ]


  const renderItem = ({item}) => {

    return(

      <View>
        <TouchableOpacity 
        onPress={() => {
        navigation.navigate('Detaile',{item})
  
         }}>
        <Image source={{uri: item.photos}}
        style={Indexstyles.img} />
        </TouchableOpacity>
  


        <View style={Indexstyles.divCard}>

        <Text style={Indexstyles.textCardTop}> {item.ville}</Text>

        <TouchableOpacity>
        <Icon name="heart" size={30} color="#d43d35" style={Indexstyles.iconlike} />
        </TouchableOpacity>

      
        <View style={Indexstyles.textContaireBotton}>
        <Text style={Indexstyles.textCardBottom}>{item.name}</Text>
        <Text style={Indexstyles.prix}>{item.price}€/nuit</Text>
        </View>




        </View>

      
      </View>
    )

  }

  const renderItemVille = ({item}) => {

    return(
      <TouchableOpacity>
      <Text style={Indexstyles.li}>{item.name} |</Text>
      </TouchableOpacity>
    )

  }

 
  
    return (
      <View style={Indexstyles.container}>

    <View style={Indexstyles.divBtnProfil}>
      <TouchableOpacity >
            <Icon name="user" size={30} color="#000"  />
          </TouchableOpacity> 
      </View>
      
      <Text style={Indexstyles.baseText}>
        <Text style={Indexstyles.h1}>Rechercher votre destinations</Text>   {"\n"}   {"\n"}
        <Text>Localiser les meilleur adresse à la Réunion</Text>
        {"\n"}
      </Text>

      <TextInput style={Indexstyles.input}  placeholder='Recherche...'>
      <Icon name="search" size={20} color="#d43d35"  />

      </TextInput>

      <View style={Indexstyles.ul}>


      <FlatList
      
      data={DATA_VILLE}
      renderItem={renderItemVille}
      keyExtractor={item => item.id}
      horizontal={true}
      
      />


      

      </View>

      <View style={Indexstyles.bloc}>


      <FlatList
      
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
      
      
      />

      </View>



     

    <Text style={Indexstyles.h2}>Catégories</Text> 


<View style={Indexstyles.divCat}>

<View  style={Indexstyles.blocCat}>


      
<TouchableOpacity>
<Image
style={Indexstyles.iconCat}
source={require('../../public/img/3d-fluency-oak-tree.png')}/>
<Text style={Indexstyles.textCat}>
Nature
</Text>
</TouchableOpacity>  


<TouchableOpacity>
<Image
style={[Indexstyles.iconCat,{marginLeft:36}]}
source={require('../../public/img/3d-fluency-spoon-and-knife.png')}/>
<Text style={Indexstyles.textCat}>
Restaurants
</Text>
</TouchableOpacity>

<TouchableOpacity>
<Image
style={Indexstyles.iconCat}
source={require('../../public/img/3d-fluency-orange-suitcase.png')}/>
<Text style={Indexstyles.textCat}>
Hotêls 
</Text>
</TouchableOpacity>

</View>



</View>

</View>


    );
  
}
