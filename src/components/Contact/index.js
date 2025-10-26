import { useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import ContactImg from '../../assets/images/footer1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useState(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1 style={{ fontFamily: 'Nunito-Bold' }}>
                        <AnimatedLetters letterClass={letterClass} strArray={['L', 'e', 't', '\'', 's', ' ', 'c', 'o', 'n', 'n', 'e', 'c', 't', '!']} idx={7} />
                    </h1>
                    <p>
                        I build cross-platform applications and deliver solutions that solve real-world client challenges. Always excited to collaborate and turn ideas into scalable, user-centered products. <br/><br/>
                        <img src={ContactImg} width={300} height={300}></img> <br/>
                        <a href='https://www.linkedin.com/in/pooja-gajbhiye-b94a46186/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} color='turquoise'/>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontFamily: 'Nunito-Regular', color:'turquoise', fontSize: '1em', verticalAlign: 'super' }}>poojagajbhiye563@gmail.com</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://github.com/Poojagajbhiye/Poojagajbhiye' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} color='turquoise'/>
                        </a>
                    </p>
                </div>
                <div className='info-map'>
                    Pooja Gajbhiye <br/>
                    Mumbai, Maharashtra, India
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[19.1164, 72.90471]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[19.1164, 72.90471]}>
                            <Popup>Welcome!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact