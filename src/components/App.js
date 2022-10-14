import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import './App.css'
import AppDropdown from './Dropdown.js'
import AppOverview from './Overview'



export const prezzi = [ 	
	{ Data: 1, Benzina: 1 , Gasolio: 1 , Gpl: 1 },
	{ Data: 2, Benzina: 1.5 , Gasolio: 1.5 , Gpl: 1.5 },
	{ Data: 3, Benzina: 2 , Gasolio: 2 , Gpl: 2 },
	{ Data: 4, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 5, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 6, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 7, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 8, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 9, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 10, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 11, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 12, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 13, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 14, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 15, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 16, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 17, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 18, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 19, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
	{ Data: 20, Benzina: 1.7 , Gasolio: 1.7 , Gpl: 1.7 },
]	

export default function App() {
	const[start, setStart]= React.useState(3)
	const OnSelectDD = (o) => { 
		if(o===5){
			setStart(5)
			console.log(o)
		} else if(o===10){
			setStart(10)
			console.log(o)
			} else if(o===3){
				setStart(3)
				console.log(o)
				} 
	}
  return (
    <>
    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Prezzi carburante</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="table-wrap">
						<table className="table">
					    <thead className="thead-primary bg-primary">
					      <tr className='text-white'>
					        <th>Data Rilevazione</th>
					        <th>€ Benzina/l </th>
					        <th>€ Gasolio/l </th>
					        <th>€ Gpl/l </th>
					    
					      </tr>
					    </thead>
					    <tbody >
							 {prezzi.slice(0 , start).map((p , index) =>  { 
								return(
								 <tr key={index}>
								 <th scope="row" className="scope" >{p.Data}</th>
								 <td>{ p.Benzina }</td>
								 <td>{ p.Gasolio }</td>
								 <td>{ p.Gpl }</td>
								 </tr>
								 )
							})}
						
					    </tbody>
					  </table>
					<AppDropdown onSelect={OnSelectDD}/>
					<AppOverview />
					</div>
				</div>
			</div>
		</div>
	</section>

</>
  );
}
		  /*<div className='d-flex justify-content-end'><select>
              <option value='prime2'>Mostra le prime 2 righe</option>
              <option value='prime4'>Mostra le prime 4 righe</option>
              <option value='prime6'>Mostra le prime 6 righe</option>
            </select> </div>*/