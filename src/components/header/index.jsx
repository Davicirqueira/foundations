import { Link } from 'react-router-dom';
import './index.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {

    const location = useLocation('');

    const navigate = useNavigate('');

    function entrar() {

        navigate('/entrar');

    }

    const [isMenu, setIsMenu] = useState(false);

    const toogleMenu = () => {

        setIsMenu(!isMenu);

    }

    const links = ['tarefas', 'diario', 'chamados', 'sobre'];

    function home(){
        navigate(`/`);
    }
    function tarefas(){
        navigate(`/${links[0]}`);
    }
    function diario(){
        navigate(`/${links[1]}`);
    }
    function chamados(){
        navigate(`/${links[2]}`);
    }
    function sobre(){
        navigate(`/${links[3]}`)
    }

    return (

        <div className='header'>

            <img src="/assets/ai-icons-png-graphic.png" alt="" />

            <div className='m'>

                <button className='menu' onClick={toogleMenu}>
                    {isMenu ? 'X' : '☰'}
                </button>

                {isMenu &&

                    <div className='header-menu'>

                        <p onClick={home}>Home</p>
                        <p onClick={tarefas}>Tarefas</p>
                        <p onClick={diario}>Seu Diário</p>
                        <p onClick={chamados}>Chamados</p>
                        <p onClick={sobre}>Sobre</p>

                    </div>

                }

            </div>


            <Link className={location.pathname === '/' ? 'h-active' : 'h'} to={'/'}>Home</Link>

            <Link className={location.pathname === '/tarefas' ? 'active-link' : ''} to={'/tarefas'}>Tarefas</Link>

            <Link className={location.pathname === '/diario' ? 'active-link' : ''} to={'/diario'}>Seu Diário</Link>

            <Link className={location.pathname === '/chamados' ? 'active-link' : ''} to={'/chamados'}>Chamados</Link>

            <Link className={location.pathname === '/sobre' ? 'active-link' : ''} to={'/sobre'}>Sobre</Link>

            <div className='entrar'>

                <button onClick={entrar}>Entrar</button>

            </div>

        </div>

    );

}