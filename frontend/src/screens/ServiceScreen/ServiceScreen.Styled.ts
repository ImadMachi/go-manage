import styled from "styled-components";

export const Container =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
    gap: 10px;
    justify-items: center;
    @media (min-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    } `