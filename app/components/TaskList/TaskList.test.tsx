import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import TaskList from '@/app/components/TaskList';
import { Task } from '@/types/Task';

describe('TaskList component', () => {
  it('renders empty state message when there are no tasks', () => {
    render(<TaskList tasks={[]} onToggle={jest.fn()} onDelete={jest.fn()} />);
    expect(screen.getByText('No tasks yet')).toBeTruthy();
  });

  it('renders a single task', () => {
    const tasks: Task[] = [
      { id: '1', description: 'Buy groceries', completed: false },
    ];
    render(
      <TaskList tasks={tasks} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );
    expect(screen.getByText('Buy groceries')).toBeTruthy();
  });

  it('renders multiple tasks', () => {
    const tasks: Task[] = [
      { id: '1', description: 'Task one', completed: false },
      { id: '2', description: 'Task two', completed: false },
    ];
    render(
      <TaskList tasks={tasks} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );
    expect(screen.getByText('Task one')).toBeTruthy();
    expect(screen.getByText('Task two')).toBeTruthy();
  });

  it('does not show empty state message when tasks exist', () => {
    const tasks: Task[] = [
      { id: '1', description: 'A task', completed: false },
    ];
    render(
      <TaskList tasks={tasks} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );
    expect(screen.queryByText('No tasks yet')).toBeNull();
  });

  it('calls onToggle with the task id when checkbox is pressed', () => {
    const onToggle = jest.fn();
    const tasks: Task[] = [
      { id: '1', description: 'Buy groceries', completed: false },
    ];
    render(<TaskList tasks={tasks} onToggle={onToggle} onDelete={jest.fn()} />);

    fireEvent.press(screen.getByTestId('toggle-1'));

    expect(onToggle).toHaveBeenCalledWith('1');
  });

  it('renders a completed task with line-through style', () => {
    const tasks: Task[] = [
      { id: '1', description: 'Done task', completed: true },
    ];
    render(
      <TaskList tasks={tasks} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );

    const title = screen.getByText('Done task');
    expect(JSON.stringify(title.props.style)).toContain('line-through');
  });

  it('renders an incomplete task without line-through style', () => {
    const tasks: Task[] = [
      { id: '1', description: 'Pending task', completed: false },
    ];
    render(
      <TaskList tasks={tasks} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );

    const title = screen.getByText('Pending task');
    expect(JSON.stringify(title.props.style)).not.toContain('line-through');
  });

  it('renders a delete button for each task', () => {
    const tasks: Task[] = [
      { id: '1', description: 'Task one', completed: false },
      { id: '2', description: 'Task two', completed: false },
    ];
    render(
      <TaskList tasks={tasks} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );

    expect(screen.getByTestId('delete-1')).toBeTruthy();
    expect(screen.getByTestId('delete-2')).toBeTruthy();
  });

  it('calls onDelete with the task id when delete button is pressed', () => {
    const onDelete = jest.fn();
    const tasks: Task[] = [
      { id: '1', description: 'Buy groceries', completed: false },
    ];
    render(<TaskList tasks={tasks} onToggle={jest.fn()} onDelete={onDelete} />);

    fireEvent.press(screen.getByTestId('delete-1'));

    expect(onDelete).toHaveBeenCalledWith('1');
  });
});
