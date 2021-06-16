import React from 'react'
import {Link} from 'react-router-dom';
import ReactPLayer from 'react-player';
const Categorie = (props) => {
  console.log(props)
  return (<div>
       <div>
           <Link to='/'>Back</Link>
           
       </div>
    <div className="categoria">
      {props.data.map((item,i)=>{
        return(<div className="new grow shadow-5" key={i}>
                <div className="categoria-box" >Category :  {item.title}</div>
                <div className="categoria-box">owner :   {item.owner}</div>
                <div className="categoria-box">description  :{item.description}</div>
                <div className="categoria-box">Time  :  {item.time}</div>
                <div className="categoria-big-boz" >
                   <ReactPLayer
                   controls
                   url={item.filePath}
                   />
                </div>

        </div>)
      })}
        
     
    </div>
    </div>
  )
}

export default Categorie
