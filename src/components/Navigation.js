import Logo from '../images/logo1.jpg';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <div className = "header-container">
                <div className = "right-menu">
                    <div className ="Logo">
                        <img src={Logo} alt="Logo" className="image"/>
                    </div>
                    <Link to = "/"><h2>MART Blog</h2></Link>
                
                </div>
                <div className = "left-menu">
                    < Link to = "/">Home</Link>
                    < Link to ="/create" className="button-container">Add Post</Link> 
                </div>
            </div>
        </header>
    )
}

export default Navigation ;

