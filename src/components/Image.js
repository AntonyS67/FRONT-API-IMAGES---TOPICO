import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function Image(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    let {imageId} = useParams();

    const url = "http://localhost/advanced-rest-api/api/v1/image/"+imageId;
    const url_delete = "http://localhost/advanced-rest-api/api/v1/image/"+imageId;

    const peticionGet = () => {
        axios.get(url)
        .then(response =>{
            console.log(response.data);
            setData(response.data.image);
            setLoading(false);
        })
    };

    const peticionDelete = () => {
        axios.delete(url_delete)
        .then(response =>{
            if(response.data.success === true){
                window.location.href = '/';
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    useEffect(()=>{
        peticionGet();
    },[]);

    if (loading) return <div>Obteniendo información...</div>;

    return(
        <div className="container gallery__image__container mt-5">
            <div className="gallery__image__item">
                <img src={"http://localhost/advanced-rest-api/"+data.route} alt="" className=""></img>
            </div>
            <div className="gallery__image__description px-5 py-5">
                <h2 className="text-center p-2"><strong>{data.name}</strong></h2>
                <p className="text-justify">{data.description}</p>
                {/* <p className="text-left"><strong>Subido Por:</strong> {data.user}</p> */}
                <p className="text-left"><strong>Fecha: </strong>{data.date}</p>
                <p className="text-left"><strong>Extensión: </strong>{data.extension}</p>
                <Link to={"/image/update/"+data.image_id}>
                    <button className="btn btn-warning mr-2" id="btn-download">Editar</button>
                </Link>
                <button className="btn btn-danger" id="btn-download" onClick={peticionDelete}>Eliminar</button>
            </div>
        </div>
    )
}

export default Image;
