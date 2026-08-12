import { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Catalogo from './components/Catalogo'
import ProdutoDetalhe from './components/ProdutoDetalhe'
import Perfil from './components/Perfil'

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [filtroAtivo, setFiltroAtivo] = useState("Todos")
  const [deveRolarCatalogo, setDeveRolarCatalogo] = useState(false)
  const [mostrarPerfil, setMostrarPerfil] = useState(false)

  const handleFiltroChange = (filtro) => {
    setFiltroAtivo(filtro);
    setProdutoSelecionado(null);
    setDeveRolarCatalogo(true);
  };

  useEffect(() => {
    if (deveRolarCatalogo) {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
      setDeveRolarCatalogo(false);
    }
  }, [deveRolarCatalogo, filtroAtivo]);

  function handleMostrarPerfil() {
    setProdutoSelecionado(null)
    setMostrarPerfil(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleVoltarDoPerfil() {
    setMostrarPerfil(false)
    setDeveRolarCatalogo(true)
  }

  function handleSelecionarProduto(produto) {
    setProdutoSelecionado(produto)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full">
      <Header filtroAtivo={filtroAtivo} setFiltroAtivo={handleFiltroChange} onMostrarPerfil={handleMostrarPerfil} />
      {mostrarPerfil ? (
        <Perfil onVoltar={handleVoltarDoPerfil} />
      ) : !produtoSelecionado ? (
        <>
          <Banner />
          <Catalogo onSelecionarProduto={handleSelecionarProduto} filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo} />
        </>
      ) : (
        <ProdutoDetalhe
          produto={produtoSelecionado}
          onVoltar={() => setProdutoSelecionado(null)}
          onSelecionar={handleSelecionarProduto}
        />
      )}
    </div>
  );
}

export default App
