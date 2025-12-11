import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({ title, completed, onToggle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.checkbox} 
        onPress={onToggle}
      >
        {completed && <View style={styles.checked} />}
      </TouchableOpacity>
      <Text style={[styles.title, completed && styles.completedTitle]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 14,
    height: 14,
    backgroundColor: '#007AFF',
    borderRadius: 2,
  },
  title: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TaskItem;
