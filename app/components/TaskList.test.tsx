import React from 'react';
import { render, screen } from '@testing-library/react-native';
import TaskList from '../components/TaskList';
import { Task } from '../types/Task';

describe('TaskList component', () => {
  it('renders empty state message when there are no tasks', () => {
    render(<TaskList tasks={[]} />);
    expect(screen.getByText('No tasks yet. Add one above!')).toBeTruthy();
  });

  it('renders a single task', () => {
    const tasks: Task[] = [
      { id: '1', description: 'Buy groceries', completed: false },
    ];
    render(<TaskList tasks={tasks} />);
    expect(screen.getByText('Buy groceries')).toBeTruthy();
  });

  it('renders multiple tasks', () => {
    const tasks: Task[] = [
      { id: '1', description: 'Task one', completed: false },
      { id: '2', description: 'Task two', completed: false },
    ];
    render(<TaskList tasks={tasks} />);
    expect(screen.getByText('Task one')).toBeTruthy();
    expect(screen.getByText('Task two')).toBeTruthy();
  });

  it('does not show empty state message when tasks exist', () => {
    const tasks: Task[] = [
      { id: '1', description: 'A task', completed: false },
    ];
    render(<TaskList tasks={tasks} />);
    expect(screen.queryByText('No tasks yet. Add one above!')).toBeNull();
  });
});
