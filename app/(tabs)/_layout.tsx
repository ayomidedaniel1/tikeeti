import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { TabBarFontIcon, TabBarIcon, TabBarMaterialIcon } from '@/components/navigation/TabBarIcon';
import { StyleSheet, Text } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tabIconSelected,
        tabBarInactiveTintColor: Colors.tabIconDefault,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.tint,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{
              color: focused ? Colors.tabText : Colors.tabIconDefault
            },
            styles.tabBarLabelStyle]}
            >
              Home
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'search' : 'search-outline'}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{
              color: focused ? Colors.tabText : Colors.tabIconDefault
            },
            styles.tabBarLabelStyle]}
            >
              Search
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarMaterialIcon
              name={focused ? 'ticket-confirmation' : 'ticket-confirmation-outline'}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{
              color: focused ? Colors.tabText : Colors.tabIconDefault
            },
            styles.tabBarLabelStyle]}
            >
              Bookings
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{
              color: focused ? Colors.tabText : Colors.tabIconDefault
            },
            styles.tabBarLabelStyle]}
            >
              Favourites
            </Text>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarFontIcon
              name={focused ? 'user' : 'user-o'}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={[{
              color: focused ? Colors.tabText : Colors.tabIconDefault
            },
            styles.tabBarLabelStyle]}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'regular',
  },
});