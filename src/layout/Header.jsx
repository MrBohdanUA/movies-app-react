function Header() {
  return (
    <nav className="green darken-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/MrBohdanUA/movies-app-react">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
