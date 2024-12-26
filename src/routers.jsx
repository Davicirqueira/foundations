import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import CalculosSimples from "./pages/home/calculos";
import Imc from "./pages/home/imc";
import Gramas from "./pages/home/gramas";
import Medias from "./pages/home/medias";
import Tarefas from "./pages/tarefas";
import Diario from "./pages/diario";
import Chamados from "./pages/chamados";
import Sobre from "./pages/sobre";
import Entrar from "./pages/entrar";


export default function Routers() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home/calculos' element={<CalculosSimples />} />
                <Route path='/home/imc' element={<Imc />} />
                <Route path='/home/gramas' element={<Gramas />} />
                <Route path='/home/medias' element={<Medias />} />
                <Route path='/tarefas' element={<Tarefas />} />
                <Route path='/diario' element={<Diario />} />
                <Route path='/chamados' element={<Chamados />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/entrar' element={<Entrar />} />
            </Routes>

        </BrowserRouter>

    );

}