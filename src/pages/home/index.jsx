import { useNavigate } from "react-router-dom";
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import MainContent from '../../components/MainContent';
import Cards from '../../components/Cards'
import Footer from '../../components/Footer';
import '../../App.scss';

export function HomePage() {
       const navigate = useNavigate();

      return (
        <div>
        <header>
          <NavBar user="" title="Entrar" onClick={() => navigate("/login")}/>
        </header>
        <div className='body'>
  
        <div className="content">
          <main>
            <MainContent />
          </main>
          <aside>
            <SideBar />
          </aside>
        </div>
  
        <section className="cards-container">
          <Cards
            title="Detecção Oportuna"
            text="Oferece alertas rápidos e anônimos, permitindo a detecção imediata de casos de doenças e ações preventivas eficazes."
          />
          <Cards
            title="Conscientização Pública"
            text="A seção educacional fornece informações em tempo real, promovendo práticas saudáveis e elevando a conscientização sobre doenças respiratórias na comunidade."
          />
          <Cards
            title="Privacidade e Anonimato"
            text="Respeitamos a privacidade dos usuários, permitindo o registro anônimo de casos, incentivando a participação ativa na prevenção de doenças."
          />
        </section>
        </div>
  
        <Footer />
      </div>
    );
  }
  