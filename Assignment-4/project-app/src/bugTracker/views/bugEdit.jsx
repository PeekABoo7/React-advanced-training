import { useState } from 'react';

const BugEdit = ({ addNew , projects}) => {
  const [newBugName, setNewBugName] = useState("");
  const [project,setProjectvalue] = useState("");
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={evt => setNewBugName(evt.target.value)} /> 
      <label htmlFor="">Project :</label>
      <select name="" id="" value = {project} onChange={(e) => setProjectvalue(e.target.value)}>
      <option key={-1} value={''}></option>
        { projects.map(project => (<option key={project.id} value={project.name}>{project.name}</option>))
        }
    </select>
      <input type="button" value="Add New" onClick={() => addNew(newBugName,project)} />
    </section>
  );
};

export default BugEdit;