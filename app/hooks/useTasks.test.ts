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

  it('toggles a task from incomplete to complete', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Buy groceries');
    });

    const id = result.current.tasks[0].id;

    act(() => {
      result.current.toggleTask(id);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  it('toggles a task from complete back to incomplete', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Buy groceries');
    });

    const id = result.current.tasks[0].id;

    act(() => {
      result.current.toggleTask(id);
    });
    act(() => {
      result.current.toggleTask(id);
    });

    expect(result.current.tasks[0].completed).toBe(false);
  });

  it('deletes a task by id', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Buy groceries');
    });

    const id = result.current.tasks[0].id;

    act(() => {
      result.current.deleteTask(id);
    });

    expect(result.current.tasks).toHaveLength(0);
  });

  it('only deletes the targeted task', () => {
    const now = jest.spyOn(Date, 'now');
    now.mockReturnValueOnce(1000).mockReturnValueOnce(2000);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Task one');
    });
    act(() => {
      result.current.addTask('Task two');
    });

    // tasks are prepended: [Task two (id:'2000'), Task one (id:'1000')]
    const idOfTaskOne = result.current.tasks[1].id;

    act(() => {
      result.current.deleteTask(idOfTaskOne);
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].description).toBe('Task two');

    now.mockRestore();
  });

  it('only toggles the targeted task', () => {
    const now = jest.spyOn(Date, 'now');
    now.mockReturnValueOnce(1000).mockReturnValueOnce(2000);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Task one');
    });
    act(() => {
      result.current.addTask('Task two');
    });

    // tasks are prepended: [Task two (id:'2000'), Task one (id:'1000')]
    const idOfTaskOne = result.current.tasks[1].id;

    act(() => {
      result.current.toggleTask(idOfTaskOne);
    });

    expect(result.current.tasks[1].completed).toBe(true);
    expect(result.current.tasks[0].completed).toBe(false);

    now.mockRestore();
  });
});
