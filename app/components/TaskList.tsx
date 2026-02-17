import React from 'react';
import { FlatList, View } from 'react-native';
import { Checkbox, IconButton, List, Text } from 'react-native-paper';
import { CosmicColors } from '../../theme/colors';
import { Task } from '../../types/Task';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ListEmptyComponent={
        <Text
          className="text-center mt-8"
          style={{ color: CosmicColors.textMuted }}
        >
          No tasks yet. Add one above!
        </Text>
      }
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: CosmicColors.card,
            borderColor: item.completed
              ? CosmicColors.cardBorder
              : CosmicColors.inputBorder,
            borderWidth: 1,
            borderRadius: 12,
            marginBottom: 8,
            shadowColor: CosmicColors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <List.Item
            title={item.description}
            titleStyle={
              item.completed
                ? {
                    textDecorationLine: 'line-through',
                    color: CosmicColors.textMuted,
                  }
                : { color: CosmicColors.textPrimary }
            }
            onPress={() => onToggle(item.id)}
            left={() => (
              <View className="ml-3 -mr-3 justify-center">
                <Checkbox.Android
                  testID={`toggle-${item.id}`}
                  status={item.completed ? 'checked' : 'unchecked'}
                  onPress={() => onToggle(item.id)}
                  color={CosmicColors.primaryLight}
                  uncheckedColor={CosmicColors.textMuted}
                />
              </View>
            )}
            right={() => (
              <IconButton
                testID={`delete-${item.id}`}
                icon="trash-can-outline"
                iconColor={CosmicColors.danger}
                size={20}
                onPress={() => onDelete(item.id)}
                style={{
                  backgroundColor: 'rgba(239,68,68,0.10)',
                  borderRadius: 8,
                }}
              />
            )}
          />
        </View>
      )}
    />
  );
}
