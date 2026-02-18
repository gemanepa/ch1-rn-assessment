import React from 'react';
import { FlatList } from 'react-native';

import { Task } from '@/types/Task';
import TaskEmpty from '@/app/components/TaskList/TaskEmpty';
import TaskItem from '@/app/components/TaskList/TaskItem';

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
      contentContainerClassName="px-4 pb-6"
      ListEmptyComponent={<TaskEmpty />}
      renderItem={({ item }) => (
        <TaskItem item={item} onToggle={onToggle} onDelete={onDelete} />
      )}
    />
  );
}
