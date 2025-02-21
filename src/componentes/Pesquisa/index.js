import Input from '../input'
import styled from 'styled-components'
import { useState } from 'react'
import { Livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const SubTitulo = styled.h3`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [LivrosPesquisados, setLivrosPesquisados ] = useState([])
    return(
        <PesquisaContainer>
        <Titulo>Já sabe por onde começar? </Titulo>
        <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
        <Input
            placeholder="Escreva sua proxima leitura"
            onBlur={evento => {
                const TextoDigitado = evento.target.value
                const resultadoPesquisa = Livros.filter( Livro => Livro.nome.includes(TextoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
           { LivrosPesquisados.map( Livro => (
            <Resultado key={Livro.nome}>
            <p>{Livro.nome}</p>
            <img src={Livro.src} alt={Livro.nome}/> 
            </Resultado>
           )) }
        </PesquisaContainer>
    )   
}
export default Pesquisa