import React,{useState,useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {listVideos} from './graphql/queries'
import {Switch,Route} from 'react-router-dom';
import Authentication from './Authentication'
import LandinPage from './components/LandinPage'
import './App.css';
import Categorie from './components/Categorie';



function App() {
  const [media,setMedia] =useState([])
  const  fetchVideos = async() =>{
    try {
      const videoData = await API.graphql(graphqlOperation(listVideos))
      const videoList = videoData.data.listVideos.items
      console.log('videos list', videoList)
     setMedia(videoList)
    } catch (error) {
      console.log('error',error)
    }
    }
 useEffect(()=>{
  fetchVideos()
 },[])
  return (
    <div className="App">
     <Switch>
     <Route exact path="/">
         <LandinPage/>
       </Route>
       <Route exact path="/home">
         <Authentication/>
       </Route>
       <Route exact path="/categorie">
          <Categorie/>
       </Route>
       
     </Switch>
    </div>
  );
}

export default App;
