import React,{useState,useEffect} from 'react';
import { API, graphqlOperation,Storage } from 'aws-amplify';
import {listVideos} from './graphql/queries'
import {Switch,Route} from 'react-router-dom';
import Authentication from './Authentication'
import LandinPage from './components/LandinPage'
import './App.css';
import Categorie from './components/Categorie';



function App() {
  const [media,setMedia] =useState([])
  const [mediaUrl,setMediaUrl] = useState('')
  useEffect(()=>{
    fetchVideos()
   },[])

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
    // const videoFile= media[id].filePath;
    // try {
    //   const fileAcc = await Storage.get(videoFile,{expires:60})
    //   setMediaUrl(fileAcc)
    // } catch (error) {
    //   console.log('error ftch url',error)
    // }



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
          <Categorie data={media}/>
       </Route>
       
     </Switch>
    </div>
  );
}

export default App;
