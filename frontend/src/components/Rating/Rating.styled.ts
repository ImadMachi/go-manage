import styled from "styled-components";

export const Container=styled.div`

`
interface IconProps {
    checked?:boolean
}
export const Icon=styled.span<IconProps>`
    color: ${({checked=false})=>checked?'#ffcc5a':'#74788d'};
    font-size: 12px;

`
