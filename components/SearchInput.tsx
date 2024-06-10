import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
};

const SearchInput = ({ searchQuery, setSearchQuery, handleSearch }: SearchInputProps) => {

  const handleChangeText = (text: string) => {
    setSearchQuery(text);
    handleSearch();
  };

  return (
    <View style={styles.container}>
      <Ionicons name='search' size={24} color={Colors.tabIconSelected} />

      <TextInput
        style={styles.textInput}
        value={searchQuery}
        onChangeText={handleChangeText}
        placeholder='Adventure movies'
        placeholderTextColor={Colors.tint}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 56,
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 6,
    paddingLeft: 16,
    gap: 7,
    backgroundColor: '#F0F2F5',
    marginHorizontal: 10,
  },
  textInput: {
    width: '80%',
    height: '100%',
    backgroundColor: 'transparent',
    padding: 10,
    fontSize: 14,
  },
});