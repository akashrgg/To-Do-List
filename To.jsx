import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const To = () => {
    const [places, setPlaces]= useState([
        {id:1, checked:true, place: "London"},
        {id:2, checked:false, place: "France"},
        {id:3, checked:true, place: "New York"}
      
      ]);
      
  const onHandle =(id)=>{
    const array = places.map((place)=>
     place.id === id? {...place ,checked :!place.checked}:
     place
    )

       setPlaces(array);

}
  //delete button
  const Change =(id)=>{
    const listarray = places.filter((places)=>
    places.id!==id)
  
    setPlaces(listarray);
  }
// add the list use usestste;
const [newPlaces, setNewPlaces] = useState("")
// for list

const addplaces = async(place)=>{
const id = places.length ? places[places.length-1].id+1 :1;
const newlist  ={ id , checked:false, place }
const addnewlist = [...places, newlist];
setPlaces(addnewlist);

// function for input box and enter or submit button

const handlesubmit = (e) =>{
    e.preventDefault()
    if(!newPlaces) return
    console.log(newPlaces)
    addplaces(newPlaces)
    setNewPlaces("") 
  }   
    return(
          
         
        <main >
        <form className = "item" onSubmit={handlesubmit} >
          <div id = "po">
        <h2 id="large">Add List</h2></div>
          <label >
            <h4>Enter the List</h4>
            <input type="text"
            autoFocus
            id = "add"
            placeholder="add items"
            required
            value={newPlaces}
            onChange={(e)=>setNewPlaces(e.target.value)}
            ></input>
            
          </label>
          <button type="submit" id = "design">ADD</button>
        </form>
        
          
          {(places.length)?(
  
         
      
       
        <ul>
          {places.map((places) =>(
             <li className='place' key= {places.id}>
                  <input type='checkbox' checked = {places.checked}
                  onChange={()=>onHandle(places.id)}></input>
  
                  <label>{places.place}</label>
                  <button onClick={()=>Change(places.id)} id ="design2">del</button>
             </li>
            
            
            ))
          
          }
        </ul>
  
          ):(<p> Your is list empty</p>)
      }
  
       </main>
  
          
           
    );
};
 

export default To;