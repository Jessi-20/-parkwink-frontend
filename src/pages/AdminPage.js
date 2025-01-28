import React, {useState,useEffect} from 'react';
const CarList= () =>{
const [cars, setCars] = useState([]);
useEffect(() => {
    fetch("http://localhost:3001/cars")
    .then((response) => response.json())
    .then((data) => setCars(data))
    .catch((error) => console.error("Errore:", error));
}, []);
return (
    <div>
    <h1>Lista di macchine</h1>
    <ul>
    {cars.map((car) => (
    <li key={car.id}>{car.marca} {car.modello} {car.targa}</li>
    
    ))}
    </ul>
    </div>
    );
};
export default CarList;