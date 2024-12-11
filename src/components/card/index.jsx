import { Link } from 'react-router-dom';
import './index.scss';

export default function Card(){

    return(

        <div className='card'>

            <div className='top'>&bnsp;</div>

            <h3>Cálculos Simples</h3>

            <Link>Praticar</Link>

        </div>

    );

}