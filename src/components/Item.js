import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


function Item({image}){
    return(
        <div className="gallery__item">
            <img src={"http://localhost/advanced-rest-api/"+image.route} className="gallery__img" alt={image.name}></img>
            <Link to={"/image/"+image.image_id}>
                <h2 className="gallery__title">{image.name}</h2>
            </Link>
        </div>
    );

};

export default Item;