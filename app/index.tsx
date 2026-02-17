import React from 'react';
import { View } from 'react-native';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

export default function Index() {
  const { tasks, addTask } = useTasks();

  return (
    <View className="flex-1 bg-white">
      <Header />
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} />
    </View>
  );
}
