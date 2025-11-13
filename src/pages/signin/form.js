import React from "react";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { Form } from "react-bootstrap";

export default function SignForm({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label={"Email"}
        name="email"
        value={form?.email}
        type="email"
        placeholder={"Enter your email"}
        onChange={handleChange}
      />

      <TextInputWithLabel
        label={"Password"}
        name="password"
        value={form?.password}
        type="password"
        placeholder={"Enter your password"}
        onChange={handleChange}
      />

      <SButton
        loading={isLoading}
        disabled={isLoading}
        className="mt-3"
        variant="primary"
        action={handleSubmit}
      >
        Submit
      </SButton>
    </Form>
  );
}
