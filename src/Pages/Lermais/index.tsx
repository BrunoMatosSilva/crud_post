import React from 'react'
import ButtonReturn from '../../components/ButtonReturn'
import Header from '../../components/Header'
import { ContainerHeader, ContainerMain } from './styles'

export function Lermais() {
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
                            <h2>Curso consumindo API</h2>
                        </header>

                        <div className="line"></div>

                        <p>Nesse curso eu ensino vocês a consumirem uma api, com react.js.
                            Nesse curso eu ensino vocês a consumirem uma api, com react.js
                            Nesse curso eu ensino vocês a consumirem uma api, com react.js
                            Nesse curso eu ensino vocês a consumirem uma api, com react.js
                            Nesse curso eu ensino vocês a consumirem uma api, com react.js
                        </p>
                    </div>
                </div>
            </ContainerMain>
        </>
    )
}
