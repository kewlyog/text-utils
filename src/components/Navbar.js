import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import icons from 'bootstrap-icons';

export default function Navbar(props) {

    // const [btnText, setBtnText] = useState('Dark Mode');

    const btnText = 'Dark Mode';

    /*
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    
    const handleDarkMode = () => {
        if (myStyle.backgroundColor === 'black') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });

            setBtnText('Dark Mode');
        }
        else if (myStyle.backgroundColor === 'white') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });

            setBtnText('Light Mode');
        }
    }
    */

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div>
                        <button type='button' className="btn mx-1" onClick={props.toggleMode}>
                            <i className="bi bi-circle-fill" style={{ fontSize: '2rem', color: '#A0153E' }}></i>
                        </button>
                        <button type='button' className="btn mx-1">
                            <i className="bi bi-circle-fill" style={{ fontSize: '2rem', color: '#FFC700' }}></i>
                        </button>
                        <button type='button' className="btn mx-1">
                            <i className="bi bi-circle-fill" style={{ fontSize: '2rem', color: '#007F73' }}></i>
                        </button>
                        <button type='button' className="btn mx-1">
                            <i className="bi bi-circle-fill" style={{ fontSize: '2rem', color: '#378CE7' }}></i>
                        </button>
                        <span className='mx-2'>Set background</span>
                    </div>
                    <div className={`form-check form-switch mx-2 my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch"
                            id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = {
    title: 'Your Website Title'
};
