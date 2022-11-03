import './Footer.css';

const Footer = ({scrollToTop}) => {
    return (
        <footer>
          <div className="leftBox">
                <p>
                (주) 피터패트<br/>
                COPYRIGHT PIT-A-PAT. ALL RIGHTS RESERVED.
                </p>
            </div>
            <div className="rightBox">
                <button onClick={scrollToTop}></button>   
            </div>
        </footer>
    );
};

export default Footer;