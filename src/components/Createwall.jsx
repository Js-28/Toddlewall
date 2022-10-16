//eslint-disable-next-line 
import React,{ useState } from "react";

import HighlightIcon from "@material-ui/icons/Highlight";
import AddIcon from "@material-ui/icons/Add";
import Modal from 'react-modal';
import Createpost from './Createpost';

Modal.setAppElement('#root');
function Createwall(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [board, setBoard] = useState({
    name: "",
    color:"",

  });
  const [title,setTitle]=useState("");
  const [color,setColor]=useState("");

  let selectedcolor;
  function handleChange(event) {
    const { name, value } = event.target;
    setTitle(event.target.value);
  }

  function submitBoard(event) {
    event.preventDefault();
    // console.log(board);
    setBoard({
      name: title,
      color:color,
      posts:[]
    });
    props.addWall(board);
 
  }

  return (
    <div>
        
      <div>
      <button variant="outlined" className="btn btn-light" onClick={() => setModalIsOpen(true)}>
      <AddIcon className="add-button" />
        Create New {props.buttonType}
      </button>
      </div>
           <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '20%',
            left: '25%',
            right: '25%',
            bottom: '20%',
            width:'50%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
        
      >
          <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Add Name For Your Board</label><br></br>
      <input type="text" class="form-control boardname" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"
          onChange={handleChange}
          value={title}
          placeholder="Title"></input>
    </div><br></br>
    <div >
    <label for="color-palette">Select Post Colour</label><br></br>
      <input type="button"  onClick={()=> {setColor("#554994");}} id="color-palette" class="color-palette color1" />
      <input type="button"  class="color-palette color2" />
      <input type="button"  class="color-palette color3"/>
      <input type="button"  class="color-palette color4"/>
    </div><br></br>
      <button type="submit" class="btn btn-primary" onClick={submitBoard}>Submit</button>
      <button class="btn btn-primary modal-btn" onClick={() => setModalIsOpen(false)}>Close</button>
  </form>
        
      </Modal> 
      
    </div>


    );
}

export default Createwall;