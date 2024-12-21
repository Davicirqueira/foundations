import { Link } from 'react-router-dom';
import './index.scss';

export default function Card(props){

    return(

        <div className='card'>

            <div className='top'>&bnsp;</div>

            <h3>{props.atividade}</h3>

            <Link>{props.link}</Link>

        </div>

    );

}