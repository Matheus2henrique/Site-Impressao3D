import { useState } from 'react'

function Header({ setFiltroAtivo, onMostrarPerfil }) {
  const [menuAberto, setMenuAberto] = useState(null)
  const filtros = ["Todos", "Chaveiros", "Colecionáveis", "Household", "Educacional"]
  const utensiliosFiltros = ["Enfeites", "Brincos"]
  const novidades = ["Novidade1" , "Novidade2" , "Novidade3"]

  return (
    <header
      onMouseLeave={() => setMenuAberto(null)}
      className="h-[90px] bg-white border-b border-[#ddd] relative"
    >
      <div className="max-w-[1400px] h-full mx-auto flex items-center justify-between px-6">
        <nav className="flex gap-[35px]">
          <ul className="flex gap-[30px] list-none">
            <li onMouseEnter={() => setMenuAberto("pra-vc")} className="relative">
              <a href="" className="no-underline text-[#222] text-base hover:text-[rgb(87,87,117)]">Pra você</a>
              {menuAberto === "pra-vc" && (
                <div
                  onMouseEnter={() => setMenuAberto("pra-vc")}
                  onMouseLeave={() => setMenuAberto(null)}
                  className="fixed left-0 top-[90px] w-full h-[100px] bg-white shadow-lg z-50 flex items-start justify-center pt-10 gap-6"
                >
                  {filtros.map((filtro) => (
                    <span
                      key={filtro}
                      onClick={() => { setFiltroAtivo(filtro); setMenuAberto(null) }}
                      className="text-lg text-[#222] hover:text-[rgb(87,87,117)] cursor-pointer"
                    >
                      {filtro}
                    </span>
                  ))}
                </div>
              )}
            </li>
            <li onMouseEnter={() => setMenuAberto("novidades")}><a href="" className="no-underline text-[#222] text-base hover:text-[rgb(87,87,117)]">Novidades</a>
            {menuAberto === "novidades" && (
                <div
                  onMouseEnter={() => setMenuAberto("novidades")}
                  onMouseLeave={() => setMenuAberto(null)}
                  className="fixed left-0 top-[90px] w-full h-[100px] bg-white shadow-lg z-50 flex items-start justify-center pt-10 gap-6"
                >
                  {novidades.map((filtro) => (
                    <span
                      key={filtro}
                      onClick={() => { setFiltroAtivo("Novidades"); setMenuAberto(null) }}
                      className="text-lg text-[#222] hover:text-[rgb(87,87,117)] cursor-pointer"
                    >
                      {filtro}
                    </span>
                  ))}
                </div>
              )}
            </li>
            <li onMouseEnter={() => setMenuAberto(null)}><a href="" className="no-underline text-[#222] text-base hover:text-[rgb(87,87,117)]">Personalização</a></li>
            <li onMouseEnter={() => setMenuAberto("moda")} className="relative">
              <a href="" className="no-underline text-[#222] text-base hover:text-[rgb(87,87,117)]">Moda</a>
              {menuAberto === "moda" && (
                <div
                  onMouseEnter={() => setMenuAberto("moda")}
                  onMouseLeave={() => setMenuAberto(null)}
                  className="fixed left-0 top-[90px] w-full h-[100px] bg-white shadow-lg z-50 flex items-start justify-center pt-10 gap-6"
                >
                  {filtros.map((filtro) => (
                    <span
                      key={filtro}
                      onClick={() => { setFiltroAtivo(filtro); setMenuAberto(null) }}
                      className="text-lg text-[#222] hover:text-[rgb(87,87,117)] cursor-pointer"
                    >
                      {filtro}
                    </span>
                  ))}
                </div>
              )}
            </li>
            <li onMouseEnter={() => setMenuAberto("utensilios")} className="relative">
              <a href="" className="no-underline text-[#222] text-base hover:text-[rgb(87,87,117)]">Utensílios</a>
              {menuAberto === "utensilios" && (
                <div
                  onMouseEnter={() => setMenuAberto("utensilios")}
                  onMouseLeave={() => setMenuAberto(null)}
                  className="fixed left-0 top-[90px] w-full h-[100px] bg-white shadow-lg z-50 flex items-start justify-center pt-10 gap-6"
                >
                  {utensiliosFiltros.map((filtro) => (
                    <span
                      key={filtro}
                      onClick={() => { setFiltroAtivo("Household"); setMenuAberto(null) }}
                      className="text-lg text-[#222] hover:text-[rgb(87,87,117)] cursor-pointer"
                    >
                      {filtro}
                    </span>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/256/64/64673.png" alt="icon lupa" />
          <img className="w-10 h-10 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png" alt="icon perfil" onClick={onMostrarPerfil}/>
          <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4202/4202388.png" alt="icon carrinho" />
        </div>
      </div>
    </header>
  );
}

export default Header;
