import React from 'react'
// CSS
import './work.css'
// Img
import img from '../../assets/img3.jpg'
// Link
import { NavLink } from 'react-router-dom'

const Work = () => {
    const data = [
        {
            id: 1,
            img: img,
            title: 'Ecommerce Website Design',
            text: 'Thriving Facebook community and top-ranked podcast, Amy inspires a grounded, tangible and self-affirming sense of "Wow! I really can do this" for over 100,000 online entrepreneurs. Best-selling marketing courses',
            view: 'https://youtu.be/SbwLnQOGH5s',
        },
        {
            id: 2,
            img: img,
            title: 'Ecommerce Website Design',
            text: 'Thriving Facebook community and top-ranked podcast, Amy inspires a grounded, tangible and self-affirming sense of "Wow! I really can do this" for over 100,000 online entrepreneurs. Best-selling marketing courses',
            view: 'https://youtu.be/SbwLnQOGH5s',
        },
        {
            id: 3,
            img: img,
            title: 'Ecommerce Website Design',
            text: 'Thriving Facebook community and top-ranked podcast, Amy inspires a grounded, tangible and self-affirming sense of "Wow! I really can do this" for over 100,000 online entrepreneurs. Best-selling marketing courses',
            view: 'https://youtu.be/SbwLnQOGH5s',
        },
        {
            id: 4,
            img: img,
            title: 'Ecommerce Website Design',
            text: 'Thriving Facebook community and top-ranked podcast, Amy inspires a grounded, tangible and self-affirming sense of "Wow! I really can do this" for over 100,000 online entrepreneurs. Best-selling marketing courses',
            view: 'https://youtu.be/SbwLnQOGH5s',
        },
        {
            id: 5,
            img: img,
            title: 'Ecommerce Website Design',
            text: 'Thriving Facebook community and top-ranked podcast, Amy inspires a grounded, tangible and self-affirming sense of "Wow! I really can do this" for over 100,000 online entrepreneurs. Best-selling marketing courses',
            view: 'https://youtu.be/SbwLnQOGH5s',
        },

    ]
    return (
        <div className='work_container'>
            <h1 className='project_heading'>Projects</h1>
            <div className="project_container">
                {
                    data.map(item => (
                        <div className="project_card" key={item.id}>
                            <img src={item.img} alt="img" />
                            <h2 className='project_title'>{item.title}</h2>
                            <div className="pro_details">
                                <p>{item.text}</p>
                                <div className="pro_btns">
                                    <NavLink to={item.view} className='btn'>View</NavLink>
                                    <NavLink to='url.com' className='btn'>Sorce</NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Work