import React from 'react'
import RotateRightIcon from '@material-ui/icons/RotateRight';
import './Loading.css'

function Loading() {
    return (
        <div className = 'loading'>
            <RotateRightIcon className = 'circle'/>
            <p className = 'f4 tc text'>Loading feed...</p>
        </div>
    )
}

export default Loading
