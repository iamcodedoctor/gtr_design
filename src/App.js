import {Blog, Features, Footer, Header, Possibility, WhatGTR} from './containers'
import {Brand, CTA, Navbar} from './components'
import './App.css'

const App = () => {
    return (
        <div className={'App'}>
            <div className={'gradient-bg'}>
                <Navbar/>
                <Header/>
            </div>
            <Brand />
            <WhatGTR />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;