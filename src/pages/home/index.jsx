import './index.scss';
import Header from '../../components/header';
import Card from '../../components/card';

export default function Home() {

  const secoes = [

    {
      atividade: "Cálculos Simples",
      link: "Praticar",
      a: "calculos"
    },

    {
      atividade: "Calculando IMC",
      link: "Praticar",
      a: "imc"
    },

    {
      atividade: "Kg por Gramas",
      link: "Praticar",
      a: "gramas"
    },

    {
      atividade: "Médias",
      link: "Praticar",
      a: "medias"
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
            a={item.a}
          />

        )}

      </div>


    </div>

  );

}