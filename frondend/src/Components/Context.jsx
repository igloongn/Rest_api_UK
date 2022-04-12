import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const MainContext = createContext()
export { MainContext }



// localStorage.clear()

const ContextProvider = ({ children }) => {

    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const [accessToken, setaccessToken] = useState('')
    const [RefreshToken, setRefreshToken] = useState('')
    const [user, setuser] = useState(
        localStorage.getItem('username') ? localStorage.getItem('username') : null
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = new FormData(event.currentTarget);

        let url = 'http://localhost:1234/api/token/'
        const Email =  e.target.email.value
        const Password =  e.target.password.value
        const params = {
            email:Email,
            password: Password
        }
        axios.post(url, params)
            .then(res => {
                let status = res.status
                let data = res.data
                if (status <= 399) {
                    // alert('Success')
                    setaccessToken(data.access)
                    setRefreshToken(data.refresh)
                    setemail(e.target.email.value)
                    setpassword(e.target.password.value)
                    // console.log(data.access);
                    // console.log(data.refresh);
                    var decoded = jwt_decode(data.access);
                    setuser(decoded)
                    console.log(decoded)
                    localStorage.setItem('token_type', decoded.token_type)
                    localStorage.setItem('user_id', decoded.user_id)
                    localStorage.setItem('username', decoded.username)

                } else if (status >= 400) {
                    alert('failed')
                }
            })
            .catch(err => {
                // alert('Catch Failed')
            })
    };

    const passContext = {
        // Variables
        user: user,
        RefreshToken: RefreshToken,
        accessToken: user,
        email:email,
        password:password,

        // Function
        handleSubmitLogin:handleSubmit,
    }
    return (
        <MainContext.Provider value={passContext}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider
