import { Link } from 'react-router-dom';
import './index.scss';

export default function Header() {

    return (

        <div className='header'>

            <img src="/assets/ai-icons-png-graphic.png" alt="" />

            <Link className='h'>Home</Link>

            <Link>Tarefas</Link>

            <Link>Seu Diário</Link>

            <Link>Chamados</Link>

            <Link>Sobre</Link>

            <div className='entrar'>

                <button>Entrar</button>

            </div>

        </div>

    );

}