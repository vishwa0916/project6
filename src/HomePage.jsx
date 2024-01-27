import { faNoteSticky, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TasksPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyContext } from './App';


function HomePage(props) {






    const [inptxt, setInptxt] = useState('')

    const [inptxt2, setInptxt2] = useState('')

    const { NoteValue, SetNoteValue, TaskValue, SetTaskValue } = useContext(MyContext);

    ////////////////////////////////////////


    const handleChange = (e) => {


        setInptxt(e.target.value);



    }

    const handleChange2 = (e) => {


        setInptxt2(e.target.value);



    }

    ///////////////////////////////////////




    const handleClick = () => {


        SetNoteValue(() => {


            let data = {
                id: uuidv4(),
                content1: inptxt,
                content2: inptxt2

            }

            console.log(NoteValue)
            console.log(data);
            return [...NoteValue, (data)]

        });

        setInptxt('')
        setInptxt2('')

    }

    ////////////////////////////////////

    const handleDelete = (id) => {
        

        SetNoteValue(() => {

            const AfterDelete = NoteValue.filter((obj) => obj.id !== id)

            return AfterDelete;

        })
    }

    const [taskText, setTaskText] = useState('');
    const [taskTitle, setTaskTitle] = useState('');




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




        <div className=' addnoteboxmain container-fluid mt-5'>

            <h1 className='mt-3 welcometxt'>Arunkumar Notes</h1>


            <div className='addnotebox container-fluid '>

                <div className='display-container mt-5'>
                    <h1 className='mynotes'> <FontAwesomeIcon icon={faNoteSticky} /> My Notes</h1>

                    {NoteValue.length > 0 ? (
                        <div className="card-container horizontal-card-list mt-1">
                            {NoteValue.map((BoxVal) => (
                                <div key={BoxVal.id} className="card">
                                    <div className="card-body">
                                        <h1 className='addnotetxt'> {BoxVal.content1}</h1>
                                        <div className='card-content'>
                                            <p className='addnotetxt'>  {BoxVal.content2}</p>

                                            <button className="deletebtn" onClick={() => {handleDelete(BoxVal.id) }}>
                                                <FontAwesomeIcon icon={faTrashCan} />   </button></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>No notes added</div>
                    )}
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








        </div>

    );
}

export default HomePage;