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
              schema={contactSchema}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form>
                  <Input
                    value={values.name}
                    name="name"
                    type="text"
                    onChange={handleChange}
                    placeholder={errors.name ? errors.name : "Nome"}
                    error={!!errors.name}
                  />
                  <Input
                    value={values.phone}
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    placeholder={errors.phone ? errors.phone : "Telefone"}
                    error={!!errors.phone}
                  />
                  <Input
                    value={values.email}
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder={errors.email ? errors.email : "E-mail"}
                    error={!!errors.email}
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
