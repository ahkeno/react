import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals(){
    const [loadedMeal, setLoadedMeals] = useState([])
    useEffect(()=>{
        async function fetchMeals(){
            
            const respond = await fetch('http://localhost:3000/meals');
            if(!respond.ok){
                // Show error
            }
            
            const meals = await respond.json();
            setLoadedMeals(meals);
        }
        fetchMeals();
        
    },[])
    
    
   
    return(
        <ul id="meals">
            {loadedMeal.map((meal)=>(
                 <MealItem key={meal.id} meal={meal}/>
            ))}
           
        </ul>
    )
}