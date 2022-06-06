import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group, NumberInput, Select } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { createPurchase } from "../../features/thunks/purchaseThunk";
import { useProducts } from "../../hooks/useProducts";
import { useSuppliers } from "../../hooks/useSupplier";
import * as S from "./CreatePurchaseForm.styled";

interface CreatePurchaseFormProps {
  onCloseModal: () => void;
}
const CreatePurchaseForm = ({ onCloseModal }: CreatePurchaseFormProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Array<{ id: number; qty: number }>>([]);
  const dispatch = useAppDispatch();
  const { loading: suppliersLoading, error: suppliersError, suppliers } = useSuppliers();
  const { loading: productsLoading, error: productsError, products: loadedProducts } = useProducts();

  const form = useForm<{
    creationDate: Date;
    supplierId: string;
    products: Array<{ id: number; qty: number }>;
    // paymentMethod: string;
    // vat: number;
  }>({
    initialValues: { creationDate: new Date(), supplierId: "", products: []},
    validate: (values) => ({
      // vat: values.vat < 0 ? "Invalid VAT" : null,
    }),
  });

  useEffect(() => {
    form.setFieldValue("products", selectedProducts);
  }, [selectedProducts]);

  const handleQtyPlus = (id: number) => {
    setSelectedProducts((products) =>
      products.map((p) => {
        if (p.id === id) {
          return { ...p, qty: p.qty + 1 };
        }
        return p;
      })
    );
  };

  const handleQtyMinus = (id: number) => {
    setSelectedProducts((products) =>
      products.map((p) => {
        if (p.id === id && p.qty > 1) {
          return { ...p, qty: p.qty - 1 };
        }
        return p;
      })
    );
  };

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(
        createPurchase({ ...form.values, creationDate: form.values.creationDate.toISOString(), supplierId: +form.values.supplierId })
      ).unwrap();

      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <S.Grid>
        <Select
          mb={15}
          label="Supplier"
          placeholder="Supplier"
          searchable
          nothingFound="No suppliers"
          data={suppliers.map((supplier) => ({ value: String(supplier.id), label: supplier.name }))}
          required
          {...form.getInputProps("supplierId")}
        />
        <DatePicker mb={15} placeholder="Pick date" label="Creation Date" required {...form.getInputProps("creationDate")} />
      </S.Grid>
      <Select
        mb={15}
        label="Product"
        placeholder="Product"
        searchable
        nothingFound="No Product"
        onChange={(value) =>
          value && selectedProducts.every((p) => p.id !== +value) && setSelectedProducts([...selectedProducts, { id: +value, qty: 1 }])
        }
        data={loadedProducts.map((product) => ({ value: String(product.id), label: `${product.title} ($${product.price})` }))}
        required
      />
      <div>
        {selectedProducts.map((product) => {
          const foundProduct = loadedProducts.find((_) => _.id === product.id);
          return (
            <S.SelectedProduct key={product.id}>
              <span>{foundProduct?.title}</span>
              <span>${foundProduct?.price}</span>
              <span>
                <FontAwesomeIcon icon={faPlus} onClick={() => handleQtyPlus(product.id)} />
                {product.qty}
                <FontAwesomeIcon icon={faMinus} onClick={() => handleQtyMinus(product.id)} />
              </span>
            </S.SelectedProduct>
          );
        })}
      </div>
      {/* <S.Grid>
        <Select
          mb={15}
          label="Payment Method"
          placeholder="payment method"
          data={[
            { value: "visa", label: "VISA" },
            { value: "mastercard", label: "MASTERCARD" },
            { value: "paypal", label: "PAYPAL" },
          ]}
          required
          {...form.getInputProps("paymentMethod")}
        />
        <NumberInput mb={15} label="VAT" placeholder="enter VAT percentage" {...form.getInputProps("vat")} />
      </S.Grid> */}

      <Group position="right" mt="md">
        <Button type="submit">Add Purchase</Button>
      </Group>
    </form>
  );
};

export default CreatePurchaseForm;
