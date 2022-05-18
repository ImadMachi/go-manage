import { RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faUsers } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import * as S from "./Sidebar.styled";

const commerceItems = { title: "Commerce", items: ["customers", "orders", "products", "services", "stocks"] };
const crmItems = { title: "CRM", items: ["companies", "contacts", "leads", "deals"] };

interface SidebarProps {
  forwardedRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
}

const Sidebar = ({ forwardedRef, isOpen }: SidebarProps) => {
  return (
    <S.Sidebar isOpen={isOpen} ref={forwardedRef}>
      <S.Logo src="/images/logo.png"></S.Logo>
      <S.Title>APP</S.Title>
      <Dropdown {...commerceItems} maxHeight={`${commerceItems.items.length * 2.5}rem`}>
        <FontAwesomeIcon icon={faShop} />
      </Dropdown>
      <Dropdown {...crmItems} maxHeight={`${commerceItems.items.length * 2.5}rem`}>
        <FontAwesomeIcon icon={faUsers} />
      </Dropdown>
    </S.Sidebar>
  );
};

export default Sidebar;
