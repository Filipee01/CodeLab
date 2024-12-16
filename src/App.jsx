import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="overflow-x-hidden w-[440px] h-[1348px] bg-dark_10">
      <Header />
      <Cards
        data="17 de ago, 2024"
        isFilled="true"
        title="O que é linguagem de programação? Conheça as principais"
        paragraph="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
      />
      <Cards
        data="12 de jul, 2024"
        title="GitHub agora permite fazer login sem precisar de senha"
        paragraph="O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."
      />
      <Cards
        data="21 de jun, 2024"
        title="Por que os hiperlinks são azuis em sua maioria?"
        paragraph="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."
      />
    </div>
  );
}

export default App;
