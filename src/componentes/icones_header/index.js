import perfil from'../../img/perfil.svg'
import sacola from'../../img/sacola.svg'
import styled from 'styled-components';

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
    list-style: none; 
`

const icones = [perfil, sacola]

function Iconesheader(){
    console.log('Iconesheader renderizado');
    return(
    <Icones> 
      {icones.map((icone, index) => (
        <Icone key={index}><img alt='' src={icone}></img></Icone>
      ))}
      </Icones>
    )
}
export default Iconesheader