import './index.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Entrar() {

    const [active, setActive] = useState("Entrar");

    const navItem = ["Entrar", "Crie uma conta"];

    return (

        <div className='entrar-page'>

            <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} /></Link>

            <header>

                {navItem.map((item) => (

                    <p
                        key={item}
                        className={`${active === item ? 'items-active' : ''}`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </p>

                ))

                }

            </header>

            {active == "Entrar" &&

                <div className='entrar-form'>

                    <img src="/assets/ai-icons-png-graphic.png" alt="" />
                    <p>devMaster</p>

                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder='Nome...' />
                    </div>

                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" placeholder='Senha...' />
                    </div>

                    <button>Entrar</button>

                </div>

            }

            {active == "Crie uma conta" &&

                <div className='entrar-form'>

                    <img src="/assets/ai-icons-png-graphic.png" alt="" />
                    <p>devMaster</p>

                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder='Nome...' />
                    </div>

                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" placeholder='Senha...' />
                    </div>

                    <button className='more'>Criar conta</button>

                </div>

            }


        </div>

    );

}