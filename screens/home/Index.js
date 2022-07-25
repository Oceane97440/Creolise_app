import React, { useState, useMemo, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Indexstyles } from '../../styles/IndexStyles';
import List from '../../components/List';
import { selectAllItem } from '../../database/db';


export default function Index({ navigation }) {

  const [fullList, setFullList] = useState([
    {
      id: '1',
      name: 'Hotêl Dina',
      price: '230',
      description: 'Jolie hotel de st denis',
      ville: 'Saint-Denis',
      categorie: 'Hotels',
      photos: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1',
      avantage: [
        {
          id: '1',
          point_fort: 'Restaurant',
          icon: require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id: '2',
          point_fort: 'Salle de sport',
          icon: require("../../public/img/3d-fluency-football-player.png")
        },
        {
          id: '3',
          point_fort: 'Spa',
          icon: require("../../public/img/3d-fluency-pink-flower.png")
        },
        {
          id: '4',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        },
      ]

    },
    {
      id: '2',
      name: 'Relais \n Hermitage',
      price: '120',
      description: 'Hotel au bord de mer de st-gille',
      ville: 'Saint-Gilles',
      categorie: 'Hotels',
      photos: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/32/05/320511_v6.jpeg',
      avantage: [
        {
          id: '1',
          point_fort: 'Restaurant',
          icon: require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id: '2',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        },
        {
          id: '3',
          point_fort: 'Animation music',
          icon: require("../../public/img/3d-fluency-music-note.png")
        },
      ]

    },

    {
      id: '3',
      name: 'Saint-Alexie',
      price: '320',
      description: 'Hotel 4* qui se trouve à la plage du Boucant',
      ville: 'Saint-Paul',
      categorie: 'Hotels',
      photos: 'https://images.citybreak.com/image.aspx?ImageId=4571665',
      avantage: [
        {
          id: '1',
          point_fort: 'Restaurant',
          icon: require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id: '2',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        },
        {
          id: '3',
          point_fort: 'Animation music',
          icon: require("../../public/img/3d-fluency-music-note.png")
        },
        {
          id: '4',
          point_fort: 'Salle de sport',
          icon: require("../../public/img/3d-fluency-football-player.png")
        },
        {
          id: '5',
          point_fort: 'Spa',
          icon: require("../../public/img/3d-fluency-pink-flower.png")
        },
      ]

    },
    {
      id: '4',
      name: 'Saint-Hubert',
      price: '20',
      description: 'Brasserie',
      ville: 'Saint-Denis',
      categorie: 'Restaurants',
      photos: 'https://passtime-media.s3.eu-west-3.amazonaws.com/SPs3comf4pP3vUxu6AhnCHNm',
      avantage: [
        {
          id: '1',
          point_fort: 'Restaurant',
          icon: require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id: '2',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        },
        {
          id: '3',
          point_fort: 'Animation music',
          icon: require("../../public/img/3d-fluency-music-note.png")
        },

      ]

    },
    {
      id: '5',
      name: 'Forêt \n Providence',
      price: '',
      description: 'Randonner en plein nature au coeur de St-denis',
      ville: 'Saint-Denis',
      categorie: 'Nature',
      photos: 'http://medias.tourism-system.fr/3/5/158493_la_providence-1.jpg',
      avantage: [

        {
          id: '1',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        }
      ]

    },
  ]);
  const [dataListFavoris, setdataListFavoris] = useState([]);

  const [villes, setVille] = useState('Tout')
  const [cat, setCat] = useState('Hotels')



  const filteredList = useMemo(
    () => {
      if (villes === 'Tout') return fullList


      return fullList
        .filter(item => villes === item.ville)
        .filter(item => cat === item.categorie)




    },
    [cat, villes, fullList],


  )

  const fetchData = async () => {

    try {
      const itemData = await selectAllItem()
      setdataListFavoris(itemData.rows._array)
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    fetchData()
  });

  useEffect(() => {
    if (dataListFavoris.length < 0) {
      setdataListFavoris([])
    }

  }, [dataListFavoris, fullList]);



  const VilleSelected = (arg) => {

    setVille(arg)
  }


  const CatSelected = (categorie) => {
    setCat(categorie)
  }


  return (
    <View style={Indexstyles.container}>

      <View style={Indexstyles.divBtnProfil}>
        <TouchableOpacity >
          <Icon name="user" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={Indexstyles.baseText}>
        <Text style={Indexstyles.h1}>Rechercher votre destinations</Text>   {"\n"}   {"\n"}
        <Text>Localiser les meilleur adresse à la Réunion</Text>
        {"\n"}
      </Text>

      <TextInput style={Indexstyles.input} placeholder='Recherche...'>
        <Icon name="search" size={20} color="#d43d35" />

      </TextInput>

      <ScrollView>

        <View style={Indexstyles.ul}>


          <TouchableOpacity onPress={() => VilleSelected("Tout")}>
            <Text style={Indexstyles.li}>Tout |</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => VilleSelected("Saint-Denis")}>
            <Text style={Indexstyles.li}>Saint-Denis |</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => VilleSelected("Saint-Paul")}>
            <Text style={Indexstyles.li}>Saint-Paul |</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => VilleSelected("Saint-Gilles")}>
            <Text style={Indexstyles.li}>Saint-Gilles |</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => VilleSelected("Saint-Marie")}>
            <Text style={Indexstyles.li}>Saint-Marie |</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>


      <View style={Indexstyles.bloc}>


        <FlatList

          data={filteredList}
          renderItem={({ item }) => <List item={item} favoris={dataListFavoris}navigation={navigation} />}
          keyExtractor={item => item.id}
          horizontal={true}


        />

      </View>







      <View style={Indexstyles.divCat}>
        <Text style={Indexstyles.h2}>Catégories</Text>

        <View style={Indexstyles.blocCat}>



          <TouchableOpacity onPress={() => CatSelected("Nature")}>
            <Image
              style={Indexstyles.iconCat}
              source={require('../../public/img/3d-fluency-oak-tree.png')} />
            <Text style={Indexstyles.textCat}>
              Nature
            </Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => CatSelected("Restaurants")}>
            <Image
              style={[Indexstyles.iconCat, { marginLeft: 36 }]}
              source={require('../../public/img/3d-fluency-spoon-and-knife.png')} />
            <Text style={Indexstyles.textCat}>
              Restaurants
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => CatSelected("Hotels")}>
            <Image
              style={Indexstyles.iconCat}
              source={require('../../public/img/3d-fluency-orange-suitcase.png')} />
            <Text style={Indexstyles.textCat}>
              Hotêls
            </Text>
          </TouchableOpacity>

        </View>



      </View>

    </View>


  );

}
