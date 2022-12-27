import "./blog.css"
import {mustang, tachometer, drift, racetrack, porshe} from "./imports"

const Card = ({image}) => {
    return (
        <div className="blog-card-main">
            <div className="blog-card-image">
                <img src={image} alt="blog"/>
            </div>
            <div className={'blog-card-content'}>
                <div className="blog-card-content-title">
                    <p>
                        Sep 12, 2022
                    </p>
                    <h3>
                        Lorem ipsum dolor sit amet, elit. Ea, quia.
                    </h3>
                </div>
                <div className="blog-card-content-button">
                    <button type={'button'}>
                        Read Full Article
                    </button>
                </div>
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <div className={'gtr-blog section-margin'}>
            <div className="gtr-blog-heading">
                <h1 className={'gradient-text'}>
                    A Lot is Happening, We are blogging about it.
                </h1>

            </div>
            <div className={'gtr-blog-content'}>
                <div className={'groupA'}>
                    <Card image={mustang} />
                </div>
                <div className={"groupB"}>
                    <Card image={racetrack} />
                    <Card image={drift} />
                    <Card image={porshe} />
                    <Card image={tachometer} />
                </div>
            </div>
        </div>
    )
}

export default Blog