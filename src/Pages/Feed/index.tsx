import { ContainerHeader, ContainerMain } from './styles';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ImgMore from '../../images/more.svg'
import { api } from '../../services/api';

interface IPostData {
  _id: string;
  title: string;
  description: string;
}


export function Feed() {

  const [posts, setPosts] = useState<IPostData[]>([])

  useEffect(() => {
    api.get("list_posts")
      .then((response) => {
        setPosts(response.data.posts)
      }).catch(() => {
        console.log("Erro na conexão");
      })
  }, [])

  async function deletePost(_id: any) {
    await api.delete(`/delete_post/${_id}`)

    setPosts(posts.filter(post => post._id !== _id))
  }

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

          {posts.map((post) => {

            return (
              <div className="card" key={post._id}>
                <header>
                  <h2>{post.title}</h2>
                  <img src={ImgMore} alt="Mais Posts" />
                </header>

                <div className="line"></div>

                <p>{post.description}</p>

                <div className="btns">

                  <div className="btn-edit">
                    <Link to={{ pathname: `/edit/${post._id}` }}>
                      <button>Editar</button>
                    </Link>
                  </div>

                  <div className="btn-readmore">
                    <Link to={{ pathname: `/lermais/${post._id}` }}>
                      <button>Ler Mais</button>
                    </Link>
                  </div>

                  <div className="btn-delete">
                    <button onClick={() => deletePost(post._id)} >Deletar</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </ContainerMain>
    </>
  );
}
