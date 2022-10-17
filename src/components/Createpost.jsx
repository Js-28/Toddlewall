//eslint-disable-next-line 
import React,{ useState } from "react";

// import HighlightIcon from "@material-ui/icons/Highlight";
import AddIcon from "@material-ui/icons/Add";
import Modal from 'react-modal';


Modal.setAppElement('#root');
function Createpost(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [post, setPost] = useState({
    name: "",
    img:"",
    content:""

  });
  const [title,setTitle]=useState("");
  // const [image,setImg]=useState("");
  const [cont,setCont]=useState("");

  // let selectedcolor;
  function handleChange(event) {
    
    setTitle(event.target.value);
  }
  //  function handleImg(event) {
  //   const { name, value } = event.target;
  //   setImg(event.target.value);
  // }
  function handleCont(event) {
    // const { name, value } = event.target;
    setCont(event.target.value);
  }

  function submitBoard(event) {
    event.preventDefault();
    console.log(post);
    setPost({
      name: title,
      content:cont
    });
    props.addWall(post);
    
    
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
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Add Name For Your Board</label><br></br>
      <input type="text" className="form-control boardname" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"
          onChange={handleChange}
          value={title}
          placeholder="Title"></input>
    </div><br></br>
    {/*<div >
    <label htmlFor="color-palette">Select Image</label><br></br>
      <input type="file"  onClick={handleImg} id="color-palette" className="form-control boardname" />
    </div><br></br>*/}
    <div>
    <label htmlFor="color-palette">What's On Your Mind</label><br></br>
      <input type="text"  onClick={handleCont} id="content" className="form-control boardname" placeholder="Content" />
    </div><br></br>
      <button type="submit" className="btn btn-primary" onClick={submitBoard}>Submit</button>
      <button className="btn btn-primary modal-btn" onClick={() => setModalIsOpen(false)}>Close</button>
  </form>
        
      </Modal>
      
    </div>
    


    );
}

export default Createpost;