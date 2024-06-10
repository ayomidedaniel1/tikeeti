import Header from '@/components/Header';
import SearchInput from '@/components/SearchInput';
import { useState } from 'react';
import Toast from 'react-native-root-toast';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import Movie from '@/components/Movie';

const movies = [1, 2, 4, 5, 6, 6];

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

      <Text style={styles.title}>Search results</Text>

      <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100, }} alwaysBounceVertical>

        <FlatList
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          data={movies}
          numColumns={2}
          keyExtractor={(item, index) => item.toString()}
          initialNumToRender={6}
          renderItem={({ item, index }) => (
            <Movie />
          )}
        />

        {/* {(movies && movies.length > 0) ? (
        <FlatList
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          data={movies}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.searchNull}>No movie found</Text>
      )} */}

      </ScrollView>

      <StatusBar barStyle={'dark-content'} translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 50,
    position: "relative",
  },
  scrollview: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'medium',
    fontSize: 24,
    color: Colors.tint,
    letterSpacing: -0.02,
    textAlign: 'left',
    marginTop: 14,
    paddingHorizontal: 20,
  },
  searchNull: {
    fontSize: 16,
    fontFamily: 'medium',
    color: Colors.tint,
    textAlign: 'center',
  },
});
