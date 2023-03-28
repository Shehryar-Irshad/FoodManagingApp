

import "./style.css";

const RecipeItem = (props) =>{

    const {id,image,title, addToFavourites} = props;

    console.log(props, 'recipe-item-props')
    return(
        <div key={id} className="recipe-item">
           <div>
               <img src={image} alt="image of recipe" />
           </div>
           <p>{title}</p>
           <button type="button" onClick={addToFavourites}>Add to favourites</button>
        </div>
    )
}
export default  RecipeItem
