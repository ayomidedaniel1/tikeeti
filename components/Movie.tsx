import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const Movie = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', }}>
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <View style={styles.imgContainer}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={13} color={Colors.tabText} />
            <Text style={styles.rating}>4.5</Text>
          </View>

          <View style={styles.iconContainer}>
            <Ionicons name='heart-outline' color={'#E72113'} size={10} />
          </View>

          <Image
            src='https://randomwordgenerator.com/img/picture-generator/54e4dc474f50ac14f1dc8460962e33791c3ad6e04e507749742c78d69e4dc5_640.jpg'
            style={styles.img}
          />
        </View>

        <Text style={styles.title}>Star Wars: A New Hope (1977)</Text>

        <View style={styles.infoContainer}>
          <Ionicons name="time" size={11} color={Colors.tabIconDefault} />
          <Text style={styles.info}>2hr 55mins  |  Action/Adventure</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 12,
    marginHorizontal: 10,
    // width: 170,
    // height: 289,
  },
  imgContainer: {
    width: '100%',
    height: 246,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '92%',
    borderRadius: 12,
  },
  ratingContainer: {
    position: 'absolute',
    top: 12,
    zIndex: 10,
    left: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 4,
    paddingVertical: 2,
    gap: 7,
    width: 45,
    height: 21,
    borderRadius: 12,
  },
  rating: {
    fontFamily: 'medium',
    fontSize: 12,
    color: Colors.tint,
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    zIndex: 10,
    right: 12,
    width: 20.3,
    height: 20.3,
    backgroundColor: '#FFF',
    borderRadius: 92,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.tint,
    fontFamily: 'medium',
    fontSize: 14,
    marginTop: -7,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    gap: 4,
  },
  info: {
    fontFamily: 'normal',
    color: Colors.tabIconDefault,
    fontSize: 9,
    marginTop: 14,
  },
});