import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {

    const instagram = "devMaster"

    return (

        <div className='footer'>

            <div className='icon'>
                <Link to={`https://instagram.com/${instagram}`} target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon icon={faInstagram} size='3x' />
                </Link>
            </div>

            <p>devMaster, muita diversão com tecnologia</p>

            <p>Direitos Reservados.</p>

        </div>


    );

}