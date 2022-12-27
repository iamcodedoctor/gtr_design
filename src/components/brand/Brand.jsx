import "./brand.css"
import {nos, kandn, mobile1, brembo} from './imports'

const Brand = () => {
    return (
        <div className={'gtr-brand-section'}>
            <div><img src={nos} alt=""/></div>
            <div><img src={kandn} alt=""/></div>
            <div><img src={brembo} alt=""/></div>
            <div><img src={mobile1} alt=""/></div>
        </div>
    )
}

export default Brand