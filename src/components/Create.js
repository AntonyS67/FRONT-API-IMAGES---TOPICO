import React, {Component} from 'react';
import axios from 'axios';
import '../Login.css';

const url = "http://localhost/advanced-rest-api/api/v1/image";
class CreateImage extends Component{
    

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        form:{
            name:'',
            description:'',
        },
        image: ''
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
    }

    fileSelectedHandler = event =>{
        this.setState({
            image:event.target.files[0]
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const formData = new FormData();
        formData.append('name',this.state.form.name);
        formData.append('description',this.state.form.description);
        formData.append('image',this.state.image);

        axios.post(url,formData)
        .then(response=>{
            if(response.data.success === true){
                window.location.href = '/';
            }
            
        }).catch(err=>{
            console.log(err.message);
        })
    }
    
    render(){
        const {form} = this.state;
        return(
            <div id="container">
                <h1 className="my-3">Nueva Imagen</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" name="name" placeholder="Titulo" value={form.name} onChange={this.handleChange}></input>
                    <textarea required placeholder="Ingrese Descripcion" name="description" rows="5" value={form.description} onChange={this.handleChange}></textarea>
                    <input required type="file" name="image" onChange={this.fileSelectedHandler}></input>
                    <button type="submit">Crear</button>
                </form>
            </div>
        );
    }
}

export default CreateImage;