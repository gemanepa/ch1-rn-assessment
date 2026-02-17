import React from 'react';
import { FlatList } from 'react-native';
import { List, Text } from 'react-native-paper';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ListEmptyComponent={
        <Text className="text-center text-gray-400 mt-8">
          No tasks yet. Add one above!
        </Text>
      }
      renderItem={({ item }) => (
        <List.Item
          title={item.description}
          titleStyle={item.completed ? { textDecorationLine: 'line-through', color: '#9ca3af' } : undefined}
        />
      )}
    />
  );
}
