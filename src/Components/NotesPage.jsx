import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky, faPenClip, faTrash } from '@fortawesome/free-solid-svg-icons'; // Updated icons
import { MyContext } from '../App';
import { v4 as uuidv4 } from 'uuid';

function NotesPage(props) {
    const {
        NoteValue,
        SetNoteValue,
        editId,
        setEditid,
        editmode,
        setEditmode,
        editedTitle,
        setEditedtitle,
        editedContent,
        setEditedcontent,
    } = useContext(MyContext);

    const DispBoxVal = NoteValue;

    const handleChange = (e) => {
        setEditedtitle(e.target.value);
    };

    const handleChange2 = (e) => {
        setEditedcontent(e.target.value);
    };

    const handleClick = () => {
        if (editmode) {
            SetNoteValue((prevNotes) =>
                prevNotes.map((note) =>
                    note.id === editId
                        ? {
                            ...note,
                            content1: editedTitle,
                            content2: editedContent,
                        }
                        : note
                )
            );
            setEditmode(false);
            setEditid('');
            setEditedtitle('');
            setEditedcontent('');
        } else {
            const data = {
                id: uuidv4(),
                content1: editedTitle,
                content2: editedContent,
            };
            SetNoteValue((prevNotes) => [...prevNotes, data]);
            setEditedtitle('');
            setEditedcontent('');
        }
    };

    const handleEdit = (id) => {
        const selectedNote = DispBoxVal.find((note) => note.id === id);
        if (selectedNote) {
            setEditmode(true);
            setEditid(id);
            setEditedtitle(selectedNote.content1);
            setEditedcontent(selectedNote.content2);
        }
    };

    const handleDelete = (id) => {
        SetNoteValue((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    return (
        <div className="addnoteboxmain container-fluid mt-5">
            <div className="addnotebox container-fluid">
                <h1>Add a Note</h1>
                <input
                    className="addnotetxtbox"
                    type="text"
                    placeholder="Title"
                    value={editedTitle}
                    onChange={handleChange}
                />
                <textarea
                    rows={4}
                    className="addnotetxtbox2 mt-2"
                    type="text"
                    placeholder="Take a note..."
                    value={editedContent}
                    onChange={handleChange2}
                />
                <div className="timeclickbox">
                    <button className="addclick mt-3" onClick={handleClick}>
                        {editmode ? 'Save' : 'Add'}
                    </button>
                    <button className="remtime mt-5 mb-2">Today, 10:10 AM</button>
                </div>
            </div>
            <div className="display-container mt-5">
                <h1 className="mynotes">
                    <FontAwesomeIcon icon={faNoteSticky} /> My Notes
                </h1>
                {DispBoxVal.length > 0 ? (
                    <div className="card-container horizontal-card-list mt-1">
                        {DispBoxVal.map((BoxVal) => (
                            <div key={BoxVal.id} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        {editmode && editId === BoxVal.id ? (
                                            <>
                                                <input
                                                    type="text"
                                                    className="addnotetxt"
                                                    value={editedTitle}
                                                    onChange={handleChange}
                                                />
                                                <div className="btnicons">
                                                    <button
                                                        type="button"
                                                        className="btn btn-success btn-sm mx-2"
                                                        onClick={handleClick}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-warning mx-2"
                                                        onClick={() => {
                                                            setEditmode(false);
                                                            setEditid('');
                                                            setEditedtitle('');
                                                            setEditedcontent('');
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <h4 className="addnotetxt">{BoxVal.content1}</h4>
                                                <div className="btnicons d-flex flex-column">
                                                    <button
                                                        className="btn btn-sm btn-primary mx-2"
                                                        onClick={() => handleEdit(BoxVal.id)}
                                                    >
                                                        <FontAwesomeIcon icon={faPenClip} /> 
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger mx-2"
                                                        onClick={() => handleDelete(BoxVal.id)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />                                                     </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="card-content">
                                        {editmode && editId === BoxVal.id ? (
                                            <textarea
                                                rows={4}
                                                className="addnotetxt"
                                                value={editedContent}
                                                onChange={handleChange2}
                                            />
                                        ) : (
                                            <p className="addnotetxt">{BoxVal.content2}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No notes added</div>
                )}
            </div>
        </div>
    );
}

export default NotesPage;
