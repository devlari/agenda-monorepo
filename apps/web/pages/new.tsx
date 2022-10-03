import { Button, MainLayout, Header, Input } from "ui";
import "bulma/css/bulma.min.css";
import { Form, Formik } from "formik";
import contactSchema from "../modules/contact/schemas/contactPostSchema";
import { Contact } from "../modules/contact/types";

export default function New() {
  async function onSubmit(values: Contact) {
    console.log(values);
  }

  return (
    <>
      <Header page="Cadastro" />
      <MainLayout>
        <h1
          className="title mt-2"
          style={{
            textAlign: "center",
          }}
        >
          Novo contato
        </h1>
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <Formik
              initialValues={{ name: "", email: "", phone: "" }}
              onSubmit={onSubmit}
              validationSchema={contactSchema}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form>
                  <Input
                    value={values.name}
                    name="name"
                    type="text"
                    onChange={handleChange}
                    placeholder="Nome"
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                  <Input
                    value={values.phone}
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    placeholder="Telefone"
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                  <Input
                    value={values.email}
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="E-mail"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button color="info" type="submit" text="Cadastrar" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
