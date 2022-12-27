import "./feature.css"

const Feature = ({title, text}) => {
    return (
        <div className={'gtr-feature'}>
            <div className="gtr-feature-title">
                <div />
                <h1 className={'gradient-text'}>{title}</h1>
            </div>
            <div className="gtr-feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature