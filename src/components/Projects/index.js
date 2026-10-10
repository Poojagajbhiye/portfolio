import './index.scss'
import Loader from 'react-loaders';
import wp1 from '../../assets/images/intro.jpg';
import wp2 from '../../assets/images/new_home.jpg';
import ca1 from '../../assets/images/welcome.jpg';
import ca2 from '../../assets/images/home.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle} from '@fortawesome/free-solid-svg-icons';

const Projects = () => (
    <>
        <div className='container projects-page'>
            <div className='project-description'>
                <p>
                    <span style={{ fontFamily: 'Nunito-Black', color: 'purple' }}>Wish Pool</span> is a personal Flutter and Firebase app I built to help people organize and track their wishes.
                </p>
                <p className='small-para'>
                    <FontAwesomeIcon icon={faDotCircle}/> Includes light and dark theme modes for a good user experience. <br/>
                    <FontAwesomeIcon icon={faDotCircle}/> Built with Flutter and uses Provider package for state management. <br/>
                    <FontAwesomeIcon icon={faDotCircle}/> Uses Firebase as backend for user authentication and storing wishes. <br/>
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={wp1} width={210} height={450} alt='intro'></img>
                    </div>
                    <div className='face2'>
                        <img src={wp2} width={210} height={450} alt='home'></img>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='project-description'>
                <p>
                    <span style={{ fontFamily: 'Nunito-Black', color: 'green' }}>CallAgri</span> is a collaborative Flutter and Firebase project designed to support farmers with everyday agricultural activities.
                </p>
                <p className='small-para'>
                    <FontAwesomeIcon icon={faDotCircle}/> Incorporates local language support for a good user experience. <br/>
                    <FontAwesomeIcon icon={faDotCircle}/> Built with Flutter and uses Riverpod 2.0 for state management. <br/>
                    <FontAwesomeIcon icon={faDotCircle}/> Uses Firebase as backend.<br/>
                    <FontAwesomeIcon icon={faDotCircle}/> Uses CustomPainter for an engaging UI. <br/>
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={ca1} width={210} height={450} alt='intro'></img>
                    </div>
                    <div className='face2'>
                        <img src={ca2} width={210} height={450} alt='home'></img>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
)

export default Projects