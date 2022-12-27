import people from '../../assets/people.png'
import skyline from "../../assets/skyline_gtr.png"
import "./header.css"

const Header = () => {
    return (
        <div className={'gtr-header section-padding'}>
            <div className="gtr-header-content">
                <h1 className={'gradient-text'}>
                    Hit the tracks with Skyline GTR
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolor ducimus ipsam laborum qui unde veritatis! Ad at autem dicta enim in maiores odio, omnis perspiciatis quas suscipit vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laudantium molestias odio quasi vel voluptas!
                </p>
                <div className="gtr-header-content-input">
                    <input type="email" placeholder={'Enter your email'}/>
                    <button type={'button'}>Lets Race.!</button>
                </div>
                <div className="gtr-header-content-people">
                    <img src={people} alt="person"/>
                    <p>Many people already racing.</p>
                </div>
            </div>
            <div className="gtr-header-image">
                <img src={skyline} alt="skyline gtr"/>
            </div>
        </div>
    )
}

export default Header