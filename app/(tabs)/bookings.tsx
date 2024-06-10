import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function BookingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Bookings  Screen</Text>

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
});
