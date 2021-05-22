import React , {useState} from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import sweet_alert from 'sweetalert'


function Login() {
    
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')

    function validate(e) {

        e.preventDefault()

        if( userName === 'uzii' && password === 'password' ) {
            sweet_alert('Login Successful' , 'Congratulation You are logged in' , 'success')
        }else{
            sweet_alert('Login Failure' , 'OOPS! wrong username or password' , 'error')
        }
    }

    return (
        <div>
            <div className="row justify-content-center">


            <div className="col col-sm-12 col-md-6 col-lg-4">

                <h1>User Authentication</h1>

                <form action="" onSubmit = {validate}>

                    <input type="text" placeholder="UserName" className="form-control" value = {userName} onChange={ (e) => {setUserName(e.target.value)}}/>

                    <input type="password" placeholder = "Password" className="form-control" value = {password} onChange={ (e) => {setPassword(e.target.value)}}/>

                    <input type="submit" className="btn btn-primary"/>

                </form>

            </div>

            </div>
        </div>
    )
}

export default Login
