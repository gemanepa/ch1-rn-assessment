import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTask from './components/AddTask';
import Background from './components/Background';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';
import { CosmicColors } from './theme/colors';

export default function Index() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <View style={{ flex: 1, backgroundColor: CosmicColors.background }}>
      <Background />
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </SafeAreaView>
    </View>
  );
}
