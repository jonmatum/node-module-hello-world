import React from 'react'

const Button = ({type, text, loading}) => (
    <button type={type}>
        { loading ? (
            <span>Loading...</span>
        ): (
            <span>{text}</span>
        )}
    </button>
    
)

export default Button
