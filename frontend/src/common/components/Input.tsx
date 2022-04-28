import * as S from "./Input.styled";

interface InputProps {
  placeholder: string;
}
const Input = ({ placeholder }: InputProps) => {
  return <S.Input placeholder={placeholder} />;
};

export default Input;
