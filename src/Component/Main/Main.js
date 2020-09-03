import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Main.css'
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';


const Main = () => {
    const first5 = fakeData.slice(0,15);
    const [courses, setCourses] = useState(first5);
    const [cart, setCart] = useState([]);


    const handleAddCourse = (courses) => {
        console.log('Course add', courses);
        const newCart = [...cart, courses];
        setCart(newCart);
    }

    
  

    return (
        <div className = 'main-container'>
            <div className="course-container">           
                {
                    courses.map(course => 
                    <Courses 
                        handleAddCourse = {handleAddCourse}
                        course={course}
                        >
                        </Courses>)
                }           
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;