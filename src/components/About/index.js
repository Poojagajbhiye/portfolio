import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import Loader from 'react-loaders';
import aboutPic from '../../assets/images/about.jpg';
import { faBookOpen, faDog, faDumbbell, faGlobeAsia, faTelevision, faWeight, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <img src={aboutPic}></img>
                <div className='text-zone'>
                    <p>
                        I’m a <span style={{ color: 'turquoise' }}>software engineer</span> with 5 years of experience <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>building scalable web and mobile applications while working closely with clients</span> and cross-functional teams to solve real-world business challenges. Skilled in <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>Angular</span> and <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>Flutter</span>, I enjoy <span style={{ color: 'turquoise' }}>bridging the gap between technical feasibility and user needs</span>, translating client feedback into reliable and maintainable solutions.
                    </p>
                    <p>
                        Currently, I work remotely as a <span style={{ color: 'turquoise' }}>Software Engineer</span> at <span style={{ color: 'turquoise' }}>Neuronic</span>, a Germany-based startup, focusing on app architecture, core features like BLE communication, analytics, and testing, while exploring backend technologies including AWS. I collaborate closely with designers and product owners to ensure solutions align with both technical constraints and user expectations.
                    </p>
                    <p>
                        Previously at <span style={{ color: 'turquoise' }}>LTIMindtree</span>, I <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>led client-facing Proofs of Concept</span>, contributing to product features and helping stakeholders understand complex technical concepts. These experiences strengthened my ability <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>to develop solutions while building strong client relationships</span>.
                    </p>
                    <p>
                        My goal is to continue delivering <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>scalable, user-centered solutions</span> while deepening my expertise in backend, cloud, and AI-powered systems.
                    </p>
                    <p style={{ fontSize: '30px', lineHeight: '1.6' }}>
                        When I'm not working or building apps, I...<br />
                        <FontAwesomeIcon icon={faBookOpen} color="turquoise" /> Read novels and manga<br />
                        <FontAwesomeIcon icon={faDog} color="turquoise" /> Play with my dog<br />
                        <FontAwesomeIcon icon={faGlobeAsia} color="turquoise" /> Dream of traveling more<br />
                        <FontAwesomeIcon icon={faTelevision} color="turquoise" /> Watch anime<br />
                        <FontAwesomeIcon icon={faDumbbell} color="turquoise" /> Break a sweat at the gym<br />
                    </p>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About