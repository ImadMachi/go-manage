import styled from "styled-components";

export const Contact=styled.section`
position: relative;
min-height: 100vh;
padding: 50px 100px;
justify-content: center;
align-items: center;
flex-direction: column;
background: url(images/bh.jpg);
background-size: cover;
`;

export const Container=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: centre;
margin-top:30px;



`;

export const Content=styled.div`
max-width: 100;
text-align: center;
padding:10px;
margin:10px
`;
export const Tp=styled.p`
font-weight: 300;
color: #000;
`;

export const Th2=styled.h2`
font-size: 36;
font-weight: 500;
color: #000;

`;

export const ContactInfo=styled.div`
width: 50%;
display: flex;
flex-direction:column;
`;

export const Box=styled.div`
position:relative;
padding:10px 0;
display: flex;
`;

export const Icon=styled.div`
min-width: 60px;
height: 60px;
background: #fff;
display:flex;
justify-content: center;
align-items: center;
font-size:22px;
border-radius: 50%;
`;
export const Text=styled.div`
display: flex;
margin-left: 20px;
font-size: 16px;
color: #fff;
flex-direction: column;
font-weight: 300;
`;

export const Th=styled.h3`
font-weight: 500;
color: #00bcd4;

`;

export const ContactForm=styled.div`
width: 40%;
padding:40px;
background: #fff;

`;
export const Th22=styled.h2`
font-size:30px;
color:#333;
font-weight: 500;
`;

export const InputBox=styled.div`
position:relative;
width: 100;
margin-top: 10px;
`
export const SInput=styled.input`
width: 100%;
padding: 5px 0;
font-size: 16px;
margin:10px 0;
border:none;
border-bottom: 2px solid #333;
outline:none;
resize: none;



`;

export const Sspan=styled.span`
position: absolute;
left:0;
color:#666;
padding: 5px 0;
font-size: 16px;
margin:10px 0;
pointer-events: none;
transition: 0.55s;
&:focus {
    color:#e91e63;
    font-size: 12px;
    transform: translate(-20px);
}

&:valid {
    color:#e91e63;
    font-size: 12px;
    transform: translate(-20px);
}
`

export const STextArea=styled.textarea`
width: 100%;
padding: 5px 0;
font-size: 16px;
margin:10px 0;
border:none;
border-bottom: 2px solid #333;
outline:none;
resize: none;
&:focus {
    color:#e91e63;
    font-size: 12px;
    transform: translate(-20px);
}

&:valid {
    color:#e91e63;
    font-size: 12px;
    transform: translate(-20px);
}
`;

export const SInpute=styled.input`
width: 100px;
background: #00bcd4;
color:#fff;
border:none;
cursor: pointer;
padding: 10px;
font-size: 18px;

`;

