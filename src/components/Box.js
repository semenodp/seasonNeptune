import React from 'react';

export default (props) => {
    return (
        <div className="blog-item">
            <img className='blog-item-img' src={require(`../images/${props.img}`)} alt=""/>
            <div className={props.font}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
