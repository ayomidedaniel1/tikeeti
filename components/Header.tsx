import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons name="chevron-back" size={24} color={Colors.tabIconSelected} />
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <SimpleLineIcons name="location-pin" size={15} color="black" />

        <Text style={styles.locationText}>
          Glassgow, scotland
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backBtn: {
    width: 36,
    height: 36,
    backgroundColor: '#F0F2F5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontFamily: 'regular',
    fontSize: 12,
    color: Colors.tint,
  },
});