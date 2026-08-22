import "./TasksGrid.css";

export function TasksGrid() {
  return (
    <div className="tasks-list-grid">
      <div className="task-container">
        <div className="title-and-checkbox-container">
          <input type="checkbox" className="task-checkbox"></input>
          <div className="task-title">Team meating</div>
        </div>
        <div className="task-description">
          La description (du latin descriptio) est la présentation de lieux, de
          personnages ou d'événements dans un récit. En littérature, elle
          constitue une pause.
        </div>
        <div className="task-date">21st February, 2025</div>
        <div className="task-start-and-end-time">12:00pm - 18:00am</div>
      </div>
    </div>
  );
}
