import { render, screen } from "@testing-library/react";
import { describe, beforeEach, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Test suite: App component", () => {
  let user;
  beforeEach(() => {
    localStorage.clear();
    user = userEvent.setup();
  });

  it("loads tasks from localStorage", () => {
    const initialTasks = [
      {
        id: "task-101",
        name: "Saved Task From LocalStorage",
        date: "2026-09-16",
        startTime: "14:00",
        description: "Testing persistence load",
        isCompleted: false,
      },
    ];

    localStorage.setItem("activeTasks", JSON.stringify(initialTasks));

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(initialTasks[0].name)).toBeInTheDocument();
  });

  it("saves tasks to localStorage", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const addNewTaskButton = screen.getByTestId("add-new-task-button");
    await user.click(addNewTaskButton);
    const nameInput = screen.getByPlaceholderText("Task Name");
    const dateInput = screen.getByPlaceholderText("Task date");
    const startTimeInput = screen.getByPlaceholderText("Task start time");
    const descriptionInput = screen.getByPlaceholderText("Description...");
    const addButton = screen.getByTestId("add-task-button");
    await user.type(nameInput, "Learn tailwind css");
    await user.type(dateInput, "2023-09-01");
    await user.type(startTimeInput, "10:00");
    await user.type(descriptionInput, "Learn tailwind css for fast styling");
    await user.click(addButton);

    const storedTasks = JSON.parse(localStorage.getItem("activeTasks"));
    expect(storedTasks).toHaveLength(1);
    expect(storedTasks[0].name).toBe("Learn tailwind css");
    expect(storedTasks[0].description).toBe(
      "Learn tailwind css for fast styling",
    );
  });
});
