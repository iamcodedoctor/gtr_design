import "./features.css"
import {Feature} from "../../components";

const Features = () => {
    return (
        <div className={'gtr-features section-margin'}>
            <div className={'gtr-features-heading'}>
                <h1 className={'gradient-text'}>
                    The Best time is now, Step into your car and hit the tracks, race on the best european tracks.
                </h1>
                <p>
                    Book your session today.
                </p>
            </div>
            <div className="gtr-features-feature">
                <Feature title={'Improve your driving Skills '} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos  officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
                <Feature title={'Test your limits'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimost officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
                <Feature title={'Experience speed'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos  officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
                <Feature title={'Race against real people'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dignissimos  officia pariatur quidem quisquam sapiente vero! Esse incidunt ipsam molestiae sint sunt.'}/>
            </div>
        </div>
    )
}

export default Features