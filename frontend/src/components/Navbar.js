import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {

    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className ="container">
                <Link to ="/">
                    <h1>Wildroutes</h1>
                </Link>
                <nav>
                    {user && (
                    <div>
                        <Link to="/create">🌁 Create</Link>
                        <Link to="/myadventures">❤️ Likes</Link>
                        <Link to="/deleteadventures">📥 My Adventures</Link>
                        <button onClick={handleClick}>Logout {user.userName} {user.location}</button>
                    </div>
                    )}
                    {!user &&(
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar