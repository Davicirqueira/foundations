import './index.scss';
import { useState } from 'react';


export default function Entrar() {

    const [active, setActive] = useState("Entrar");

    const navItem = ["Entrar", "Crie uma conta"];

    return (

        <div className='entrar-page'>

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

        </div>

    );

}