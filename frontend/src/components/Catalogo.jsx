import Card from './Card';
import { produtos } from '../data/produtos'

function Catalogo({ onSelecionarProduto, filtroAtivo, setFiltroAtivo }) {
  const filtros = ["Todos", "Chaveiros", "Colecionáveis", "Household", "Educacional"]

  const produtosFiltrados =
    filtroAtivo === "Todos"
      ? produtos.filter(p => p.categoria === "Todos")
      : produtos.filter(p => p.categoria === filtroAtivo)

  const ativo = "bg-[#222] text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
  const inativo = "bg-[#eee] text-black hover:scale-105 hover:bg-[#222] hover:text-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"

  return (
    <section id="catalogo" className="py-[70px] text-center">
      <h2 className="text-5xl text-[#13233c] font-[Georgia,serif]">Sua criatividade ganha forma!</h2>
      <p className="mt-5 text-[#312c2c]">
        Descubra modelos exclusivos e personalize cada detalhe para criar objetos únicos em impressão 3D.
      </p>

      <div className="mt-10 flex justify-center gap-[15px]">
        {filtros.map((filtro) => (
          <button
            key={filtro}
            className={`border-none px-[22px] py-3 rounded-full cursor-pointer text-xl transition-all duration-300 ease-in-out ${
              filtroAtivo === filtro ? ativo : inativo
            }`}
            onClick={() => setFiltroAtivo(filtro)}
          >
            {filtro}
          </button>
        ))}
      </div>

      <div className="w-4/5 mx-auto mt-[50px] grid grid-cols-4 gap-[30px]">
        {produtosFiltrados.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            imagem={produto.imagem}
            categoria={produto.categoria}
            onClick={() => onSelecionarProduto(produto)}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;