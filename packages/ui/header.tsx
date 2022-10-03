import "bulma/css/bulma.min.css";

type Props = {
  page: string;
};

export function Header({ page }: Props) {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className={`navbar-item ${page == "Home" && "is-active"}`}>Home</a>

          <a className={`navbar-item ${page == "Cadastro" && "is-active"}`}>
            Cadastro
          </a>

          <a
            className={`navbar-item ${page == "Meus contatos" && "is-active"}`}
          >
            Meus contatos
          </a>
        </div>
      </div>
    </nav>
  );
}
