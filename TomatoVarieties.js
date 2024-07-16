import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, Avatar, Title, Divider, Searchbar } from 'react-native-paper';

const varieties = [
  { name: 'Arka Saurabh', screen: 'Arka Saurabh' },
  { name: 'Arka Vikas', screen: 'Arka Vikas' },
  { name: 'Beefsteak Tomato', screen: 'Beefsteak Tomato' },
  { name: 'Black Tomato', screen: 'Black Tomato' },
  { name: 'Campari Tomato', screen: 'Campari Tomato' },
  { name: 'Cherry Tomato', screen: 'Cherry Tomato' },
  { name: 'CO-3', screen: 'CO-3' },
  { name: 'Grape Tomato', screen: 'Grape Tomato' },
  { name: 'Green Tomato', screen: 'Green Tomato' },
  { name: 'Heirloom Tomato', screen: 'Heirloom Tomato' },
  { name: 'Paiyur 1', screen: 'Paiyur 1' },
  { name: 'PAU-2372', screen: 'PAU-2372' },
  { name: 'Pb. Kesari', screen: 'Pb. Kesari' },
  { name: 'Punjab Chhuhara', screen: 'Punjab Chhuhara' },
  { name: 'Pusa Early Dwarf', screen: 'Pusa Early Dwarf' },
  { name: 'Pusa Hybrid 4', screen: 'Pusa Hybrid 4' },
  { name: 'Pusa Hybrid 8', screen: 'Pusa Hybrid 8' },
  { name: 'Pusa Rohini', screen: 'Pusa Rohini' },
  { name: 'Pusa Sadabahar', screen: 'Pusa Sadabahar' },
  { name: 'Pusa Upahar', screen: 'Pusa Upahar' },
  { name: 'Roma Tomato', screen: 'Roma Tomato' },
  { name: 'San Marzano', screen: 'San Marzano' },
  { name: 'Sioux', screen: 'Sioux' },
  { name: 'Yellow Tomato', screen: 'Yellow Tomato' },
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
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Tomato Varieties</Title>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      {filteredVarieties.map((variety, index) => (
        <View key={index}>
          <List.Item
            title={variety.name}
            left={() => <Avatar.Icon size={40} icon="food-apple" />}
            onPress={() => navigation.navigate(variety.screen)}
          />
          <Divider />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    margin: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  searchbar: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default TomatoVarieties;
