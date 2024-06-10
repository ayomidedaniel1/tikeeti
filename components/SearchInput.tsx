import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
};

const SearchInput = ({ searchQuery, setSearchQuery, handleSearch }: SearchInputProps) => {

  const handleChangeText = (text: string) => {
    setSearchQuery(text);
  };

  const handleSearchPress = () => {
    Keyboard.dismiss();
    handleSearch();
  };

  // Function to dismiss the keyboard when users press enter on the keyboard
  const handleKeyPress = (event: any) => {
    if (event.nativeEvent.key === 'Enter') {
      Keyboard.dismiss();
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name='search' size={24} color={Colors.tabIconSelected} />

      <TextInput
        style={styles.textInput}
        value={searchQuery}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSearchPress}
        onKeyPress={handleKeyPress}
        placeholder='Adventure movies'
        placeholderTextColor={Colors.tint}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
  },
  textInput: {
    width: '80%',
    height: '100%',
    backgroundColor: 'transparent',
    padding: 10,
  },
});