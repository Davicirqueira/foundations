import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Tarefas from "./pages/tarefas";
import Diario from "./pages/diario";
import Chamados from "./pages/chamados";
import Sobre from "./pages/sobre";

export default function Routers() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tarefas' element={<Tarefas />} />
                <Route path='/diario' element={<Diario />} />
                <Route path='/chamados' element={<Chamados />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>

        </BrowserRouter>

    );

}