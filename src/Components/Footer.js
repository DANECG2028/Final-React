import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 My React Application</p>
            <nav>
                <ul>
                    <li><a href="https://danecg2028.github.io/EstebanG.github.io/#about" target='blank'>About</a></li>
                    <li><a href="https://danecg2028.github.io/EstebanG.github.io/#services" target='blank'>Contact</a></li>
                    <li>
  <a href="/privacy-policy" onClick={() => alert("There is no privacy policy.")}>
    privacy policy
  </a>
</li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
