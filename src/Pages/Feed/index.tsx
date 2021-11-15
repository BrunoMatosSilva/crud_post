import { ContainerHeader, ContainerMain } from './styles';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ImgMore from '../../images/more.svg'

export function Feed() {
  return (
    <>
      <ContainerHeader>
        <Header />

        <Link to="/post">
          <button className="btn-new">Add new Post</button>
        </Link>
      </ContainerHeader>
      <ContainerMain>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Curso consumindo API</h2>
              <img src={ImgMore} alt="Mais Posts" />
            </header>

            <div className="line"></div>

            <p>Nesse curso eu ensino vocês a consumirem uma api, com react.js</p>

            <div className="btns">

              <div className="btn-edit">
                <Link to="/edit">
                  <button>Editar</button>
                </Link>
              </div>

              <div className="btn-readmore">
                <Link to="/lermais">
                  <button>Ler Mais</button>
                </Link>
              </div>

              <div className="btn-delete">
                <button>Deletar</button>
              </div>
            </div>
          </div>


        </div>
      </ContainerMain>
    </>
  );
}
