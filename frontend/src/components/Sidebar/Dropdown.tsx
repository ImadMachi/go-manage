import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavLink from "../../common/components/NavLink";

import * as S from "./Dropdown.styled";

interface DropdownProps {
  title: string;
  items: string[];
  maxHeight: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, children, maxHeight }) => {
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
      <S.ItemsList isOpen={isOpen} maxHeight={maxHeight}>
        {items.map((item) => (
          <NavLink to={`${item}`} key={item}>
            <S.Item>{item}</S.Item>
          </NavLink>
        ))}
      </S.ItemsList>
    </S.Dropdown>
  );
};

export default Dropdown;
