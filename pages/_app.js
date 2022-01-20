import 'tailwindcss/tailwind.css'
import '../configureAmplify'
import { useState, useEffect } from 'react'
import { Auth, Hub, I18n } from 'aws-amplify'
import TopNav from '../src/components/template/TopNav'
import Header from '../src/components/template/Header'
import Footer from '../src/components/template/Footer'
import { translations} from '@aws-amplify/ui';

function MyApp({ Component, pageProps }) {
  const [signedInUser, setSignedInUser] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    authListener()
  })
  async function authListener() {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          return setSignedInUser(true)
        case 'signOut':
          return setSignedInUser(false)
      }
    })
    try {
      await Auth.currentAuthenticatedUser()
      setSignedInUser(true)
    } catch (err) {}
  }
  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans">
      
      <TopNav auth={signedInUser} />
      <Header />
      <div className="" >
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
export default MyApp

I18n.putVocabularies(translations);
I18n.setLanguage('dk');

I18n.putVocabularies({
  dk: {
    'Sign in to your account': "Log ind", 
    'Sign In': "Log Ind", 
    "Sign in": "Log ind", 
    'Sign Up': "Opret Konto", 
    "Username *": "Brugernavn *", 
    "Username": "Brugernavn", 
    "Password *": "Kodeord *", 
    "Password": "Kodeord", 
    "Enter your password": "Indtast Kodeord", 
    "No account?": "Ingen Account?", 
    "Create account": "Opret Konto", 
    "Create Account": "Opret Konto", 
    "Have an account?": "Har du en konto?", 
    "Have a code?": "Har du en kode?", 
    "Code *": "Kode", 
    "Confirm": "Verificer", 
    "Reset Password": "Reset Kode", 
    "Reset password": "Reset Kode", 
    "Reset your password": "Reset kodeord", 
    "Confirm Password": "Bekræft Kodeord",
    "Back to Sign in": "Tilbage til Login", 
    "You will receive a verification code to reset your password": "Du vil modtage en verificerings kode til genskabelse", 
    "Submit": "Send", 
    "Verify": "Verificer", 
    'Verify Contact': "Verificer kontakt", 
    'Skip': "Spring over", 
    "Lost your code?'": "Glemt Kode?", 
    "Resend": "Send Igen", 
    "Forgot Password?": "Glemt Kode?", 
    "Forgot Your Password?": "Glemt Kode?",
    "Forgot your password?": "Glemt Kode?",
    "You will receive a verification code": "Du vil modtage en verificerings kode", 
    'Code': "Kode",
    'Account recovery requires verified contact information': "Account recovery requires verified contact information", 
    'User does not exist': "Bruger eksistere ikke", 
    'User already exists': "Bruger eksistere allerede", 
    'Incorrect username or password': "Forkert brugernavn eller kode", 
    'Invalid password format': "Ugyldig kode", 
    'Invalid phone number format': "Forkert telefon nr. +4534567890", 
    "Username cannot be empty": "Brugernavn må ikke være tomt", 
    "Custom auth lambda trigger is not configured for the user pool.": "Custom auth lambda trigger is not configured for the user pool.", 
    "Incorrect username or password.": "Forkert brugernavn eller kode", 
    "Password attempts exceeded": "For mange login forsøg"
  }
});