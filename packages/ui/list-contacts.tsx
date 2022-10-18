import { Contact } from "../../apps/web/modules/contact/types";
import { CardContact } from "./card-contact";
import { Divider } from "./divider";

type Props = {
  letter: string;
  contacts: Contact[];
};

export function ListContacts({ letter, contacts }: Props) {
  return (
    <>
      <Divider letter={letter} />
      {contacts.map((contact) => (
        <div className="columns">
          <div className="column is-offset-2 is-8 bg-info">
            <CardContact contact={contact} />
          </div>
        </div>
      ))}
    </>
  );
}
