import { useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./StocksScreen.styled";
import CreateStockForm from "../../components/CreateStockForm";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Stock } from "../../models/stockModel";
import EditStockForm from "../../components/EditStockForm";
import { useStocks } from "../../hooks/useStocks";
import StocksTable from "../../components/StocksTable/StocksTable";

const PAGE_SIZE = 10;

const StocksScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [stockToEdit, setStockToEdit] = useState<Stock>({
    id: -1,
    qty: -1,
    creationDate: new Date().toISOString(),
    warehouse: "",
    product: {
      id: -1,
      price: 0,
      title: "",
      image: "",
      rating: -1,
      stock: -1,
      description: "",
      category: "",
    },
  });

  const [width, ref] = useElementWidth();

  const { loading, error, stocks } = useStocks();

  const displayedStocks = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return stocks
      .filter((stock) => stock.warehouse.toLowerCase().includes(searchCriteria.toLowerCase()))
      .slice(firstPageIndex, lastPageIndex);
  }, [activePage, stocks, searchCriteria]);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editStockHandler = (stock: Stock) => {
    setStockToEdit(stock);
    setIsEditModalOpen(true);
  };

  return (
    <S.Screen>
      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Stock</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateStockForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={<S.ModalTitle>Edit Stock</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <EditStockForm onCloseModal={() => setIsEditModalOpen(false)} stock={stockToEdit} />
      </Modal>
      <S.Title>Stocks</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search placeholder="search.." onChange={(e) => setSearchCriteria(e.target.value)} />
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Add Stock
          </Button>
        </Flex>
        {!!stocks && <StocksTable items={displayedStocks} width={width} editStockHandler={editStockHandler} />}
        <Pagination page={activePage} total={stocks.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default StocksScreen;
