import { livros } from './DadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'
import ImagemLivro from '../../img/livro.png' 
import CardRecomenda from '../cardRecomenda'

const UltimoslancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimoslancamentosContainer>
            <Titulo cor="#Eb9B00" tamanhoFonte="36px">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img key={livro.nome} src={livro.src} alt={livro.nome}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="C"
                descricao="Construindo uma carreira com C"
                img={ImagemLivro}
            />
                <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="C##"
                descricao="Construindo uma carreira com C##"
                img={ImagemLivro}
            />
        </UltimoslancamentosContainer>
    )
}

export default UltimosLancamentos