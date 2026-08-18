import { useMemo } from 'react'

const SIMBOLOS_POR_MUNDO = {
  romance: ['🌸', '🌷', '💮', '🍃'],
  fantasia: ['✨', '💫', '🌟', '✦'],
  suspense: ['💧', '🌧️', '💧', '🌫️'],
}

function Particulas({ genero }) {
  const simbolos = SIMBOLOS_POR_MUNDO[genero] || SIMBOLOS_POR_MUNDO.fantasia

  const particulas = useMemo(() => {
    const seed = [...genero].reduce((acc, c) => acc + c.charCodeAt(0), 0)
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      simbolo: simbolos[i % simbolos.length],
      left: ((i * 61 + seed * 7) % 97) + 1,
      tamanho: 14 + ((i * 37 + seed * 3) % 17),
      duracao: 11 + ((i * 23 + seed * 5) % 11),
      atraso: ((i * 53 + seed * 11) % 80) / 10,
    }))
  }, [genero, simbolos])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {particulas.map((p) => (
        <span
          key={p.id}
          className="particula absolute"
          style={{
            left: `${p.left}%`,
            bottom: '-8%',
            fontSize: `${p.tamanho}px`,
            opacity: 0,
            animation: `flutuar ${p.duracao}s linear ${p.atraso}s infinite`,
          }}
        >
          {p.simbolo}
        </span>
      ))}
    </div>
  )
}

export default Particulas