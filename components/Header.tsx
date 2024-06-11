import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useLocation } from '@/hooks/useLocation';

const Header = () => {
  const { location, handleOpenSettings, permissionDenied, address } = useLocation();
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  // useEffect to check if app has user location access
  useEffect(() => {
    if (location) {
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    }

    console.log(latitude, longitude);
    console.log(location);
  }, [location]);

  if (permissionDenied) {
    Alert.alert(
      'Permission denied',
      'You denied Tiketti permission',
      [
        {
          text: 'Go to settings',
          onPress: () => handleOpenSettings(),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
  }

  if (address) {
    console.log(`User is in ${address.state}, ${address.country}`);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons name="chevron-back" size={24} color={Colors.tabIconSelected} />
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <SimpleLineIcons name="location-pin" size={15} color="black" />

        {address ? (
          <Text style={styles.locationText}>
            {address.state}, {address.country}
          </Text>
        ) : (
          <Text style={styles.locationText}>
            Glassgow, scotland
          </Text>
        )}
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