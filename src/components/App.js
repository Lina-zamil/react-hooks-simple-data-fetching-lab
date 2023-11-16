// create your App component here
import React,{useState,useEffect} from "react";

function App(){
const[isLoaded,setIsLoaded]=useState(false);
const[dogImage,setDogImage]=useState([]);
const[error,setError]=useState(null);

useEffect(()=>{
fetch('https://dog.ceo/api/breeds/image/random')
.then(res=>res.json())
.then(data=>{
 setIsLoaded(true)
 setDogImage(data.message)
 },
 (error)=>{
    setIsLoaded(true)
    setError(error)
 }
 )},[])
if(error){
    return ("An error has occured :",error)
}
else if(isLoaded)
return <img src={dogImage} alt="A Random Dog"/>
else
return <p>Loading...</p>
}
export default App;