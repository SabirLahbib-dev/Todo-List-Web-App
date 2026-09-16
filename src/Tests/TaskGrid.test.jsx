import { render, screen } from "@testing-library/react";
import { describe, beforeEach, it, vi, expect } from "vitest";
import { TasksGrid } from "../components/TasksGrid";
import dayjs from "dayjs";
import { act } from "react";

describe("Test suite: Task Grid component", () => {
  let activeTasks;
  let setActiveTasks;
  let setCompletedTasks;
  let completedTasks;
  let isActiveTasksViewMode;
  let setIsModifyingTask;
  let setTaskToModify;

  beforeEach(() => {
    activeTasks = [
      {
        id: crypto.randomUUID(),
        name: "Learn Gsap",
        date: "09-14-2026",
        startTime: "10:00",
        description: "Learn gsap for animations",
        isCompleted: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Learn React",
        date: "10-14-2026",
        startTime: "10:00",
        description: "Learn React for frontend",
        isCompleted: false,
      },
    ];

    setActiveTasks = vi.fn();
    setCompletedTasks = vi.fn();
    completedTasks = [];
    isActiveTasksViewMode = true;
    setIsModifyingTask = vi.fn();
    setTaskToModify = vi.fn();
  });

  it("filters and displays tasks by search keywrods typed by the user", () => {
    render(
      <TasksGrid
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
        isActiveTasksViewMode={isActiveTasksViewMode}
        searchTerm={"gsap"}
        selectedDate={""}
        setIsModifyingTask={setIsModifyingTask}
        setTaskToModify={setTaskToModify}
      />,
    );

    // check that only the first task which have gsap keyword is rendered
    expect(screen.getByText(activeTasks[0].name)).toBeInTheDocument();
    expect(screen.getByText(activeTasks[0].startTime)).toBeInTheDocument();
    expect(screen.getByText(activeTasks[0].description)).toBeInTheDocument();

    // check that the second task which does not have gsap keyword is not rendered
    expect(screen.queryByText(activeTasks[1].name)).not.toBeInTheDocument();
    expect(
      screen.queryByText(activeTasks[1].description),
    ).not.toBeInTheDocument();
  });

  it("filteres and displays tasks by date selected by the user", () => {
    render(
      <TasksGrid
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        setCompletedTasks={setCompletedTasks}
        completedTasks={completedTasks}
        isActiveTasksViewMode={isActiveTasksViewMode}
        searchTerm={""}
        selectedDate={"10-14-2026"}
        setIsModifyingTask={setIsModifyingTask}
        setTaskToModify={setTaskToModify}
      />,
    );

    // check that only the second task which have property date resembles to the date selected is rendered
    expect(
      screen.getByText(dayjs(activeTasks[1].date).format("DD, MMMM YYYY")),
    ).toBeInTheDocument();
    expect(screen.getByText(activeTasks[1].name)).toBeInTheDocument();
    expect(screen.getByText(activeTasks[1].description)).toBeInTheDocument();

    // check that the first task which doesn not have date property resembles to date selected is not rendered
    expect(screen.queryByText(activeTasks[0].name)).not.toBeInTheDocument();
    expect(
      screen.queryByText(activeTasks[0].description),
    ).not.toBeInTheDocument();
  });
});
