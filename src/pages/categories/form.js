import { Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function CategoriesForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label={"Category Name"}
        placeholder={"input category name"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <SButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Change" : "Save"}
      </SButton>
    </Form>
  );
}
