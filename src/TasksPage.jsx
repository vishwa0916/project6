import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TasksPage.css';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyContext } from './App';

function TasksPage() {
    const [taskText, setTaskText] = useState('');
    const [taskTitle, setTaskTitle] = useState('');

    const { NoteValue, SetNoteValue, TaskValue, SetTaskValue } = useContext(MyContext);



    const handleTaskTextChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleAddTask = () => {
        if (taskText.trim() !== '' && taskTitle.trim() !== '') {
            const newTask = {
                id: uuidv4(),
                title: taskTitle,
                text: taskText,
                completed: false,
            };


            setTaskText('');
            setTaskTitle('');

            return SetTaskValue([...TaskValue, newTask]);

        }
    };

    const handleDeleteTask = (id) => {

        const AfterDelete = TaskValue.filter((obj) => id !== obj.id)

        SetTaskValue(AfterDelete);
    };

    return (
        <div className="Tasks container-fluid">

            <div className="mt-5  addnotebox container-fluid TasksPage  ">
                <div className="task-container">
                    <h1>Add a Task</h1>
                    <div className="input-container d-flex flex-column">
                        <input className='taskinp'
                            type="text"
                            placeholder="Task Title"
                            value={taskTitle}
                            onChange={handleTaskTitleChange}
                        />
                        <input className='taskinp'
                            type="text"
                            placeholder="Task Description"
                            value={taskText}
                            onChange={handleTaskTextChange}
                        />
                        <button className='taskbtn mt-3' onClick={handleAddTask}>Add</button>
                    </div>
                </div>



            </div>



            <h1 className='mt-5 mynotes'>My Tasks</h1>

            <div className="TasksList container-fluid mt-5 py-3">

                {TaskValue.length > 0 ? (
                    TaskValue.map((task) => (
                        <div key={task.id} className="mt-4 task-item">
                            <div
                                className={`task-checkbox  ${task.completed ? 'checked' : ''}`}
                                onClick={() => {
                                }}
                            ></div>
                            <div className="task-content">
                                <h3>{task.title}</h3>
                                <p>{task.text}</p>
                            </div>
                            <div
                                className="delete-button "
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />

                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-tasks-message ">No tasks added</div>
                )}










            </div>
        </div>
    );
}

export default TasksPage;
