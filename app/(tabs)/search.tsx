import { StyleSheet, Text, View } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search  Screen</Text>
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
