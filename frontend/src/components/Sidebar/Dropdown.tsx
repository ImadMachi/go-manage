import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import * as S from "./Dropdown.styled";

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.Dropdown>
      <S.Title>
        {children} <h2>{title}</h2>
        <S.Icon isOpen={isOpen}>
          <FontAwesomeIcon icon={faCaretDown} onClick={toggleDropdown} />
        </S.Icon>
      </S.Title>
      <S.ItemsList isOpen={isOpen}>
        {items.map((item) => (
          <S.Item key={item}>{item}</S.Item>
        ))}
      </S.ItemsList>
    </S.Dropdown>
  );
};

export default Dropdown;
