import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: #F5F5F5 ;
    align-items: center;
    padding: 1rem 6rem;
    position: relative;

`;

export const ContainerImage = styled.div`
    flex-grow: 1;
`;

export const Image = styled.img`
    width: 100px;
    position:absolute;
    top: 50%;
    /* left: 50; */
    transform: translate(-50%, -50%);
`;

export const Cnav = styled.nav`
    position: relative;
	margin: 0 auto 0;
	/* background: #34495e; */
	border-radius: 8px;
	font-size: 0;
	/* box-shadow: 0 2px 3px 0 rgba(0,0,0,.1); */
`;

export const Lien=styled.nav`
    font-size: 15px;
	text-transform: uppercase;
    color:#929292;
	text-decoration: none;
	line-height: 50px;
	position: relative;
	z-index: 1;
	display: inline-block;
	text-align: center;
    padding: 0 0.5rem;
    font-weight: bold;
    transition: 0.5s color;
    &:hover {
        color:white
    }
`;

export const Animation=styled.div`
    position: absolute;
	height: 85%;
	top: 50%;transform:translateY(-50%);
	z-index: 0;
	background: #228BE6;
	border-radius: 8px;
	transition: all .5s ease 0s;
`;

export const Lien1 = styled(Lien)`
	width: 100px;
    &:hover~${Animation} {
        width: 100px;
	    left: 0;
    }
`
export const Lien2 = styled(Lien)`
    width: 100px;
    &:hover~${Animation} {
        width: 100px;
	    left: 100px;
    }
`
export const Lien3 = styled(Lien)`
    width: 100px;
    &:hover~${Animation} {
        width: 100px;
	    left: 200px;
    }`
export const Lien4 = styled(Lien)`
    width: 100px;

    &:hover~${Animation} {
        width: 100px;
	    left: 300px;
    }
`
export const Lien5 = styled(Lien)`
    width: 150px;
    &:hover~${Animation} {
        width: 150px;
	    left: 400px;
    }
`
export const Button = styled.div`
margin: 5px;
`;

