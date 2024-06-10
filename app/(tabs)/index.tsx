import Header from '@/components/Header';
import SearchInput from '@/components/SearchInput';
import { useState } from 'react';
import Toast from 'react-native-root-toast';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Function to handle search functionality
  const handleSearch = async () => {
    if (searchQuery) {
      try {
        console.log(searchQuery);

      } catch (error) {
        console.log(`Some error occured ${error}`);
        Toast.show('Some error occurred!. Try again');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

      <Text style={styles.title}>Search Results</Text>

      <StatusBar barStyle={'dark-content'} translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 60,
    position: "relative",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'medium',
    fontSize: 24,
    color: Colors.tint,
    letterSpacing: -0.02,
    textAlign: 'left',
  },
});
