import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

import FormInput from "../FormInput/FormInput"
import Button from "../Button/Button"
import './SignUpForm.scss'


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!password === confirmPassword) {
      alert('password do not match!')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()

    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot crate user, email already in use')
      } else {
        console.log(err)
      }

    }
  }
  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email</span>
      <form onSubmit={ handleSubmit }>
        <FormInput label='Display name' type='text' name='displayName' value={ displayName } required onChange={ handleChange } />
        <FormInput label='Email' type='email' name='email' value={ email } required onChange={ handleChange } />
        <FormInput label='Password' type='password' name='password' value={ password } required onChange={ handleChange } />
        <FormInput label='Confirm Password' type='password' name='confirmPassword' value={ confirmPassword } required onChange={ handleChange } />
        <Button type="submit">Sign up</Button>
      </form>
    </div >
  )
}

export default SignUpForm
