import '../styles/Cart.css'
import { FaTimes } from 'react-icons/fa';

function Cart ({notes, handleDeleteNote, displayNote, updatedisplayNote}){
    const notesTriees = notes.sort((a,b) => a.number - b.number);
    
    return(
        <div className="cart">
            <div className="cart-header">
                <h1>Notes</h1>


            </div>
            <div className='cart-notes'>
                {notesTriees.map((note) => (
                   <div key = {note.id} className={`cart-note ${note.id === displayNote && "active"}`} onClick ={() => updatedisplayNote(note.id)}>
                        <div className="cart-title">
                            <strong>{note.number}</strong>
                            <FaTimes 
                                className='delete'
                                onClick= {() => handleDeleteNote(note.id)}
                            />
                        </div>
                        <p>{note.text + "..."}</p>

                        <small className="note-meta">
                            Ajouté le {new Date(note.datedajout).toLocaleDateString()}
                        </small>

                    </div>
                
                ))}
                
               
                

            </div>





        </div>
    )
}
export default Cart;