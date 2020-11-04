import React from 'react'
import { useStateValue } from './StateProvider';

function Login(props) {
    const [state, dispatch] = useStateValue();

    const loginToApp = () => {
        dispatch({
            type: 'SET_USER',
            user: 'Tiokeng',
        })
    }

    return (
        <div>
            <h1>I am Login component</h1>
            <button onClick={loginToApp}>LOGIN</button>
        </div>
    )
}

export default Login
