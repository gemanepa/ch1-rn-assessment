import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Index from '../index';

describe('Index screen', () => {
  it('renders the Task Manager heading', () => {
    render(<Index />);
    expect(screen.getByText('Task Manager')).toBeTruthy();
  });

  it('renders empty state message when no tasks exist', () => {
    render(<Index />);
    expect(screen.getByText('No tasks yet. Add one above!')).toBeTruthy();
  });

  it('renders the Add button', () => {
    render(<Index />);
    expect(screen.getByText('Add')).toBeTruthy();
  });

  it('adds a task when user types a description and presses Add', () => {
    render(<Index />);

    const input = screen.getByTestId('task-input');
    fireEvent.changeText(input, 'Buy groceries');
    fireEvent.press(screen.getByTestId('add-button'));

    expect(screen.getByText('Buy groceries')).toBeTruthy();
    expect(screen.queryByText('No tasks yet. Add one above!')).toBeNull();
  });

  it('clears the input after adding a task', () => {
    render(<Index />);

    const input = screen.getByTestId('task-input');
    fireEvent.changeText(input, 'Walk the dog');
    fireEvent.press(screen.getByTestId('add-button'));

    expect(input.props.value).toBe('');
  });

  it('does not add a task when description is only whitespace', () => {
    render(<Index />);

    const input = screen.getByTestId('task-input');
    fireEvent.changeText(input, '   ');
    fireEvent.press(screen.getByTestId('add-button'));

    expect(screen.getByText('No tasks yet. Add one above!')).toBeTruthy();
  });

  it('adds multiple tasks and displays them all', () => {
    render(<Index />);

    const input = screen.getByTestId('task-input');

    fireEvent.changeText(input, 'Task one');
    fireEvent.press(screen.getByTestId('add-button'));

    fireEvent.changeText(input, 'Task two');
    fireEvent.press(screen.getByTestId('add-button'));

    expect(screen.getByText('Task one')).toBeTruthy();
    expect(screen.getByText('Task two')).toBeTruthy();
  });
});
