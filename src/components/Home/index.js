import { Link } from 'react-router-dom'
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const introArray = ['H', 'i', '!', ,' ', 'I', '\'', 'm']
    const nameArray = ['P', 'o', 'o', 'j', 'a', ' ' ,'G', 'a', 'j', 'b', 'h', 'i', 'y', 'e']

    useState(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
            <div className="container home-page">
                <div className='big-screen'>
                    <Logo/>
                </div>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={introArray}
                        idx={15}/>
                        <br/>
                        <div style={{ fontFamily: 'Nunito-Bold', color: '#a9f5e8' }}>
                            <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}/>
                        </div>
                    </h1>
                    <h2>Full Stack Software Engineer</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home