import React,{useState} from "react";
import "./App.css";
import data from './data';
import Tours from './components/Tours';
// here imoprting the files which we make or use
function App() {

  const [tours,setTours]=useState(data);
  // a constant
  // tours remover
  function removeTour(id){
    const newTours =tours.filter(tour=>tour.id !== id);
    // a constant newTour which is filter through tour id from data
    setTours(newTours);
  }
  // not interested button 
  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
      // here is a button that on clickting refresh data using the onclick handler
    )
  }

  return (
    <div className="App">
      
      <Tours tours={tours}removeTour={removeTour}></Tours>
   
   
   
    </div> 
  );
}

export default App;
