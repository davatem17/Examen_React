import React, {useState} from 'react'
import Axios from 'axios';

const Item = ({ tareas }) => {
    const [completo, setCompleto] = useState(0)
    const [incompleto, setIncompleto] = useState(0)
    const postDelet = (id) => {
       
        Axios.delete(`https://bp-todolist.herokuapp.com/${id}`)
        .then(res => console.log('Borrar')).catch(err=>console.log(err))
    }
    return (
        <>
            <ul className="list-group list-group-horizontal-xxl">
                {tareas.map(tar => <li className="list-group-item" key={tar.id}>
                    <div className="form-check" >
                        <input  className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        {tar.description}&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary"
                    onClick={()=>postDelet(tar.id)}
                    >Eliminar</button>
                    </div>
                    
                </li>)}
            </ul>
            <div>
                
            </div>
        </>
    )
}

export default Item