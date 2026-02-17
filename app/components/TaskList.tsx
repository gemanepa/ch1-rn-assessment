import React from 'react';
import { FlatList, View } from 'react-native';
import { Checkbox, List, Text } from 'react-native-paper';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}

export default function TaskList({ tasks, onToggle }: TaskListProps) {
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
        <View className="bg-gray-50 rounded-xl border border-gray-200 mb-2">
          <List.Item
            title={item.description}
            titleStyle={item.completed ? { textDecorationLine: 'line-through', color: '#9ca3af' } : undefined}
            onPress={() => onToggle(item.id)}
            left={() => (
              <View className="ml-3 -mr-3 justify-center">
                <Checkbox.Android
                  testID={`toggle-${item.id}`}
                  status={item.completed ? 'checked' : 'unchecked'}
                  onPress={() => onToggle(item.id)}
                />
              </View>
            )}
          />
        </View>
      )}
    />
  );
}
