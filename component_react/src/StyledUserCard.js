import styled from 'styled-components';

const StyledUserCard = styled.div`

margin:10px auto;
border-radius:10px;
background-color:${(props)=>props.color};
box-shadow:0px 0px 10px #000000;
width:120px;
padding:10px;

h3{
    color:#fff;
}
`

export default StyledUserCard;