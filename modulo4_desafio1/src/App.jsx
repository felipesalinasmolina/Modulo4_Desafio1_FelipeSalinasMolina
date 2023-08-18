import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./assets/components/Cards";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/header";

function App() {
  return (
    <>
     <Header title="Adopta un Michi" />
      <div className="catalogo">
        
          <Cards
            name="Cholito"
            image="https://imgmedia.elpopular.pe/640x345/elpopular/original/2022/05/26/628ffb8b492cbf7ea77a898f.webp"
            textoAlt="gato negro"
            descrption="soy pequeño y jugueton y busco una nueva familia para darle mi amor"
            color="primary"
            raza="mestizo egipcio"
          />
      
        <Cards
          name="Onur"
          image="https://okdiario.com/img/2021/04/20/curiosidades-sobre-los-gatos-domesticos.jpg"
          textoAlt="gato blaco y amarillo"
          descrption="Mi hobbie es mantener los hogares libre de ratones"
          color="secondary"
          raza="mestizo britanico"
        />
        <Cards
          name="Kitty"
          image="https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"
          textoAlt="gato blanco y gris"
          descrption="soy pequeña y me guat pasar horas mirando por la ventana"
          color="success"
          raza="mestizo frances"
        />
        <Cards
          name="Garfield"
          image="https://mott.pe/noticias/wp-content/uploads/2018/04/tips-que-te-ayudar%C3%A1n-a-tomar-incre%C3%ADbles-fotograf%C3%ADas-de-gatos-portada1.1.jpg"
          textoAlt="gato blanco y gris oscuro"
          descrption="Me gusta la lasaña y odio los lunes"
          color="info"
          raza="mestizo ruso"
        />
      </div>

     <footer>
     <Footer description="Explora nuestra galería de adopción de gatos para encontrar a tu compañero perfecto. Tenemos una variedad de gatos con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esenca única. Adopta un gato y brindale una segunda oportunidad. Encuentra a tu compañero gatuno para siempre." />
      </footer> 
    </>
  );
}

export default App;
