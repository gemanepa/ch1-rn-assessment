import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import AddTask from '@/app/components/AddTask';

describe('AddTask component', () => {
  it('renders the text input and Add button', () => {
    render(<AddTask onAdd={jest.fn()} />);
    expect(screen.getByTestId('task-input')).toBeTruthy();
    expect(screen.getByText('Add')).toBeTruthy();
  });

  it('calls onAdd with trimmed description when Add is pressed', () => {
    const onAdd = jest.fn();
    render(<AddTask onAdd={onAdd} />);

    const input = screen.getByTestId('task-input');
    fireEvent.changeText(input, '  Buy milk  ');
    fireEvent.press(screen.getByTestId('add-button'));

    expect(onAdd).toHaveBeenCalledWith('Buy milk');
  });

  it('does not call onAdd when description is empty', () => {
    const onAdd = jest.fn();
    render(<AddTask onAdd={onAdd} />);

    fireEvent.press(screen.getByTestId('add-button'));

    expect(onAdd).not.toHaveBeenCalled();
  });

  it('clears input after successful add', () => {
    render(<AddTask onAdd={jest.fn()} />);

    const input = screen.getByTestId('task-input');
    fireEvent.changeText(input, 'New task text');
    fireEvent.press(screen.getByTestId('add-button'));

    expect(input.props.value).toBe('');
  });

  it('does not call onAdd when input is only whitespace', () => {
    const onAdd = jest.fn();
    render(<AddTask onAdd={onAdd} />);

    fireEvent.changeText(screen.getByTestId('task-input'), '    ');
    fireEvent.press(screen.getByTestId('add-button'));

    expect(onAdd).not.toHaveBeenCalled();
  });
});
