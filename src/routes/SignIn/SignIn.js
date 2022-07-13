import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div className="signin-container">
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sing in with google </button>
    </div>
  )
}

export default SignIn