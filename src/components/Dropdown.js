import React from 'react'
import {prezzi} from './App.js'
export default function AppDropdown(){
    const options= [
        3 , 5, 10
    ]
    const defaultoption = [3]
    const [visible, setVisible] = React.useState(0)
    
    if(visible===5){
      console.log('click on first li item')
      //setIndex(5) 
      const prezzisl= prezzi.slice(0, 5) 
    }
    if(visible===10){
      console.log('click on second li item')
      //setIndex(10)  
      const prezzisl= prezzi.slice(0, 10) 
    }
    return( <>
        
        <div className="dropdown">
        <p className='d-inline'>Mostra </p>
        <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          {defaultoption}
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li onClick={() => setVisible(5)}><a className="dropdown-item" href="#">5</a></li>
          <li onClick={() => setVisible(10)}><a className="dropdown-item" href="#">10</a></li>
          
        </ul>
        <p className='d-inline'> righe per pagina</p>
      </div>
      
    </>
    )


}