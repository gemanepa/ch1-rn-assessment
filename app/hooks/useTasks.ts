import { useState } from 'react';
import { Task } from '@/types/Task';

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
}
