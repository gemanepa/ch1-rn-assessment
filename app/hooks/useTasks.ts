import { useState } from 'react';
import { Task } from '../types/Task';

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

  return { tasks, addTask };
}
