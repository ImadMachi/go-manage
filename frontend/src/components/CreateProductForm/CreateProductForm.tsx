import { Group, Input, InputWrapper, NumberInput, Select, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useState } from "react";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { createProduct } from "../../features/thunks/productsThunk";
import * as S from "./CreateProductForm.styled";

interface CreateProductFormProps {
  onCloseModal: () => void;
}
const CreateProductForm = ({ onCloseModal }: CreateProductFormProps) => {
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState<File | null>();

  const form = useForm<{
    price: number;
    category: string;
    title: string;
    rating: string;
    stock: number;
    description: string;
  }>({
    initialValues: {
      price: 0,
      category: "test",
      title: "test",
      rating: "1",
      stock: 0,
      description: "test",
    },
    validate: (values) => ({
      price: values.price < 0 ? "Price should be greater than 0" : null,
      title: values.title.length < 2 ? "Title length should be greater than 2" : null,
    }),
  });

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const submitHandler = async (values: typeof form.values) => {
    if (!selectedImage) return;
    try {
      const base64Image = (await getBase64(selectedImage)) as string;

      const result = await dispatch(createProduct({ ...form.values, rating: Number(form.values.rating), image: base64Image })).unwrap();

      // onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  const changeFileHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;
    setSelectedImage(file);
  };
  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <S.Grid>
        <TextInput mb={15} label="Title" placeholder="enter title.." {...form.getInputProps("title")} required />
        <TextInput mb={15} label="Category" placeholder="enter category.." {...form.getInputProps("category")} required />
      </S.Grid>

      <Textarea mb={15} placeholder="enter description" label="Description" {...form.getInputProps("description")} required />

      <S.Grid>
        <NumberInput mb={15} label="Price" placeholder="enter Price.." {...form.getInputProps("price")} required />
        <Select
          mb={15}
          label="Rating"
          placeholder="Rating"
          data={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
          ]}
          required
          {...form.getInputProps("rating")}
        />
      </S.Grid>

      <S.Grid>
        <NumberInput mb={15} label="Stock" placeholder="enter stock.." {...form.getInputProps("stock")} required />
        <InputWrapper required label="Image">
          <Input type="file" placeholder="select file" id="fileinput" onChange={changeFileHandler} required />
        </InputWrapper>
      </S.Grid>
      <Group position="right" mt="md">
        <Button type="submit">Add Product</Button>
      </Group>
    </form>
  );
};

export default CreateProductForm;
