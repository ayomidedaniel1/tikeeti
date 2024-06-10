import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { formatDuration } from '@/utils/time';

interface MovieProps {
  title: string;
  image: string;
  rating: number;
  category: string;
  duration: number;
}

const Movie = ({ title, image, rating, category, duration }: MovieProps) => {

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', }}>
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <View style={styles.imgContainer}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={13} color={Colors.tabText} />
            <Text style={styles.rating}>{rating}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Ionicons name='heart-outline' color={'#E72113'} size={10} />
          </View>

          <Image
            src={image}
            style={styles.img}
          />
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.infoContainer}>
          <Ionicons name="time" size={11} color={Colors.tabIconDefault} />
          <Text style={styles.info}>{formatDuration(duration)}  |  {category}</Text>
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