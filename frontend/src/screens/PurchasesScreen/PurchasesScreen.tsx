import { useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./PurchaseScreen.styled";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Purchase } from "../../models/purchaseModel";
import { usePurchases } from "../../hooks/usePurchase";
import EditPurchaseForm from "../../components/EditPurchaseForm";
import CreatePurchaseForm from "../../components/CreatePurchaseForm";
import PurchasesTable from "../../components/PurchasesTable";

const PAGE_SIZE = 10;

const PurchasesScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [ourchaseToEdit, setPurchaseToEdit] = useState<Partial<Purchase>>({
    creationDate: new Date().toISOString(),
  });
  const [ourchaseToView, setPurchaseToView] = useState<Purchase>();

  const [width, ref] = useElementWidth();

  const { loading, error, purchases } = usePurchases();

  const displayedPurchases = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return (
      purchases
        // .filter((ourchase) => ourchase.toLowerCase().includes(searchCriteria.toLowerCase()))
        .slice(firstPageIndex, lastPageIndex)
    );
  }, [activePage, purchases]);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editPurchaseHandler = (ourchase: Purchase) => {
    setPurchaseToEdit(ourchase);
    setIsEditModalOpen(true);
  };

  return (
    <S.Screen>
      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Purchase</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreatePurchaseForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={<S.ModalTitle>Edit Purchase</S.ModalTitle>}
        size={550}
        centered={true}
      >
        {/* @ts-ignore */}
        <EditPurchaseForm onCloseModal={() => setIsEditModalOpen(false)} purchase={ourchaseToEdit} />
      </Modal>

      <S.Title>Purchases</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search placeholder="search.." onChange={(e) => setSearchCriteria(e.target.value)} />
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Add Purchase
          </Button>
        </Flex>
        {!!purchases && <PurchasesTable items={displayedPurchases} width={width} editPurchaseHandler={editPurchaseHandler} />}
        <Pagination page={activePage} total={purchases.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default PurchasesScreen;
