import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { useEffect } from 'react'
import './App.css'
import AppDropdown from './Dropdown.js'
import AppOverview from './Overview'


{/*
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
]	*/}

export default function App() {
	const [prezzi, setPrezzi]=React.useState([])
	async function initPrezzi() {
		try{
			const r = await fetch('http://localhost:4000/csv');
			const j = await r.json();
			console.log(j)
			setPrezzi(j)
		} catch (err){
				console.error(err)
		}
	}
	React.useEffect(() => {
		initPrezzi() ;
	}, [])
	const[pagesize, setpagesize]= React.useState(3)
	const OnSelectDD = (o) => { 
		let currentindex= (currentpage-1)*pagesize
		setpagesize(o)
		setCurrentpage(Math.floor((currentindex/o)+1))
	}
	const[currentpage, setCurrentpage]= React.useState(1)
	const OnSelectOV = (x) => {
		if(x===-1){
			setCurrentpage(currentpage-1)
		} else {
			setCurrentpage(currentpage+1)
		}
	}

//inserire use state di currentpage (fatto) , pagesize usestate dipendente da dropdown (pagesize) , invece numero totali di pagine = divisione (n.elementi di prezzi/pagesize)
  return (
    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section text-uppercase font-weight-bold">Prezzi carburante</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="table-wrap">
						<table className="table">
					    <thead className="thead-primary bg-primary">
					      <tr className='text-white'>
					        <th>Data Rilevazione</th>
					        <th> Benzina </th>
					        <th> Gasolio </th>
					        <th> Gpl </th>
					    
					      </tr>
					    </thead>
					    <tbody >
							 {prezzi.slice((currentpage-1)*pagesize , (currentpage*pagesize)).map((p , index) =>  { 
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
					<AppDropdown onSelect={OnSelectDD} />
					<AppOverview onChange={OnSelectOV} pages={prezzi.length/pagesize} currentpage={currentpage} pagesize={pagesize}/>    {/* passo i dati d/a overview*/}
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}