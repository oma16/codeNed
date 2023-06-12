import Data from '../Data'
import '../card/card.css';
import Card from '../card/Card';
import './displaydata.css'
import { useState } from 'react';
import oval8 from '../../assets/images/oval8.svg'


const Displaydata = () => {
    const [show, setShow] = useState(null);
    const [display, setDisplay] = useState(false);
    const [notify, setNotify] = useState(Data)


    function markRead (){
        setNotify((data) => data.map( n => ({...n, isRead: true})))
        console.log(notify)
    }
   
    function clickCard(id) {
        console.log(id)
        setNotify((datas) => datas.map( data => (data.id === id ? {...data, isRead:  true} : data)) )
        setShow(id);
        setDisplay(!display);
      }

  return (
    <div className='main'>
        <>
            {/* style the span to be in front of the h1 and space the button to fit in th right space at the top of the card */}
            <div className='notifications'>
                <div className='notifyicon' >
                    <span className='head'>Notification</span>
                    <span className='icon'>{notify.filter((da) => (da.isRead !== true)).length}</span>
                </div>

                <button onClick={markRead} className='mark-all'>Mark all as read</button>
            </div>
        </>

        {notify.map(({id,name,notif,messageContent,dateStamp,userImg,messageImg,content,chess,isRead}) => {
                return (
                    
                        <div key={id}  >
                        <Card className={ (isRead === true) ? "bgwhite" : "container"} id={id}  handleClick={()=> (clickCard(id))} >
                                <div className='displaymessage'>
                                    <div> <img src={userImg} alt='userImage' /></div>
                                     <div className='userContent'>
                                        <div className='message' >
                                            <span>
                                            <span className='username'>{name}</span>  
                                             <span className='content'>{notif} </span>
                                                <span><a href='#' className='notifys'>{content}</a></span> 
                                                <span><a href='#' className='chess'>{chess}</a></span> 
                                                <span className={ (isRead !== true) ? "dot" : "dotnone"}>{ <img src={oval8} alt="dot" />}</span>
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
                        {show === id && display && (<Card className='container1' id={id}>
                                <p>{messageContent} </p>
                            </Card>)}
                            
                        </div>
              
                    

                )
            })
        }
    </div>
  )
}

export default Displaydata