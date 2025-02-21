import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    text-align: center;
    width: 150px;
    margin-top: 20px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
    text-align: center;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
    text-align: center;
`

const ImgLivro = styled.img`
    width: 150px;
    margin-bottom: 20px;
`

function CardRecomenda ({ titulo, subtitulo, descricao, img }) {
    return (
        <Card>
            <Titulo>{titulo}</Titulo>
            <ImgLivro src={img} alt={subtitulo}/> 
            <Subtitulo>{subtitulo}</Subtitulo>
            <Descricao>{descricao}</Descricao>
            <Botao>Saiba mais!</Botao>
        </Card>
    )
}

export default CardRecomenda