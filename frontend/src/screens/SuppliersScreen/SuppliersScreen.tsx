import { useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import { useElementWidth } from "../../hooks/useElementWidth";
import { ThemeContext } from "../..";
import * as S from "./SuppliersScreen.styled";
import CreateSupplierForm from "../../components/CreateSupplierForm";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Supplier } from "../../models/supplierModel";
import EditSupplierForm from "../../components/EditSupplierForm";
import SuppliersTable from "../../components/SuppliersTable/SuppliersTable";
import { fileToBase64 } from "../../utils/fileToBase64";
import { useSuppliers } from "../../hooks/useSupplier";

const PAGE_SIZE = 10;

const SuppliersScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [supplierToEdit, setSupplierToEdit] = useState<Supplier>({
    id: -1,
    name: "",
    email: "",
    address: "",
    phone: "",
    isActive: true,
    // totalSpent: -1,
    // orders: -1,
    creationDate: -1,
  });

  const [width, ref] = useElementWidth();

  const { loading, error, suppliers } = useSuppliers();

  const displayedSuppliers = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return suppliers
      .filter((supplier) => supplier.name.toLowerCase().includes(searchCriteria.toLowerCase()))
      .slice(firstPageIndex, lastPageIndex);
  }, [activePage, suppliers, searchCriteria]);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editSupplierHandler = (supplier: Supplier) => {
    setSupplierToEdit(supplier);
    setIsEditModalOpen(true);
  };

  // const [file, setFile] = useState<File>();

  // const HandleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // @ts-ignore
  //   setFile((prev) => e.target.files[0]);
  //   if (file) {
  //     const base64 = (await fileToBase64(file)) as string;
  //   }
  // };
  return (
    <S.Screen>
      {/* <input type="file" value="" onChange={HandleChange} /> */}

      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Supplier</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateSupplierForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={<S.ModalTitle>Edit Supplier</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <EditSupplierForm onCloseModal={() => setIsEditModalOpen(false)} supplier={supplierToEdit} />
      </Modal>
      <S.Title>Suppliers</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search placeholder="search.." onChange={(e) => setSearchCriteria(e.target.value)} />
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Add Supplier
          </Button>
        </Flex>
        {!!suppliers && <SuppliersTable items={displayedSuppliers} width={width} editSupplierHandler={editSupplierHandler} />}
        <Pagination page={activePage} total={suppliers.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default SuppliersScreen;
