import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Courses = (props) => {
    // console.log(props);
    const {img, name, price} = props.course;
    return (
        <div className="image-element">
            <div>
                <img src={img}alt=""/>
            </div>
            <div className = "course-element">
                <h2>Course : {name}</h2>
                <p><b>Price:</b> ${price}</p>
                <br/>
                <br/>
                <button 
                onClick = {() =>props.handleAddCourse(props.course)}
                className = "btn-purchase"><FontAwesomeIcon icon={faShoppingCart}/> Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;