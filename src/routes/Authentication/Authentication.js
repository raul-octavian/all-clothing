
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignInForm from '../../components/SignInForm/SignInForm'
import './Authentication.scss'

const Authentication = () => {

  /* log in user with google redirect, get redirect result and auth must be used
  ------------------------------------
  const getResponse = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = createUserDocumentFromAuth(response.user)
      console.log(userDocRef)
    }
  }
  */

  // useEffect(() => {

  //   // getResponse() get info for user from redirect
  // }, [])


  return (


    <div className="auth-container">
      {/* <button onClick={signInWithGoogleRedirect}>Sing in with google redirect </button> */ }
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
