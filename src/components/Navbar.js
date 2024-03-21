import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    // const [btnText, setBtnText] = useState('Dark Mode');

    // const btnText = 'Dark Mode';

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
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    {/* <div>
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
                    </div> */}
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2 my-2" onClick={() => { props.toggleMode('primary') }}
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded mx-2 my-2" onClick={() => { props.toggleMode('danger') }}
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-success rounded mx-2 my-2" onClick={() => { props.toggleMode('success') }}
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded mx-2 my-2" onClick={() => { props.toggleMode('warning') }}
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-light rounded mx-2 my-2" onClick={() => { props.toggleMode('light') }}
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-dark rounded mx-2 my-2" onClick={() => { props.toggleMode('dark') }}
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    </div>
                    {/* <div className={`form-check form-switch mx-2 my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox"
                            role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = {
    title: 'Your Website Title'
};
