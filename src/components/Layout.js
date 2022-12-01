import React, {useEffect, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Item from './Item';
import Axios from 'axios';

const Layout = () => {
    const [tareas, setTareas] = useState([])
    useEffect(() => {
      Axios.get('https://bp-todolist.herokuapp.com/?id_author=24')
      .then(res => setTareas(res.data.data)).catch(err => console.log(err))
    
    }, [tareas])
    
    return (
        <>
            <div className='container border border-dark' >
                <h1 style={{ textAlign: "center" }}>TODO LIST</h1>
                <div className='container' style={{ textAlign: "center" }}>
                    <div className='row' >
                        <div className='col-6' >
                            <input style={{width: '400px'}}/>
                        </div>
                        <div className='col-6' >
                            <button type="button" className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className='container' style={{ textAlign: "center" }}>
                    <Item tareas={tareas} />
                </div>
            </div>
        </>
    )
}

export default Layout