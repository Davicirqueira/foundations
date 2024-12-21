import './index.scss';
import Header from '../../components/header';
import Card from '../../components/card';

export default function Home() {

  const secoes = [

    {
      atividade: "Cálculos Simples",
      link: "Praticar"
    },

    {
      atividade: "Calculando IMC",
      link: "Praticar"
    },

    {
      atividade: "Kg por Gramas",
      link: "Praticar"
    },

    {
      atividade: "Médias",
      link: "Praticar"
    }

  ];

  return (

    <div className='home-page'>

      <Header />

      <div className='cards'>

        {secoes.map(item =>

          <Card
            atividade={item.atividade}
            link={item.link}
          />

        )}

      </div>


    </div>

  );

}