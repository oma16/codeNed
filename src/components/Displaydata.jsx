import Data from './Data'

const Displaydata = () => {
  return (
    <div>
        {
            <Data/> && Data.map(({id,name,notif,messageContent,dateStamp,userImg,messageImg}) => {
                return (
                    <>
                        <div key={id}>
                            <div>
                                <img src={userImg} alt='user Image' />
                                <h1>{name}</h1> 
                                <h4>{notif}</h4>                            
                                <p>{dateStamp} </p>
                                {messageImg && <img src = {messageImg} alt='message Image' />}
                            </div>
                            
                            {/* message to display when click */}
                            <div>
                                <p>{messageContent} </p>
                            </div>
                        </div>

                    </>

                )
            })
        }
    </div>
  )
}

export default Displaydata