import React from 'react'

function Navigation(props) {
    return (
        <React.Fragment>
            <div className="bg-black-90 w-100 h-20 pa3">
                <nav class="f6 fw6 ttu tracked">
                    <p class="link dim white dib mr3 pointer">About</p>
                    <p class="link dim white dib mr3 pointer">DevLogs</p>
                    <p class="link dim white dib pointer mr3">Profile</p>
                    <p class="link dim white dib mr3 pointer" onClick = {props.onSignOut}>Sign Out</p>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navigation
