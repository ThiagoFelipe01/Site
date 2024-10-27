
import styles from './styles.module.css'
export const LayoutHeader = () => {

    return (
        <>
        <head>
            <title>Casa da Paz</title>
        </head>

        <header>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Como Ajudar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bazar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Galeria</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Memorial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Transparencia</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </header>
        <body >
            
        </body>
        
        </>
    )
}