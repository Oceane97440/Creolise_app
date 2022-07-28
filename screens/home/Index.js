import React, { useState, useMemo, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Indexstyles } from '../../styles/IndexStyles';
import List from '../../components/List';
import SearchBar from '../../components/SearchBar';



export default function Index({ navigation,data }) {

  const [fullList, setFullList] = useState([]);
  const [villes, setVille] = useState('Tout')
  const [cat, setCat] = useState('Hotels')


  useEffect(() => {

    setFullList(data);

  }, [fullList]);



 
  const filteredList = useMemo(
    () => {
      if (villes === 'Tout') return fullList


      return fullList
        .filter(item => villes === item.ville)
        .filter(item => cat === item.categorie)




    },
    [cat, villes, fullList],


  )





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

      <SearchBar data={fullList} navigation={navigation}/>

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
          renderItem={({ item }) => <List item={item} navigation={navigation} />}
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
