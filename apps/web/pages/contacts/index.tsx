import { useRouter } from "next/router";
import { MainLayout, Header, ListContacts } from "ui";
import ContactsService from "../../modules/contact/service";
import { Contact } from "../../modules/contact/types";
import Alerts from "../../service/sw-alert";

type Props = {
  contacts: Contact[];
};

export default function Contacts({ contacts }: Props) {
  const contactsService = new ContactsService();
  const router = useRouter();
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  async function handleDelete(id: number) {
    const confirm = await Alerts.confirm("Deseja realmente excluir o contato?");

    if (!confirm) return;

    try {
      await contactsService.delete(id);
      await Alerts.success("Contato excluído com sucesso!");
      router.reload();
    } catch (error) {
      Alerts.httpError(error, "Erro ao excluir o contato!");
    }
  }

  async function handleEdit(id: number) {
    router.push(`/contacts/${id}/edit`);
  }

  return (
    <>
      <Header page="Meus contatos" />
      <MainLayout>
        <h1 className="title mt-2" style={{ textAlign: "center" }}>
          Contatos
        </h1>
        {letters.map((letter) => (
          <ListContacts
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={letter}
            letter={letter}
            contacts={contacts.filter((contact) => contact.name[0] == letter)}
          />
        ))}
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
