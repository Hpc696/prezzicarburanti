import React from "react"
import { Next } from "react-bootstrap/esm/PageItem"
import { Prev } from "react-bootstrap/esm/PageItem"
import './App.css'
export default function AppOverview(props){
    let pages= props.pages; 
    let pagesize= props.pagesize;
    let currentpage= props.currentpage; 
    let prevclass= currentpage===1 ? 'disabled' : '' ;
    function prevPage(){ //dico a funz prevpage di richiamare funzione nel caso (if)-1 nell app.js 
        if(currentpage>1) //evito click su bottone previous quando non ho pagine prima da vedere rispetto alla corrente 
        props.onChange(-1)
    }

    
    
    return(
        <nav aria-label="Page navigation example" className="d-flex-inline">
            <ul className="pagination justify-content-end">
                <li onClick={() => prevPage()} className={prevclass + " page-item"}><a className="page-link" /*href="#"*/>Previous</a></li>
                <li className="page-item">{currentpage}</li>
                <li onClick={() => props.onChange(1)} className={( currentpage===pages ? 'disabled ' : '' ) + "page-item"}><a className="page-link" /*href="#"*/>Next</a></li>
            </ul> {/*evitare click anche su bottone next quando non ho piu pagine dopo da vedere*/}
        </nav>
    
    )
}

