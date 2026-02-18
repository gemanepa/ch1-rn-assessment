import React from 'react';
import { View } from 'react-native';
import { Checkbox, IconButton, List } from 'react-native-paper';
import { CosmicColors } from '@/theme/colors';
import { Task } from '@/types/Task';

interface TaskItemProps {
  item: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ item, onToggle, onDelete }: TaskItemProps) {
  return (
    <View
      className={`bg-cosmic-card border rounded-[4px] mb-2 ${item.completed ? 'border-cosmic-cardBorder' : 'border-cosmic-inputBorder'}`}
      style={{
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
            className="bg-red-500/10 rounded-lg"
          />
        )}
      />
    </View>
  );
}
