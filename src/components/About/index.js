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
                        I build software with the bigger picture in mind, from the experience users see to the systems that power it. I focus on creating reliable solutions that make an impact across borders.
                    </p>
                    <p>
                        I'm a <span style={{ color: 'turquoise' }}>Full Stack Software Engineer</span> with 6+ years of experience delivering web, mobile, and backend systems for clients and users across India, North America, and Europe. I've collaborated with globally distributed teams in enterprise and startup environments.
                    </p>
                    <p>
                        My work spans <span style={{ fontFamily: 'Nunito-Black', color: 'turquoise' }}>end-to-end feature ownership, microservices, cloud migrations, and production reliability</span>. I've migrated 15+ backend services to GCP Cloud Run, reducing deployment times from hours to minutes, delivered features spanning 5 microservices, and contributed to full-stack automation that reduced manual verification effort by approximately 80%.
                    </p>
                    <p>
                        I work with Node.js, TypeScript, React, Angular, Flutter, GraphQL, PostgreSQL, GCP, and AWS. I enjoy turning complex requirements into maintainable products, and I'm especially interested in distributed systems and practical AI-powered applications.
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