import React from 'react';


const Card = ({id, email, name, username}) => {

    return (
        <div className='col-md-2' > 
            <div className='card mx-2 my-3'> 
                <img alt={username} className='card-img' src={`https://robohash.org/${id}?200x200`}/>
                    <h2 className='card-header text-center'>{name}</h2>
                <div className='card-body text-center'>
                    <p className='card-text'>{email}</p>
                </div>
            </div>
        </div>
    );
}


export default Card;