import React from 'react';

const Category = (props) => {
    console.log(props);
    return (
        <div>
            <h3> {props.cat.key}</h3>
            <img src={props.cat.img} alt="" />
        </div>
    );
};

export default Category;