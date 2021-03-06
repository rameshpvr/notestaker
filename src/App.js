import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./Components/NotesList"
import Search from './Components/Search';
import Header from './Components/Header';

const App = () => {

  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }  
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes]);

  const [ searchText, setSearchText ] = useState('');
  const [ darkMode, setdarkMode ] = useState(false);

  const addnote = (text) => {

    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const Footer = "footer";

  return(
    <div>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
          <Header handleDarkMode={setdarkMode}/>
          <Search handleSearchNote={setSearchText}/>
          <NotesList 
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
            handleAddNote={addnote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
      <Footer className="footer">
        <a href="https://github.com/rameshpvr" target="_blank" rel="noopener noreferrer">-By Ramesh <span><i class="fab fa-github fa-2x"></i></span></a>
      </Footer>
    </div>
  )
}

export default App;