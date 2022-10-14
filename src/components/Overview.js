import React from "react"
import './App.css'
export default function AppOverview(props){
    const [page, setPage] = React.useState(1)
    function onPage(o){
        setPage(o)
        if(props.onSelect){props.onSelect(o)} //comunic. esterno
      }
    return( <>
        <nav aria-label="Page navigation example" className="d-flex-inline">
            <ul className="pagination justify-content-end">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </>
    )
}

