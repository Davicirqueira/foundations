import { Link } from 'react-router-dom';
import './index.scss';
import { useLocation } from 'react-router-dom';

export default function Header() {

    const location = useLocation('');

    return (

        <div className='header'>

            <img src="/assets/ai-icons-png-graphic.png" alt="" />

            <Link className={location.pathname === '/' ? 'h-active' : 'h'} to={'/'}>Home</Link>

            <Link className={location.pathname === '/tarefas' ? 'active-link' : ''} to={'/tarefas'}>Tarefas</Link>

            <Link className={location.pathname === '/diario' ? 'active-link' : ''} to={'/diario'}>Seu Diário</Link>

            <Link className={location.pathname === '/chamados' ? 'active-link' : ''} to={'/chamados'}>Chamados</Link>

            <Link className={location.pathname === '/sobre' ? 'active-link' : ''} to={'/sobre'}>Sobre</Link>

            <div className='entrar'>

                <button>Entrar</button>

            </div>

        </div>

    );

}