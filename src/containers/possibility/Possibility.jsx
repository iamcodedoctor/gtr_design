import "./possibility.css"
import skyline from "../../assets/r34.png"

const Possibility = () => {
    return (
        <div className={'gtr-possibility section-margin'}>
            <div className="gtr-possibility-image">
                <img src={skyline} alt="skyline r34"/>
            </div>
            <div className="gtr-possibility-content">
                <p className={'super'}>
                    Lorem ipsum dolor sit amet, elit. Autem, sit.
                </p>
                <h1 className={'gradient-text'}>
                    The possibilities are beyond your imagination
                </h1>
                <p className={'para'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur consequuntur corporis dolores maxime molestias nihil pariatur, porro reiciendis sunt? Animi atque dolores enim error eveniet facilis, iste necessitatibus porro possimus qui quod quos similique.
                </p>
                <p className={'sub-para gradient-text'}>
                    Book Your trial now.
                </p>
            </div>
        </div>
    )
}

export default Possibility