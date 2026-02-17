import { renderHook, act } from '@testing-library/react-native';
import useTasks from '../hooks/useTasks';

describe('useTasks hook', () => {
  it('starts with an empty task list', () => {
    const { result } = renderHook(() => useTasks());
    expect(result.current.tasks).toEqual([]);
  });

  it('adds a task with the correct description', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Buy groceries');
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].description).toBe('Buy groceries');
  });

  it('creates tasks with completed set to false', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('A task');
    });

    expect(result.current.tasks[0].completed).toBe(false);
  });

  it('assigns a unique id to each task', () => {
    const now = jest.spyOn(Date, 'now');
    now.mockReturnValueOnce(1000).mockReturnValueOnce(2000);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Task one');
    });
    act(() => {
      result.current.addTask('Task two');
    });

    const ids = result.current.tasks.map((t) => t.id);
    expect(new Set(ids).size).toBe(2);

    now.mockRestore();
  });

  it('prepends new tasks to the list', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('First');
    });
    act(() => {
      result.current.addTask('Second');
    });

    expect(result.current.tasks[0].description).toBe('Second');
    expect(result.current.tasks[1].description).toBe('First');
  });
});
