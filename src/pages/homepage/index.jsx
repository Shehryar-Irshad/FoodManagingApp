import { useState } from "react"
import RecipeItem from "../../components/recipe-item";
import Search from "../../components/search"
import "./style.css";


const Homepage = () =>{
    //loading State
    const [loadingState, setloadingState] = useState();
    //save results that we receive from api
    const [recipes, setRecipies] = useState([true]);

    //favourites data state
    const [favourites, setfavourites] = useState([]);

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

    const addToFavourites = (getCurrentRecipeItem) =>{
          let cpyFavourites = [...favourites];

          const index = cpyFavourites.findIndex(item=> item.id === getCurrentRecipeItem.id)
          console.log(index);
          if(index== -1) { 
            cpyFavourites.push(getCurrentRecipeItem);
            setfavourites(cpyFavourites)
            //save the favourites in local storage
            localStorage.setItem('favourites', JSON.stringify(cpyFavourites))
          } 
          else{
               alert('Item is already present in favourites');
          }
    }
    console.log(favourites);
    return(
        <div className="homepage">
            <Search  getDataFromSearchComponent= {getDataFromSearchComponent}/>
        
        {/* show loading state */}
         {
            loadingState &&  <div className="loading">Loading recipes ! Please wait</div>
         }
         {/* show loading state */}
         {/* map through all the recipes */}
            <div className="items">
            {
                recipes && recipes.length > 0 ?
                recipes.map((item =>
                    <RecipeItem 
                        addToFavourites={()=>addToFavourites(item)}
                        id={item.id} 
                        image={item.image}
                        item={item}
                        title={item.title}/>
                )) : null
            }
            </div>
         </div>
    );
};
export default Homepage