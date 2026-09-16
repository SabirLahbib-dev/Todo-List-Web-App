import { render, screen } from "@testing-library/react";
import { describe, beforeEach, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Switcher } from "../components/Switcher";

describe("Test suite: Switcher component", () => {
  let setIsActiveTasksViewMode;
  let user;

  beforeEach(() => {
    setIsActiveTasksViewMode = vi.fn();
    user = userEvent.setup();
  });

  it("calls setIsActiveTasksViewMode with true when clicking Active Tasks button", async () => {
    render(
      <Switcher
        isActiveTasksViewMode={false}
        setIsActiveTasksViewMode={setIsActiveTasksViewMode}
      />,
    );

    const activeViewModeButton = screen.getByTestId(
      "active-tasks-switch-button",
    );
    await user.click(activeViewModeButton);

    // Assert callback was called with true (or functional update)
    expect(setIsActiveTasksViewMode).toHaveBeenCalledWith(true);
  });

  it("calls setIsActiveTasksViewMode with false when clicking Completed Tasks button", async () => {
    render(
      <Switcher
        isActiveTasksViewMode={true}
        setIsActiveTasksViewMode={setIsActiveTasksViewMode}
      />,
    );

    const completedViewModeButton = screen.getByTestId(
      "completed-tasks-switch-button",
    );
    await user.click(completedViewModeButton);

    // Assert callback was called with false (or functional update)
    expect(setIsActiveTasksViewMode).toHaveBeenCalledWith(false);
  });
});
