import { describe, it, beforeEach, vi, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ModifyTaskForm } from "../components/ModifyTaskForm";

describe("Test suite: ModifyTaskForm component", () => {
  let isModifyingTask;
  let setIsModifyingTask;
  let setTaskToModify;
  let taskToModify;
  let setActiveTasks;
  let setCompletedTasks;
  let isActiveTasksViewMode;

  beforeEach(() => {
    isModifyingTask = true;
    setIsModifyingTask = vi.fn();
    taskToModify = {
      name: "Learn gsap",
      date: "2023-09-01",
      startTime: "10:00",
      description: "Learn gsap for animations",
    };
    setTaskToModify = vi.fn((update) => {
      taskToModify = update(taskToModify);
    });
    setActiveTasks = vi.fn();
    setCompletedTasks = vi.fn();
    isActiveTasksViewMode = vi.fn();

    render(
      <ModifyTaskForm
        isModifyingTask={isModifyingTask}
        setIsModifyingTask={setIsModifyingTask}
        setTaskToModify={setTaskToModify}
        taskToModify={taskToModify}
        setActiveTasks={setActiveTasks}
        isActiveTasksViewMode={isActiveTasksViewMode}
        setCompletedTasks={setCompletedTasks}
      />,
    );
  });

  it("contains task to modify data in the input fields", () => {
    const taskNameInput = screen.getByPlaceholderText("Task name");
    const taskDateInput = screen.getByPlaceholderText("Task Date");
    const taskTimeInput = screen.getByPlaceholderText("Task Time");
    const taskDescriptionInput =
      screen.getByPlaceholderText("Task description");

    expect(taskNameInput.value).toBe("Learn gsap");
    expect(taskDateInput.value).toBe("2023-09-01");
    expect(taskTimeInput.value).toBe("10:00");
    expect(taskDescriptionInput.value).toBe("Learn gsap for animations");
  });

  it("updates taskToModify state when input fields are changed", () => {
    const taskNameInput = screen.getByPlaceholderText("Task name");
    const taskDateInput = screen.getByPlaceholderText("Task Date");

    fireEvent.change(taskNameInput, { target: { value: "Learn React" } });
    fireEvent.change(taskDateInput, { target: { value: "2023-09-02" } });

    expect(taskToModify.name).toBe("Learn React");
    expect(taskToModify.date).toBe("2023-09-02");
    expect(setTaskToModify).toHaveBeenCalled();
    expect(taskToModify.startTime).toBe("10:00");
    expect(taskToModify.description).toBe("Learn gsap for animations");
  });
});
