import { StyleSheet, Text, View } from 'react-native';

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Favourites  Screen</Text>
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
});
