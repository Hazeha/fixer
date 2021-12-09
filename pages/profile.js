import { withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { Link } from 'next/link'
function Profile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    checkUser()
  }, []);
  async function checkUser() {
    const userCredentials = await Auth.currentAuthenticatedUser();
    console.log(user);
    setUser(userCredentials);
  };
  return (
      <div>
        <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
        <h3 className="font-medium text-gray-500 my-2">Username: {user.username}</h3>
        <Link href="/my-posts">
          <span className="mr-6 cursor-pointer">My Posts</span>
        </Link>
      </div>
    )
}

export default withAuthenticator(Profile)