/*eslint-disable */
import Link from 'next/link'
import { Auth } from 'aws-amplify'


export default function TopNav(signedInUser) {
    return(
        <ul className="flex flex-row-reverse text-sm absolute text-gray-100  bg-opacity-80 bg-gray-600 z-20 w-full">
            {
            signedInUser && 
            <li><Link href="/">
            <span onClick={() => Auth.signOut()} className="mr-6 cursor-pointer">Log ud</span>
            </Link></li>
            }
        <li><Link className="" href="/">
                <span className="mr-6 cursor-pointer">Kontakt</span>
            </Link></li>
            <li><Link className="" href="/">
                <span className="mr-6 cursor-pointer">Ofte stillede spørgsmål</span>
            </Link></li>
            
            <li><Link className="" href="/">
                <span className="mr-6 cursor-pointer">Forsikring</span>
            </Link></li>
            <li><Link className="" href="/">
                <span className="mr-6 cursor-pointer">Sådan fungere Fixer</span>
            </Link></li>
        </ul>
    )
}