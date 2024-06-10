import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-root-toast';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '@/utils/api';

import Header from '@/components/Header';
import Movie from '@/components/Movie';
import SearchInput from '@/components/SearchInput';
import { Colors } from '@/constants/Colors';

type MovieItem = {
  title: string;
  image: string;
  rating: number;
  category: string;
  duration: number;
};

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Function to handle search functionality using react query
  const { data: movies, isError, isLoading, refetch } = useQuery<MovieItem[], Error>({
    queryKey: ['movies', searchQuery],
    queryFn: () => fetchMovies(searchQuery),
    enabled: !!searchQuery,
  });

  useEffect(() => {
    if (searchQuery) {
      refetch();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isError) {
      Toast.show('Some error occurred! Try again', {
        duration: Toast.durations.LONG,
      });
    }
  }, [isError]);

  return (
    <View style={styles.container}>
      <Header />

      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={refetch} />

      <Text style={styles.title}>Search results</Text>

      {isLoading ? (
        <ActivityIndicator size={'large'} color={Colors.tint} />
      ) : isError ? (
        <Text style={styles.error}>Error fetching movies. Please try again.</Text>
      ) : movies && movies.length > 0 ? (
        <FlatList
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          data={movies}
          numColumns={2}
          keyExtractor={(item, index) => item.title + index}
          initialNumToRender={6}
          renderItem={({ item }) => (
            <Movie title={item.title} image={item.image} rating={item.rating} category={item.category} duration={item.duration} />
          )}
        />
      ) : (
        <Text style={styles.searchNull}>No movie found</Text>
      )}

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
  loading: {
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
