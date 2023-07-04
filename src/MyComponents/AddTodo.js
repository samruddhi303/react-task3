import React, { useState } from 'react'

export default function AddTodo( props) {
    const[title ,setTitle] = useState("");
    const[desc, setDesc] =useState("");

    const submit = (e) =>{
      e.preventDefault();
      if(!title || !desc)
      {
        alert("title and description needed !!")
      }
      props.addTodo(title,desc)
    }
  return (
    <div className='container my-3'>
        <h4>Add Todos</h4>
      <form>
  <div class="mb-3">
    <label for="title" class="form-label">Add title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="exampleInputtext" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Add your title here.</div>
  </div>
  <div class="mb-3">
    <label for="title-desc" class="form-label">description</label>
    <input type="description" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-sm  btn-success" onClick={submit}>Submit</button>
</form>
    </div>
  )
}

