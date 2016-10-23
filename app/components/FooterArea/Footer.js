import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <p className="footer-headline">
                    [APP-NAME]
                </p>
                <ul className="footer-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;