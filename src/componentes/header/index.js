import Logo from '../logo' 
import OpcoesHeader from '../opcoes_header';
import Iconesheader from '../icones_header';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
  `

function Header () {
    return(
    <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <Iconesheader/>
    </HeaderContainer>
    )
}

export default Header