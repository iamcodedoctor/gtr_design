import "./whatgtr.css"
import {Feature} from "../../components";

const WhatGTR = () => {
    return (
        <div className={'gtr-wgtr section-margin'}>
            <div className="gtr-wgtr-feature">
                <Feature title={"What is Gtr"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos distinctio doloremque ducimus et, harum molestiae nesciunt officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt."}/>
            </div>
            <div className="gtr-wgtr-heading">
                <h1 className={'gradient-text'}>
                    Tracks can be so much more fun than you can ever imagine.
                </h1>
                <p>Explore library</p>
            </div>
            <div className="gtr-wgtr-container">
                <Feature title={'Engine'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos distinctio doloremque ducimus et, harum molestiae nesciunt officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
                <Feature title={'Tuning'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos distinctio doloremque ducimus et, harum molestiae nesciunt officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
                <Feature title={'Performance'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos distinctio doloremque ducimus et, harum molestiae nesciunt officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
                <Feature title={'Styling'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos distinctio doloremque ducimus et, harum molestiae nesciunt officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
            </div>

        </div>

    )
}

export default WhatGTR