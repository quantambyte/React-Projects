import React, { useState } from 'react'

// sass file
import './_categoriesbar.scss'


// keywords
const keywords =[
    'All',
    'React JS',
    'AngularJS',
    'React Native',
    'Redux',
    'Firebase',
    'Clone',
    'Football',
    'Cricket',
    'Music',
    'Coding',
    'Javascript',
    'React JS',
    'AngularJS',
    'React Native',
    'Redux',
    'Firebase',
    'Clone',
    'Football',
    'Cricket',
    'Music',
    'Coding',
    'Javascript',
]

function CategoriesBar() {

    const [activeElement, setActiveElement] = useState('All')

    const handleClick = value =>{
        setActiveElement(value)
    }

    return (
        <div className= "CategoriesBar">
            {keywords.map((value , i) => <span 
            key={i}
            onClick= {() => handleClick(value)}
            className = {activeElement === value ? "active" :""}
            >{value}</span>)}
        </div>
    )
}

export default CategoriesBar