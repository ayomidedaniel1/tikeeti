import { StyleSheet, Text, View } from 'react-native';

export default function BookingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Bookings  Screen</Text>
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
