import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';

import '../styles/NoteApp.css'





const NoteApp = ({handleAjoutNote}) => { 
    
    const [noteText, updateNoteText] = useState('');
    
    const handleChange = (e) => {
        updateNoteText(e.target.value);
            
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAjoutNote(noteText);
            updateNoteText('');
        }
    };
   
    const failToEdit = () => {
        alert("Je suis désolé Samir, j'ai echoué dans le développement de la fonctionnalité de modification d'une note!😞😞 ")
    }
   
    return (
        
            <div className='ajout-note'>
                <input 
                    type='text' 
                    
                    value={noteText.number}
                    onChange={handleChange}
                
                />
                <div className='note-button'>
                    <FaPlus className='add' onClick={handleSaveClick}/>
                    <GoGear className='edit' onClick ={failToEdit}/>
                    

                </div>
                <textarea 
                    rows="25" 
                    cols="80" 
                    placeholder='Tapez pour ajouter une note...'
                    className='body'
                    value={noteText.text}
                    onChange={handleChange}
                    
                />
                <div className='note-footer'>
                    <button className='save'>Save</button>
                </div>
                
            </div>
        
        );
        
}
export default NoteApp;