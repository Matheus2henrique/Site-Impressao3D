import { Coracao, Download } from './Icones'

function formatar(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',')} mil` : String(n)
}

function Card({ nome, imagem, categoria, id, onClick }) {
  const likes = id ? (id * 173) % 8000 + 150 : 0
  const downloads = id ? (id * 97) % 5000 + 300 : 0

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-[18px] overflow-hidden text-left shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-350 ease-in-out cursor-pointer hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {categoria && (
          <span className="absolute top-3 left-3 bg-white/90 text-[#13233c] text-xs font-semibold px-3 py-1 rounded-full shadow">
            {categoria}
          </span>
        )}
      </div>

      <div className="p-[16px]">
        <h3 className="text-[#13233c] text-lg font-semibold leading-snug">{nome}</h3>

        <div className="mt-3 flex items-center justify-between text-[#6b7280] text-sm">
          <span className="flex items-center gap-1.5">
            <Coracao className="w-4 h-4 text-[#13233c]" />
            {formatar(likes)}
          </span>
          <span className="flex items-center gap-1.5">
            <Download className="w-4 h-4 text-[#13233c]" />
            {formatar(downloads)}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onClick()
          }}
          className="mt-4 w-full border-none bg-[#13233c] text-white py-3 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#1f3a62]"
        >
          Personalizar
        </button>
      </div>
    </div>
  );
}

export default Card;