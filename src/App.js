import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import CreateImage from './components/Create'
import Item from './components/Item';
import Image from './components/Image';
import NavBar from './components/NavBar';
import './App.css';
import UpdateImage from './components/Update';

const url = "http://localhost/advanced-rest-api/api/v1/images";

class App extends Component {

  state  = {
    data:[]
  }
  peticionGet = () => {
    axios.get(url)
    .then(response => {  
      this.setState({data: response.data.images});
    })
  }

  componentDidMount(){
    this.peticionGet();
  }

  render(){
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/image/create">
                <CreateImage />
            </Route>
            <Route exact path="/image/:imageId">
              <Image />
            </Route>
            <Route exact path="/image/update/:imageId">
              <UpdateImage />
            </Route>
            <Route exact path="/">
              <div className="gallery-container">
                {this.state.data.map(image =>(
                    <Item image={image} key={image.image_id}/>
                ))} 
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
