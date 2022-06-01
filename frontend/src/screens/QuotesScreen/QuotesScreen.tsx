import { useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import { useQuotes } from "../../hooks/useQuotes";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./QuotesScreen.styled";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Quote } from "../../models/quoteModel";
import QuotesTable from "../../components/QuotesTable/QuotesTable";
// import EditQuoteForm from "../../components/EditQuoteForm";
// import CreateQuoteForm from "../../components/CreateQuoteForm";

const PAGE_SIZE = 10;

const QuotesScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  // const [quoteToEdit, setQuoteToEdit] = useState<Partial<Quote>>({
  //   creationDate: new Date().toISOString(),
  //   paymentStatus: "",
  //   paymentMethod: "",
  //   paymentDate: new Date().toISOString(),
  //   deliveryStatus: "",
  //   deliveringDate: new Date().toISOString(),
  //   vat: 0,
  // });
  const [quoteToView, setQuoteToView] = useState<Quote>();

  const [width, ref] = useElementWidth();

  const { loading, error, quotes } = useQuotes();

  const displayedQuotes = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return (
      quotes
        // .filter((quote) => quote.toLowerCase().includes(searchCriteria.toLowerCase()))
        .slice(firstPageIndex, lastPageIndex)
    );
  }, [activePage, quotes]);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editQuoteHandler = (quote: Quote) => {
    // setQuoteToEdit(quote);
    setIsEditModalOpen(true);
  };


  return (
    <S.Screen>
      {/* <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Quote</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateQuoteForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal> */}

      {/* <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={<S.ModalTitle>Edit Quote</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <EditQuoteForm onCloseModal={() => setIsEditModalOpen(false)} quote={quoteToEdit} />
      </Modal>
      */}


      <S.Title>Quotes</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search placeholder="search.." onChange={(e) => setSearchCriteria(e.target.value)} />
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Add Quote
          </Button>
        </Flex>
        {!!quotes && (
          <QuotesTable
            items={displayedQuotes}
            width={width}
            editQuoteHandler={editQuoteHandler}
          />
        )}
        <Pagination page={activePage} total={quotes.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default QuotesScreen;
