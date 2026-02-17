import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

export default function Index() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </SafeAreaView>
  );
}
