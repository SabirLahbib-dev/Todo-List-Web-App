import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AddNewTaskForm } from "../components/AddNewTaskForm";

describe("Test suite: AddNewTaskForm", () => {
  let user;
  let setIsAddingNewTask;
  let setActiveTasks;

  beforeEach(() => {
    setIsAddingNewTask = vi.fn();
    setActiveTasks = vi.fn();

    user = userEvent.setup();

    render(
      <AddNewTaskForm
        isAddingNewTask={true}
        setIsAddingNewTask={setIsAddingNewTask}
        setActiveTasks={setActiveTasks}
      />,
    );
  });

  it("cancels adding a new task", async () => {
    const cancelButton = screen.getByTestId("cancel-adding-button");
    await user.click(cancelButton);
    expect(cancelButton).toBeInTheDocument();
    expect(setIsAddingNewTask).toHaveBeenCalledWith(false);
    expect(setActiveTasks).not.toHaveBeenCalled();
    expect(setActiveTasks).toHaveBeenCalledTimes(0);
  });

  it("does not add a new task when the form is submitted with empty fields", async () => {
    const nameInput = screen.getByPlaceholderText("Task Name");
    const dateInput = screen.getByPlaceholderText("Task date");
    const addButton = screen.getByTestId("add-task-button");

    await user.type(nameInput, "Learn testing");
    await user.type(dateInput, "2023-07-01");
    await user.click(addButton);
    expect(setActiveTasks).not.toHaveBeenCalled();
    expect(setIsAddingNewTask).toHaveBeenCalledTimes(0);
  });

  it("adds a new task when the form is submitted with valid fields", async () => {
    const nameInput = screen.getByPlaceholderText("Task Name");
    const dateInput = screen.getByPlaceholderText("Task date");
    const startTimeInput = screen.getByPlaceholderText("Task start time");
    const descriptionInput = screen.getByPlaceholderText("Description...");
    const addButton = screen.getByTestId("add-task-button");
    await user.type(nameInput, "Learn gsap");
    await user.type(dateInput, "2023-09-01");
    await user.type(startTimeInput, "10:00");
    await user.type(descriptionInput, "Learn gsap for animations");
    await user.click(addButton);
    const updaterfn = setActiveTasks.mock.calls[0][0];
    const updatedData = updaterfn([]);

    expect(setActiveTasks).toHaveBeenCalledTimes(1);
    expect(setIsAddingNewTask).toHaveBeenCalledWith(false);
    expect(updatedData).toEqual([
      expect.objectContaining({
        name: "Learn gsap",
        date: "2023-09-01",
        startTime: "10:00",
        description: "Learn gsap for animations",
      }),
    ]);
  });
});
