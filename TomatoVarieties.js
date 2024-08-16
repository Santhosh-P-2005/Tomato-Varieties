import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, Dimensions, Platform } from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const varieties = [
  { name: 'Arka Saurabh', screen: 'Arka Saurabh', image: require('./photos/Arka Saurabh.png') },
  { name: 'Arka Vikas', screen: 'Arka Vikas', image: require('./photos/Arka Vikas.png') },
  { name: 'Beefsteak Tomato', screen: 'Beefsteak Tomato', image: require('./photos/Beefsteak Tomato.png') },
  { name: 'Black Tomato', screen: 'Black Tomato', image: require('./photos/Black Tomato.png') },
  { name: 'Campari Tomato', screen: 'Campari Tomato', image: require('./photos/Campari Tomato.png') },
  { name: 'Cherry Tomato', screen: 'Cherry Tomato', image: require('./photos/Cherry Tomato.png') },
  { name: 'CO-3', screen: 'CO-3', image: require('./photos/CO-3.png') },
  { name: 'Grape Tomato', screen: 'Grape Tomato', image: require('./photos/Grape Tomato.png') },
  { name: 'Green Tomato', screen: 'Green Tomato', image: require('./photos/Green Tomato.png') },
  { name: 'Heirloom Tomato', screen: 'Heirloom Tomato', image: require('./photos/Heirloom Tomato.png') },
  { name: 'Paiyur 1', screen: 'Paiyur 1', image: require('./photos/Paiyur 1.png') },
  { name: 'PAU-2372', screen: 'PAU-2372', image: require('./photos/PAU-2372.png') },
  { name: 'Pb. Kesari', screen: 'Pb. Kesari', image: require('./photos/Pb. Kesari.png') },
  { name: 'Punjab Chhuhara', screen: 'Punjab Chhuhara', image: require('./photos/Punjab Chhuhara.png') },
  { name: 'Pusa Early Dwarf', screen: 'Pusa Early Dwarf', image: require('./photos/Pusa Early Dwarf.png') },
  { name: 'Pusa Hybrid 4', screen: 'Pusa Hybrid 4', image: require('./photos/Pusa Hybrid 4.png') },
  { name: 'Pusa Hybrid 8', screen: 'Pusa Hybrid 8', image: require('./photos/Pusa Hybrid 8.png') },
  { name: 'Pusa Rohini', screen: 'Pusa Rohini', image: require('./photos/Pusa Rohini.png') },
  { name: 'Pusa Sadabahar', screen: 'Pusa Sadabahar', image: require('./photos/Pusa Sadabahar.jpg') },
  { name: 'Pusa Upahar', screen: 'Pusa Upahar', image: require('./photos/Pusa Upahar.png') },
  { name: 'Roma Tomato', screen: 'Roma Tomato', image: require('./photos/Roma Tomato(Plum Tomato).png') },
  { name: 'San Marzano', screen: 'San Marzano', image: require('./photos/San Marzano Tomato.png') },
  { name: 'Sioux', screen: 'Sioux', image: require('./photos/Sioux.png') },
  { name: 'Yellow Tomato', screen: 'Yellow Tomato', image: require('./photos/Yellow and Orange Tomato.png') },
];

const TomatoVarieties = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVarieties, setFilteredVarieties] = useState(varieties);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setFilteredVarieties(
      varieties.filter((variety) =>
        variety.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
        <View style={styles.itemsContainer}>
          {filteredVarieties.map((variety, index) => (
            <View key={index} style={styles.itemWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate(variety.screen)}>
                <Image source={variety.image} style={styles.image} />
                <Text style={styles.text}>{variety.name}</Text>
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');
const imageSize = Platform.OS === 'web' ? width * 0.17 : width * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default TomatoVarieties;