import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import { Contact } from "../../apps/web/modules/contact/types";

type Props = {
  contact: Contact;
};

export function CardContact({ contact }: Props) {
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
              <time dateTime="2016-1-1">Criado em 11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Edit
            </a>
            <a href="#" className="card-footer-item">
              Delete
            </a>
          </footer>
        </>
      )}
    </div>
  );
}
