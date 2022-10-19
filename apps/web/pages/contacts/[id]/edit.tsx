import { Formik, Form } from "formik";
import { Header, MainLayout, Input, Button } from "ui";
import ContactsService from "../../../modules/contact/service";
import { Contact } from "../../../modules/contact/types";
import contactSchema from "../../../modules/contact/schemas/contactPostSchema";
import { useRouter } from "next/router";
import Alerts from "../../../service/sw-alert";

type Props = {
  contact: Contact;
};

export default function EditContact({ contact }: Props) {
  const contactsService = new ContactsService();
  const router = useRouter();

  async function onSubmit(values: Contact) {
    try {
      await contactsService.put(values);
      await Alerts.success("Contato editado com sucesso!");
      router.back();
    } catch (err) {
      await Alerts.httpError(err, "Erro ao editar contato!");
    }
  }

  return (
    <>
      <Header page="Editar" />
      <MainLayout>
        <h1
          className="title mt-2"
          style={{
            textAlign: "center",
          }}
        >
          Editar contato
        </h1>
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <Formik
              initialValues={{
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
              }}
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
                    value={values.email ?? ""}
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
                    <Button color="info" type="submit" text="Editar" />
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

export async function getServerSideProps({ query }: any) {
  const id = Number(query.id);

  const contactsService = new ContactsService();
  const contact = await contactsService.getById(id);

  console.log(contact);

  return {
    props: {
      contact,
    },
  };
}
