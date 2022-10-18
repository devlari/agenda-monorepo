import { MainLayout, Header, ListContacts } from "ui";
import ContactsService from "../../modules/contact/service";
import { Contact } from "../../modules/contact/types";

type Props = {
  contacts: Contact[];
};

export default function Contacts({ contacts }: Props) {
  return (
    <>
      <Header page="Meus contatos" />
      <MainLayout>
        <h1 className="title mt-2" style={{ textAlign: "center" }}>
          Contatos
        </h1>
        <ListContacts letter="L" contacts={contacts} />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const contactsService = new ContactsService();
  const contacts = await contactsService.get();

  return {
    props: {
      contacts,
    },
  };
}
