import React, { createContext, useState } from 'react';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faListCheck, faNoteSticky, faTrashCan, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes } from 'react-router-dom';
import NotesPage from './Components/NotesPage';
import TasksPage from './TasksPage';
import HomePage from './HomePage';
import SearchPage from './Components/SearchPage';

export const MyContext = createContext();


function App(props) {

    const [NoteValue, SetNoteValue] = useState([]);
    const [TaskValue, SetTaskValue] = useState([]);

    const [editmode, setEditmode] = useState(false);
    const [editedTitle, setEditedtitle] = useState('');
    const [editedContent, setEditedcontent] = useState('');
    const [editId, setEditid] = useState('');

    const [editNote, setEditnote] = useState([]);

    const [SearchList, setSearchList] = useState([]);


















    return (
<>
        <div className=' mainbox contaiiner-fluid ' >
            <div className='row submainbox'>

                <div className="col-3 sidebox  ">

                    <nav className='sidebarm  p-2  mlg' >
                        <div className='my-5 li  con user'>
                            <span className="my-5   fs-1    brand-name ">

                                <FontAwesomeIcon icon={faUser} className='mx-3'/>

                                Arunkumar </span>


                        </div>

                        <hr className="text dark " />


                        <div className="lsit-group list-group-flush lg ">
                            <div className="list1 ">  <Link to="/" className=" fs-4  list-group-item  py2">


                                <AiFillHome />          <span className='` d-none mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Home"}</span></Link>

                                <Link to='/SearchPage' className="mt-5 fs-4   list-group-item  py2">
                                    <AiOutlineSearch />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Search"}</span></Link>


                                <Link to="/NotesPage" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faNoteSticky} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-i nline' >{"Notes"}</span></Link>


                                <Link to="/TasksPage" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faListCheck} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{`Tasks`}</span></Link>

                                <a href="/" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faBoxArchive} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Archive"}</span></a>

                                <a href="/" className="mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faTrashCan} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Bin"}</span></a>

                            </div>








                        </div>
                    </nav>



                </div>





                <div className='container-fluid notesmainbox  col-9 '>


                    <MyContext.Provider value={{ NoteValue, SetNoteValue, TaskValue, SetTaskValue, editId, setEditid, editmode, setEditmode, editedTitle, setEditedtitle, editedContent, setEditedcontent, editNote, setEditnote,SearchList, setSearchList }}>
                        <Routes>



                            <Route path='/NotesPage' element={<NotesPage />} />
                            <Route path='/SearchPage' element={<SearchPage />} />
                            <Route path='/TasksPage' element={<TasksPage />} />
                            <Route path='/' element={<HomePage />} />

                        </Routes>

                    </MyContext.Provider>

                </div>
            </div>




        </div>
    
        </>
            );
}

export default App;