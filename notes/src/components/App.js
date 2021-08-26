import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Cart from './Cart';
import NoteApp from './NoteApp';

import '../styles/App.css'


function App() {
      const[notes, updateNotes] = useState([]);
    
      const[displayNote, updatedisplayNote] = useState(false);
      useEffect(() => {
            const notesEnregistrees=JSON.parse(localStorage.getItem('notes data')
            );
            if(notesEnregistrees){
                  updateNotes(notesEnregistrees);
            }
      }, [])

      useEffect(() => {
            localStorage.setItem('notes data',JSON.stringify(notes)
            );

      }, [notes]);

      const handleAjoutNote = (text) => {
            const newNote = {
                  id : nanoid(),
                  number : [Math.floor(Math.random()*100)],
                  text : text,
                  datedajout : Date.now(),
            };
            const newNotes = [...notes, newNote];
            updateNotes(newNotes);

            
      };
      const handleUpdateNote = (noteActuelle) => {
            const notesActuellesTab = notes.map((note) => {
                  if(note.id === displayNote){
                        return noteActuelle;
                  }
                  
                  return note;
            });
            updateNotes(notesActuellesTab);
      };

      const handleDeleteNote = (id) => {
            const newNotes = notes.filter((note) => note.id !== id);
            updateNotes(newNotes);

      }
      const getdisplayedNote = () => {
            return notes.find((note) => note.id === displayNote);
      };
      
      



      return (
        <div className='container'>
            <Cart 
                notes={notes} 
                handleAjoutNote={handleAjoutNote}
                handleDeleteNote={handleDeleteNote}
                displayNote={displayNote}
                updatedisplayNote={updatedisplayNote}
                />
              
            
            <NoteApp 
                  handleAjoutNote={handleAjoutNote}
                  displayNote={getdisplayedNote()}
                  updatedisplayNote={updatedisplayNote}
                  handleUpdateNote={handleUpdateNote}
            
            />
              
                  

        </div>   
      );
}

export default App;
