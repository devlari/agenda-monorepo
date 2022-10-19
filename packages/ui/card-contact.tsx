import { CaretDown, CaretUp, PencilLine, Trash } from "phosphor-react";
import { useState } from "react";
import { Contact } from "../../apps/web/modules/contact/types";

type Props = {
  contact: Contact;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
};

export function CardContact({ contact, handleDelete, handleEdit }: Props) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div className="card mb-3">
      <a
        style={{
          color: "inherit",
        }}
        onClick={() => setIsCardOpen(!isCardOpen)}
      >
        <header className="card-header">
          <p className="card-header-title">{contact.name}</p>
          <button className="card-header-icon">
            <span className="icon">
              {isCardOpen ? <CaretUp /> : <CaretDown />}
            </span>
          </button>
        </header>
      </a>

      {isCardOpen && (
        <>
          <div className="card-content">
            <div className="content">
              <strong>Telefone: </strong>
              {contact.phone}
              {contact.email && (
                <>
                  <br />
                  <strong>Email: </strong>
                  {contact.email}
                </>
              )}
              <br />
              <time>Criado em {contact.createdAt}</time>
            </div>
          </div>
          <footer className="card-footer">
            <a
              href="#"
              onClick={() => {
                if (!contact.id) return;

                handleEdit(contact.id);
              }}
              className="card-footer-item"
            >
              <PencilLine size={32} color="orange" />
            </a>
            <a
              href="#"
              onClick={() => {
                if (!contact.id) return;

                handleDelete(contact.id);
              }}
              className="card-footer-item"
            >
              <Trash size={32} color="red" />
            </a>
          </footer>
        </>
      )}
    </div>
  );
}
