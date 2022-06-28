import React from 'react'
import logo from '../../assets/logo.svg'
import './login.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Login = () => {
// interface Formtype{
//   email:string,
//   password:string
// }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log(e.target.check.value)
  }

  return (
    <div className="login">
      <div className="container-fluid px-0">
      <div className="row gx-0">
        <div className="col-sm-12 col-md-6 col-lg-6">
{/* form */}
<div className="form-section">
<div className="form-header py-4 text-center">
<img className="logo" src={logo} alt="logo" />
<h3>Login</h3>
<span>Welcome back! Please enter your details</span>
  </div>
<Form
onSubmit={handleSubmit}
className="form-body"
>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
        name="email"
        placeholder="Enter email" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        name="password"
        placeholder="Password" />
      </Form.Group>
      <div className="d-flex justify-content-between">
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        name="check"
        type="checkbox" label="Remember me" />
      </Form.Group>
      <Link className="btn-link" to="/forgot-password">Forgot Password</Link>
      </div>
      
      <div className="d-grid gap-2">
      <Button type="submit" variant="danger" size="sm">
        Sign in
      </Button>
     </div>
    </Form>
{/* end form */}
</div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="d-none d-md-block d-lg-block background bg-danger">
       
          </div>

       </div>
        </div>
      </div> 
     
        {/* <div className="form">
hello
        </div>
        <div className="image">
        <img src={background} alt="skybackground" className="background-image"/>
        </div> */}
    </div>
   
  )
}

export default Login