import React from 'react'

function Login(props) {

    const loginToApp = () => {
        props.setUser("Tiokeng");
    }

    return (
        <div>
            <h1>I am Login component</h1>
            <button onClick={loginToApp}>LOGIN</button>
        </div>
    )
}

export default Login
