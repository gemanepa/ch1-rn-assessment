import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { CosmicColors } from '../theme/colors';

interface AddTaskProps {
  onAdd: (description: string) => void;
}

export default function AddTask({ onAdd }: AddTaskProps) {
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    const trimmed = description.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setDescription('');
  };

  return (
    <View className="flex-row items-center gap-2 px-4 py-3">
      <View className="flex-1">
        <TextInput
          label="New task"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          dense
          testID="task-input"
          outlineColor={CosmicColors.inputBorder}
          activeOutlineColor={CosmicColors.primaryLight}
          textColor={CosmicColors.textPrimary}
          style={{ backgroundColor: CosmicColors.inputBg }}
          theme={{ colors: { onSurfaceVariant: CosmicColors.textSecondary } }}
        />
      </View>
      <View className="pt-2">
        <Button
          mode="contained"
          onPress={handleAdd}
          disabled={!description.trim()}
          testID="add-button"
          buttonColor="#A78BFA"
          textColor={CosmicColors.textPrimary}
          style={{ borderRadius: 10 }}
          contentStyle={{ height: 42, justifyContent: 'center' }}
          theme={{
            colors: {
              surfaceDisabled: '#DDD6FE',
              onSurfaceDisabled: '#8B5CF6',
            },
          }}
        >
          Add
        </Button>
      </View>
    </View>
  );
}
