import * as S from "./Sidebar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const Sidebar = () => {
  const commerceItems = { title: "Commerce", items: ["clients", "commandes", "produits"] };
  const crmItems = { title: "CRM", items: ["companies", "contacts", "leads", "deals"] };

  return (
    <S.Sidebar>
      <S.Logo>
        <FontAwesomeIcon icon={faUser} />
        gomanage
      </S.Logo>
      <S.Title>APP</S.Title>
      <Dropdown {...commerceItems}>
        <FontAwesomeIcon icon={faShop} />
      </Dropdown>
      <Dropdown {...crmItems}>
        <FontAwesomeIcon icon={faUsers} />
      </Dropdown>
    </S.Sidebar>
  );
};

export default Sidebar;
