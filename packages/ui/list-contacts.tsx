import { Contact } from "../../apps/web/modules/contact/types";
import { CardContact } from "./card-contact";
import { Divider } from "./divider";

type Props = {
  letter: string;
  contacts: Contact[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
};

export function ListContacts({
  letter,
  contacts,
  handleDelete,
  handleEdit,
}: Props) {
  return (
    <>
      {contacts.length > 0 && (
        <>
          <Divider letter={letter} />
          {contacts.map((contact) => (
            <div className="columns">
              <div className="column is-offset-2 is-8 bg-info">
                <CardContact
                  key={contact.id}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  contact={contact}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
