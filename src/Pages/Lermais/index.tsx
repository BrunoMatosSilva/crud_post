import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonReturn from '../../components/ButtonReturn'
import Header from '../../components/Header'
import { api } from '../../services/api'
import { ContainerHeader, ContainerMain } from './styles'

interface IPostData {
    title: string;
    content: string;
}

interface Iid {
    id: string;
}

export function Lermais({ title, content }: IPostData) {


    const [lermais, setLermais] = useState({ title, content })

    const { id } = useParams<Iid>();

    useEffect(() => {
        api.get(`/list_post/${id}`)
            .then((response) => {
                setLermais(response.data.post)
            })
    }, [])

    return (
        <>
            <ContainerHeader>
                <Header />

                <ButtonReturn />
            </ContainerHeader>

            <ContainerMain>
                <div className="cards">
                    <div className="card">
                        <header>
                            <h2>{lermais.title}</h2>
                        </header>

                        <div className="line"></div>

                        <p>{lermais.content}</p>
                    </div>
                </div>
            </ContainerMain>
        </>
    );
}
