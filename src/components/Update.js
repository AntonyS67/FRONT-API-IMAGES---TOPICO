import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../Login.css';
import { useParams } from 'react-router-dom';

function UpdateImage(){
    const [loading,setLoading] = useState(true);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState([]);

    let {imageId} = useParams();

    const url = "http://localhost/advanced-rest-api/api/v1/image/"+imageId;

    const peticionGet = () => {
        axios.get(url)
        .then(response =>{
            setName(response.data.image.name);
            setDescription(response.data.image.description);
            setLoading(false);
        })
    };

    useEffect(()=>{
        peticionGet();
    },[]);

    const fileSelectedHandler = event =>{
        setImage(event.target.files[0]);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        const formData = new FormData();
        formData.append('name',name);
        formData.append('description',description);
        formData.append('image',image);

        axios.post(url,formData)
        .then(response=>{
            if(response.data.success === true){
                window.location.href = '/';
            }
        }).catch(err=>{
            console.log(err.message);
        })
    }
    if (loading) return <div>Obteniendo información...</div>;

    return(
        <div id="container">
            <h1 className="my-3">Actualizar Imagen</h1>
            <form onSubmit={handleSubmit}>
                <input required type="text" name="name" placeholder="Titulo" value={name} onChange={e=>setName(e.target.value)}></input>
                <textarea required placeholder="Ingrese Descripcion" name="description" rows="5" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                <input type="file" name="image" onChange={fileSelectedHandler}></input>
                <button type="submit">Actualizar</button>
            </form>
        </div>

    )
}


export default UpdateImage;