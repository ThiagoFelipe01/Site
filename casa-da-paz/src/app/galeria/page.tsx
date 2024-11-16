import { LayoutBody } from "../components/LayoutBody/page";
import { LayoutFooter } from "../components/LayoutFooter/page";
import { LayoutHeader } from "../components/LayoutHeader/page";

export default function Galeria() {

    return (
        <>

            <LayoutHeader />
            <br />
            <h2 className="container">Galeria</h2>
            <hr style={{ border: 'solid 2px' }} className='container mt-2 mb-4' />

            <div className="container mt-4">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <img src="./galeria/imagem1.jpeg" className="img-fluid rounded" alt="Imagem 1" />

                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <img src="./galeria/imagem2.jpeg" className="img-fluid rounded" alt="Imagem 2" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <img src="./galeria/imagem3.jpeg" className="img-fluid rounded" alt="Imagem 3" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <img src="./galeria/imagem4.jpeg" className="img-fluid rounded" alt="Imagem 4" />
                    </div>
                </div>
            </div>

            <LayoutFooter />

        </>
    )
}