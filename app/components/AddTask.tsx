import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

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
        />
      </View>
      <Button
        mode="contained"
        onPress={handleAdd}
        disabled={!description.trim()}
        testID="add-button"
      >
        Add
      </Button>
    </View>
  );
}
