import "./footer.css"

const Footer = () => {
    return (
        <div className={"gtr-footer"}>
            <div className="gtr-footer-container">
                <div className="gtr-footer-heading">
                    <h1 className={'gradient-text'}>
                        Do you want to step into the action before others
                    </h1>
                    <button type={'button'}>
                        Request Early Access
                    </button>
                </div>
                <div className={'gtr-footer-content'}>
                    <div className="gtr-footer-content-heading">
                        <h4>GTR</h4>
                        <p>Lorem ipsum dolor emmet. All Rights Reserved.</p>
                    </div>
                    <div className={'gtr-footer-content-links'}>
                        <h6>Links</h6>
                        <p>Overones</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>
                    </div>
                    <div className="gtr-footer-content-company">
                        <h6>Company</h6>
                        <p>Terms and Condition</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </div>
                    <div className="gtr-footer-content-getintouch">
                        <h6>Get in touch</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <p>091-190233</p>
                        <p>info@paytm.net</p>
                    </div>
                </div>
                <div className={'gtr-footer-copyright-section'}>
                    <p>
                        ©2022 GTR. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer