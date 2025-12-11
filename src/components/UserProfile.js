import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ name, role, avatar }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: avatar || 'https://via.placeholder.com/100' }} 
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    backgroundColor: '#e0e0e0',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
});

export default UserProfile;
