import Data from '../Data'
import '../card/card.css';
import Card from '../card/Card';
import './displaydata.css'
import { useState } from 'react';


const Displaydata = () => {
    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(true);
    }
  return (
    <div>
        {
            <Data/> && Data.map(({id,name,notif,messageContent,dateStamp,userImg,messageImg,content,chess}) => {
                return (
                    <>
                        <div key={id}>
                        <Card className='container' >
                                <div className='displaymessage'>
                                    <div> <img src={userImg} alt='userImage' /></div>
                                     <div className='userContent'>
                                        <div className='message' onClick={handleClick}>
                                            <span>
                                            <span className='username'>{name}</span>  
                                             <span className='content'>{notif} </span>
                                                <span><a href='#' className='notifys'>{content}</a></span> 
                                                <span><a href='#' className='chess'>{chess}</a></span> 
                                                
                                            </span> 
                                        </div>  
                                        <div className='date'>
                                            <p >{dateStamp} </p>
                                           
                                        </div>
                                     </div>
                                     <div>
                                     {messageImg && <img src = {messageImg} alt='messageImage' />}
                                     </div>
                                </div>  

                              
                                
                            </Card>
                            
                            {/* message to display when click */}
                            { show ?  <Card className='container1'>
                                <p>{messageContent} </p>
                            </Card> : null}
                            
                        </div>

                    </>

                )
            })
        }
    </div>
  )
}

export default Displaydata