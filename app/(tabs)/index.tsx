import Header from '@/components/Header';
import Movie from '@/components/Movie';
import SearchInput from '@/components/SearchInput';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-root-toast';

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
    paddingHorizontal: 10,
  },
  scrollview: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 16,
  },
  title: {
    fontFamily: 'medium',
    fontSize: 24,
    color: Colors.tint,
    letterSpacing: -0.02,
    textAlign: 'left',
    marginTop: 14,
    marginBottom: 21,
    paddingHorizontal: 10,
  },
  searchNull: {
    fontSize: 16,
    fontFamily: 'medium',
    color: Colors.tint,
    textAlign: 'center',
  },
});
