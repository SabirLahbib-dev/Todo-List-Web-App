import { describe, it, beforeEach, vi, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Task } from "../components/Task";
import { screen, render } from "@testing-library/react";

describe("Test suite: Task component", () => {
  let task;
  let BCcolors;
  let taskIndex;
  let activeTasks;
  let isActiveTasksViewMode;
  let setActiveTasks;
  let setCompletedTasks;
  let completedTasks;
  let setIsModifyingTask;
  let setTaskToModify;

  let user;
  beforeEach(() => {
    task = {
      id: crypto.randomUUID(),
      name: "Learn Gsap",
      date: "09-14-2026",
      startTime: "10:00",
      description: "Learn gsap for animations",
      isCompleted: false,
    };
    activeTasks = [task];
    BCcolors = "";
    taskIndex = "";

    setActiveTasks = vi.fn();
    setCompletedTasks = vi.fn();
    completedTasks = [];
    isActiveTasksViewMode = true;
    setIsModifyingTask = vi.fn();
    setTaskToModify = vi.fn();

    user = userEvent.setup();
  });

  it("completes task and add it to completed tasks", async () => {
    render(
      <Task
        task={task}
        setActiveTasks={setActiveTasks}
        activeTasks={activeTasks}
        isActiveTasksViewMode={isActiveTasksViewMode}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
        taskIndex={taskIndex}
        BCcolors={BCcolors}
        key={task.id}
        setIsModifyingTask={setIsModifyingTask}
        setTaskToModify={setTaskToModify}
      />,
    );

    const taskCheckBox = screen.getByTestId("task-checkbox");
    expect(taskCheckBox).toBeInTheDocument();
    await user.click(taskCheckBox);

    // Extract updater function passed to setCompletedTasks
    const completedUpdater = setCompletedTasks.mock.calls[0][0];
    expect(completedUpdater([])).toEqual([{ ...task, isCompleted: true }]);

    // Extract updater function passed to setActiveTasks
    const activeUpdater = setActiveTasks.mock.calls[0][0];
    expect(activeUpdater([task])).toEqual([]);

    expect(setActiveTasks).toHaveBeenCalledTimes(1);
    expect(setCompletedTasks).toHaveBeenCalledTimes(1);
  });

  it("Reopens a completed task", async () => {
    render(
      <Task
        task={task}
        setActiveTasks={setActiveTasks}
        activeTasks={[]}
        isActiveTasksViewMode={false}
        setCompletedTasks={setCompletedTasks}
        completedTasks={[task]}
        taskIndex={taskIndex}
        BCcolors={BCcolors}
        key={task.id}
        setIsModifyingTask={setIsModifyingTask}
        setTaskToModify={setTaskToModify}
      />,
    );

    const taskCheckBox = screen.getByTestId("task-checkbox");
    expect(taskCheckBox).toBeInTheDocument();
    await user.click(taskCheckBox);

    const activeUpdater = setActiveTasks.mock.calls[0][0];
    expect(activeUpdater([])).toEqual([{ ...task, isCompleted: false }]);

    const completedUpdater = setCompletedTasks.mock.calls[0][0];
    expect(completedUpdater([])).toEqual([]);

    expect(setActiveTasks).toHaveBeenCalledTimes(1);
    expect(setCompletedTasks).toHaveBeenCalledTimes(1);
  });

  it("deletes a task", async () => {
    render(
      <Task
        task={task}
        setActiveTasks={setActiveTasks}
        activeTasks={[task]}
        isActiveTasksViewMode={true}
        setCompletedTasks={setCompletedTasks}
        completedTasks={[]}
        taskIndex={taskIndex}
        BCcolors={BCcolors}
        key={task.id}
        setIsModifyingTask={setIsModifyingTask}
        setTaskToModify={setTaskToModify}
      />,
    );

    const deleteTaskButton = screen.getByTestId("delete-task-button");
    expect(deleteTaskButton).toBeInTheDocument();
    await user.click(deleteTaskButton);

    const activeUpdater = setActiveTasks.mock.calls[0][0];
    expect(activeUpdater([task])).toEqual([]);
    expect(setActiveTasks).toHaveBeenCalledTimes(1);
    expect(setCompletedTasks).toHaveBeenCalledTimes(0);
  });
});
