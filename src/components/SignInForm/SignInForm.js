import { useState } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"

import FormInput from "../FormInput/FormInput"
import Button from "../Button/Button"
import './SignInForm.scss'


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!password || !email) {
      alert('password and email must be provided')
      return
    }

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)

      resetFormFields()
    } catch (err) {

      if (err.code === 'auth/wrong-password') {
        alert('Wrong password')
      } else if (err.code === 'auth/user-not-found ') {
        alert(`No user associated with this email: ${email} `)
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
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>
        <FormInput label='Email' type='email' name='email' value={ email } required onChange={ handleChange } />
        <FormInput label='Password' type='password' name='password' value={ password } required onChange={ handleChange } />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button onClick={ signInWithGoogle } type='button' buttonType='google'>Google sign in </Button>
        </div>

      </form>
    </div >
  )
}

export default SignInForm
