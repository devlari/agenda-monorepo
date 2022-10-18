import "bulma/css/bulma.min.css";
import { Button } from "ui";
import { GrAddCircle } from "react-icons/gr";
import { useRouter } from "next/router";

export default function Web() {
  const router = useRouter();

  return (
    <>
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item" href="/contacts">
                    Meus contatos
                  </a>
                  <span className="navbar-item">
                    <a
                      onClick={() => {
                        router.push("/new");
                      }}
                      className="button is-info is-inverted"
                    >
                      <GrAddCircle className="mr-2" />
                      <span>Novo contato</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Meus Contatos</p>
            <p className="subtitle">Organize seus contatos aqui.</p>
            <Button
              onClick={() => router.push("/new")}
              color="white"
              outlined
              type="button"
              text="Novo contato"
            />
          </div>
        </div>
      </section>
    </>
  );
}
