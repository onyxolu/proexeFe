import React, { Component } from "react";
import { Button } from "reactstrap";
import s from "./DragAndDrop.module.scss";

const COMPLETED = "COMPLETED";
const TODOS = "TODOS";

class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          taskID: 1,
          task: "Walk the walk",
        },
        {
          taskID: 2,
          task: "Talk the talk",
        },
        {
          taskID: 3,
          task: "Jump the jump",
        },
      ],
      completedTasks: [
        {
          taskID: 4,
          task: "Test the test!",
        },
      ],
      draggedTask: {},
    };
  }

  componentDidMount() {
    const { allItems, selectedItems } = this.props;
    console.log(allItems, selectedItems);
    this.setTasks(allItems, selectedItems);
  }

  setTasks = (allItems, selectedItems) => {
    const todos = [];
    const completedTasks = [];
    let completedTaskIds = [];
    selectedItems.map((item) => {
      completedTasks.push({
        taskID: item.id,
        task: item.name,
      });
      completedTaskIds.push(item.id);
    });

    allItems.map((item) => {
      if (!completedTaskIds.includes(item.id)) {
        todos.push({
          taskID: item.id,
          task: item.name,
        });
      }
    });

    this.setState({
      todos: todos,
      completedTasks: completedTasks,
    });
  };

  dragStartTodo = (event) => {
    document.getElementById(event.target.id).classList.add("on-drag");
  };

  // Reset the draggable item format back to normal
  dragEndTodo = (event) => {
    document.getElementById(event.target.id).classList.remove("on-drag");
  };

  onDragTodo = (event, todo) => {
    event.preventDefault();
    this.setState({
      draggedTask: todo,
    });
  };

  onDragOverTodo = (event) => {
    event.preventDefault();
  };

  // When dropping a completed todo back to todo list
  onDropTodo = (event) => {
    const { completedTasks, draggedTask, todos } = this.state;

    // Ignore if task is dropped in the same box
    var found = todos.filter((todo) => todo.taskID === draggedTask.taskID);
    if (found.length > 0) {
      return;
    }

    this.setState({
      todos: [...todos, draggedTask],
      completedTasks: completedTasks.filter(
        (task) => task.taskID !== draggedTask.taskID
      ),
      draggedTask: {},
    });
  };

  onDragCompleted = (event, todo) => {
    event.preventDefault();
    this.setState({
      draggedTask: todo,
    });
  };

  onDragOverCompleted = (event) => {
    event.preventDefault();
  };

  // When dropping a todo to completed
  onDropCompleted = (event) => {
    const { completedTasks, draggedTask, todos } = this.state;

    // Ignore if task is dropped in the same box
    var found = completedTasks.filter(
      (task) => task.taskID === draggedTask.taskID
    );

    if (found.length > 0) {
      return;
    }

    this.setState({
      completedTasks: [...completedTasks, draggedTask],
      todos: todos.filter((task) => task.taskID !== draggedTask.taskID),
      draggedTask: {},
    });
    console.log(this.state.todos);
    console.log(this.state.completedTasks);
  };

  onSubmit = () => {
    const { completedTasks } = this.state;
    const data = [];

    completedTasks.map((task) => {
      data.push(task.taskID);
    });
    this.props.onSubmit(data);
  };

  // Save the todos and completed on each rendering/update
  componentDidUpdate() {}

  render() {
    const { todos, completedTasks } = this.state;
    const { isLoading } = this.props;

    return (
      <>
        <div className={s.DragApp}>
          <div
            className={s.todos}
            onDrop={(event) => this.onDropTodo(event)}
            onDragOver={(event) => this.onDragOverTodo(event)}
          >
            <div className={s.header}>Available Permissions</div>
            <div className={s.items}>
              {todos.map((todo) => (
                <div
                  className={s.item}
                  id={todo.taskID}
                  key={todo.taskID}
                  draggable
                  onDragStart={(e) => this.dragStartTodo(e)}
                  onDragEnd={(e) => this.dragEndTodo(e)}
                  onDrag={(event) => this.onDragTodo(event, todo)}
                >
                  {todo.task}
                </div>
              ))}
            </div>
          </div>
          <div
            onDrop={(event) => this.onDropCompleted(event)}
            onDragOver={(event) => this.onDragOverCompleted(event)}
            className={s.done}
          >
            <div className={s.header}>Assigned Permissions</div>
            <div className={s.items}>
              {completedTasks.map((task, index) => (
                <div
                  className={s.item}
                  key={task.taskID}
                  id={task.taskID}
                  draggable
                  onDragStart={(e) => this.dragStartTodo(e)}
                  onDragEnd={(e) => this.dragEndTodo(e)}
                  onDrag={(event) => this.onDragCompleted(event, task)}
                >
                  {task.task}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-widget-transparent" style={{ marginTop: "30px" }}>
          <Button
            color="danger"
            onClick={this.onSubmit}
            className="btn-rounded float-right"
          >
            Validate & Submit
            {isLoading ? <i className="fa fa-spinner fa-spin" /> : ""}
          </Button>
        </div>
      </>
    );
  }
}

export default DragAndDrop;
