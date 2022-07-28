import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList } from 'react-native';
import { Indexstyles } from '../styles/IndexStyles';



const SearchBar = ({ data, navigation }) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);



    useEffect(() => {
        try {
            setFilteredDataSource(data);
            setMasterDataSource(data);
        } catch (error) {
            console.error(error);

        }


    }, [masterDataSource]);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {

            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();

                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {

            setFilteredDataSource([]);
            setSearch(text);
        }
    };



    const ItemView = ({ item }) => {

        if (search) {
            return (
                // Flat List Item
                <Text style={{fontSize:12,paddingBottom: 10}} onPress={() => {
                    navigation.navigate('Detaile', { item })

                }}>
                    {item.name.toUpperCase()}
                </Text>
            );
        }

    };





    return (
        <View style={{ width: '100%', height: '11%', paddingBottom: 5, display: 'flex', flexDirection: 'row' }}>
            <TextInput
                style={Indexstyles.input}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                placeholder="Recherche..." />

            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
            />

        </View>

    );

}

const styles = StyleSheet.create({


    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

export default SearchBar;
