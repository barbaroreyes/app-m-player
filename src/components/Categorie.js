import React from 'react'
import {Link} from 'react-router-dom';
import ReactPLayer from 'react-player';
const Categorie = (props) => {
  console.log(props)
  return (<div>
       <div>
           <Link to='/home'>Back</Link>
           
       </div>
    <div className="categoria">
      {props.data.map((item,i)=>{
        return(<div key={i}>
                <div className="categoria-box" >{item.title}</div>
                <div className="categoria-box">{item.owner}</div>
                <div className="categoria-box">{item.description}</div>
                <div className="categoria-box">{item.time}</div>
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
