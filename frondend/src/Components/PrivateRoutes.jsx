import { useContext } from 'react';
import {
    Route,
    Navigate,
    useNavigate,
    Redirect,
} from 'react-router-dom';
import { MainContext } from './Context';

function PrivateRoutes({ children }) {
    // const { user } = useContext(MainContext)
    // console.log(user)
    // console.log()
    const u = true
    return (
        <div>
            {!localStorage.getItem('username') ? <Navigate to='/login/You must log in to access the HomePage' /> : children}
            {/* {!user ? console.log('Private Route, Getout') : children} */}
        </div>
    )
}

export default PrivateRoutes
