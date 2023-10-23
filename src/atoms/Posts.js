import React from 'react'

export const Posts = ({ title, body }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>{body}</div>
        </div>
    )
}
