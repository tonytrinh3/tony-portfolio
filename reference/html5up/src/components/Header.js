import React from 'react';
import avatar from "../images/avatar.jpg";

const Header = () =>{
    return (
        <section classId="header">
            <header>
                <span className="image avatar"><img src={avatar} alt="" /></span>
                <h1 classId="logo"><a href="#">Willis Corto</a></h1>
                <p>I got reprogrammed by a rogue AI<br />
                and now I'm totally cray</p>
            </header>
            <nav classId="nav">
                <ul>
                    <li><a href="#one" className="active">About</a></li>
                    <li><a href="#two">Things I Can Do</a></li>
                    <li><a href="#three">A Few Accomplishments</a></li>
                    <li><a href="#four">Contact</a></li>
                </ul>
            </nav>
            <footer>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </footer>
        </section>
    )
};

export default Header;

