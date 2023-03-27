import { useState } from "react"
import Search from "../../components/search"



const Homepage = () =>{
    //loading State
    const [loadingState, setloadingState] = useState();
    //save results that we receive from api
    const [recipes, setRecipies] = useState([true]);

    //keep the loading state as true before we're calling api
    // setloadingState(true);
    const getDataFromSearchComponent =(getData)=>{

    //calling the api
    async function getRecipies(){
        const apiResponse  = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=47d05b786dc2434790545de5bb2e5ef1&query=${getData}`);
        const result = await apiResponse.json();
        const {results} = result;
        //set loaading state as false again
        // set the recipies state
        setloadingState(false);   
        setRecipies(results);
        console.log(results);
    }
    getRecipies(loadingState, recipes, 'loadingState, recipes');
    };

    return(
        <div className="homepage">
            <Search  getDataFromSearchComponent= {getDataFromSearchComponent}/>
        </div>
    )
}
export default Homepage