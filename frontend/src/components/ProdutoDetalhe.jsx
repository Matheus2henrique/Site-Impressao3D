import { useState } from 'react'
import Card from './Card'
import { produtos } from '../data/produtos'
import {
  Estrela,
  Coracao,
  Download,
  Olho,
  Carrinho,
  Check,
  Impressora,
  Relogio,
  Camada,
  SetaEsquerda
} from './Icones'

const PRECOS = {
  Chaveiros: 19.9,
  Colecionáveis: 49.9,
  Household: 59.9,
  Educacional: 79.9,
  Todos: 34.9
}

const INFORMACOES = {
  Chaveiros: {
    descricao:
      'Chaveiro impresso em 3D com impressão em alta resolução, ideal para presentear ou para uso pessoal no dia a dia.\n\nLeve, resistente e com acabamento detalhado que valoriza qualquer chaveiro, bolsa ou mochila. Personalize cores e detalhes do jeito que você imaginar.',
    specs: { material: 'PLA+ premium', cor: 'Multicolor', altura: '3 cm', tempo: '1h 30min', pecas: '2 peças' }
  },
  Colecionáveis: {
    descricao:
      'Figura colecionável impressa em 3D, pensada para quem valoriza arte e detalhes. As peças são impressas separadamente e montadas à mão para um acabamento impecável.\n\nPerfeita para estantes, mesas de trabalho ou como presente especial. Cada detalhe é cuidadosamente reproduzido para encantar colecionadores.',
    specs: { material: 'PLA+ premium', cor: 'Multicolor', altura: '12 cm', tempo: '6h 40min', pecas: '6 peças' }
  },
  Household: {
    descricao:
      'Item decorativo e utilitário para o dia a dia da casa, impresso em 3D com materiais duráveis e acabamento limpo.\n\nUne funcionalidade e estilo para transformar o ambiente, mantendo a qualidade superior da impressão tridimensional',
    specs: { material: 'PETG', cor: '1 ou multicolor', altura: '18 cm', tempo: '5h 20min', pecas: '3 peças' }
  },
  Educacional: {
    descricao:
      'Material educativo criado para tornar o aprendizado visual e interativo. Recurso didático impresso em 3D com precisão, perfeito para escolas, estudos e demonstrações.\n\nEstimula a curiosidade e facilita a compreensão de conceitos de forma tátil e envolvente.',
    specs: { material: 'PLA+ premium', cor: 'Uma cor', altura: '10 cm', tempo: '2h 50min', pecas: '1 peça' }
  },
  Todos: {
    descricao:
      'Modelo exclusivo impresso em 3D com acabamento de alta qualidade. Cada peça é produzida sob demanda e pode ser personalizada conforme a sua preferência de cores, tamanho e detalhes.\n\nTransforme sua ideia em um objeto real, feito especialmente para você.',
    specs: { material: 'PLA+ premium', cor: 'Multicolor', altura: '8 cm', tempo: '4h', pecas: '3 peças' }
  }
}

function formatar(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',')} mil` : String(n)
}

function StatItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-2 text-[#13233c]">
        {icon}
        <span className="text-lg font-bold text-[#13233c]">{value}</span>
      </div>
      <span className="text-xs text-[#888]">{label}</span>
    </div>
  )
}

function SpecCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-[#f7f6f3] rounded-xl px-4 py-3">
      <span className="text-[#13233c]">{icon}</span>
      <div>
        <p className="text-xs text-[#888]">{label}</p>
        <p className="text-sm font-semibold text-[#13233c]">{value}</p>
      </div>
    </div>
  )
}

function ProdutoDetalhe({ produto, onVoltar, onSelecionar }) {
  const [seguindo, setSeguindo] = useState(false)
  const [noCarrinho, setNoCarrinho] = useState(false)

  const info = INFORMACOES[produto.categoria] || INFORMACOES.Todos
  const preco = PRECOS[produto.categoria] ?? PRECOS.Todos

  const likes = (produto.id * 173) % 8000 + 150
  const downloads = (produto.id * 97) % 5000 + 300
  const salvos = (produto.id * 61) % 2000 + 80
  const avaliacoes = (produto.id * 31) % 40 + 2
  const avaliacao = (3.5 + ((produto.id * 7) % 15) / 10).toFixed(1).replace('.', ',')

  const mesmos = produtos.filter((p) => p.id !== produto.id && p.categoria === produto.categoria)
  const outros = produtos.filter((p) => p.id !== produto.id && p.categoria !== produto.categoria)
  const relacionados = [...mesmos, ...outros].slice(0, 4)

  const tags = [produto.categoria, 'impressao3d', 'personalizado', 'sob-demanda']

  return (
    <section className="min-h-screen bg-[#f7f6f3] py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <button
          onClick={onVoltar}
          className="flex items-center gap-2 text-[#13233c] text-base font-medium cursor-pointer hover:underline"
        >
          <SetaEsquerda className="w-5 h-5" />
          Voltar ao catálogo
        </button>

        <div className="mt-8 flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <div className="bg-white rounded-[18px] p-4 shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
              <div className="relative overflow-hidden rounded-[14px] bg-[#f0efe9]">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-[440px] object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-[#13233c]/90 text-white text-xs px-3 py-1.5 rounded-full">
                  Foto do modelo
                </span>
              </div>
            </div>

            <div className="mt-4 bg-white rounded-[18px] px-6 py-5 flex items-center justify-around shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
              <StatItem icon={<Download className="w-5 h-5" />} value={formatar(downloads)} label="Downloads" />
              <StatItem icon={<Coracao className="w-5 h-5" />} value={formatar(likes)} label="Curtidas" />
              <StatItem icon={<Olho className="w-5 h-5" />} value={formatar(salvos)} label="Salvamentos" />
              <StatItem icon={<Estrela className="w-5 h-5" />} value={avaliacao} label={`${avaliacoes} avaliações`} />
            </div>
          </div>

          <div className="lg:w-[400px]">
            <nav className="text-sm text-[#888]">
              <span>{produto.categoria}</span>
              <span className="mx-2">/</span>
              <span className="text-[#13233c] font-medium">{produto.nome}</span>
            </nav>

            <h1 className="mt-3 text-4xl font-[Georgia,serif] text-[#13233c] leading-tight">{produto.nome}</h1>

            <div className="mt-4 flex items-center gap-3 text-sm">
              <Estrela className="w-5 h-5 text-amber-400" />
              <span className="font-semibold text-[#13233c]">{avaliacao}</span>
              <span className="text-[#888]">({avaliacoes} avaliações)</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#13233c] flex items-center justify-center text-white font-bold">
                {produto.nome.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[#222]">Grafica 3D Store</p>
                <p className="text-xs text-[#888]">Modelos exclusivos impressos sob demanda</p>
              </div>
              <button
                onClick={() => setSeguindo(!seguindo)}
                className={`ml-auto px-5 py-2 rounded-full text-sm border transition-colors cursor-pointer ${
                  seguindo
                    ? 'bg-[#13233c] text-white border-[#13233c]'
                    : 'bg-transparent text-[#13233c] border-[#13233c] hover:bg-[#13233c] hover:text-white'
                }`}
              >
                {seguindo ? 'Seguindo' : 'Seguir'}
              </button>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <p className="text-4xl font-bold text-[#13233c]">R$ {preco.toFixed(2).replace('.', ',')}</p>
              <p className="text-xs text-[#888] mb-2">produção sob demanda</p>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setNoCarrinho(true)}
                className="flex-1 flex items-center justify-center gap-2 border-none bg-[#13233c] text-white py-4 rounded-xl cursor-pointer text-lg font-medium transition-all duration-300 hover:bg-[#1f3a62] hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(19,35,60,0.35)]"
              >
                {noCarrinho ? <Check className="w-5 h-5" /> : <Carrinho className="w-5 h-5" />}
                {noCarrinho ? 'Adicionado ao carrinho' : 'Comprar agora'}
              </button>
              <button
                onClick={onVoltar}
                className="px-6 border-2 border-[#13233c] text-[#13233c] py-3.5 rounded-xl cursor-pointer text-lg font-medium transition-all duration-300 hover:bg-[#13233c] hover:text-white"
              >
                Personalizar
              </button>
              <button className="w-[52px] border-2 border-[#13233c] text-[#13233c] rounded-xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-[#13233c] hover:text-white">
                <Coracao className="w-5 h-5" />
              </button>
            </div>

            {noCarrinho && (
              <p className="mt-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg py-2 px-4 text-center">
                Item adicionado ao carrinho com sucesso!
              </p>
            )}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <SpecCard icon={<Impressora className="w-5 h-5" />} label="Material" value={info.specs.material} />
              <SpecCard icon={<Camada className="w-5 h-5" />} label="Peças" value={info.specs.pecas} />
              <SpecCard icon={<Relogio className="w-5 h-5" />} label="Tempo de impressão" value={info.specs.tempo} />
              <SpecCard icon={<Download className="w-5 h-5" />} label="Arquivo" value="STL pronto" />
            </div>
          </div>
        </div>

        <div className="mt-14 bg-white rounded-[18px] shadow-[0_6px_18px_rgba(0,0,0,0.08)] p-8">
          <h2 className="text-2xl font-[Georgia,serif] text-[#13233c] mb-4">Descrição do modelo</h2>
          <p className="text-[#444] leading-relaxed whitespace-pre-line">{info.descricao}</p>
          <p className="mt-4 text-[#888] text-sm">
            Cada modelo é impresso e montado à mão, com revisão de qualidade antes do envio.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#f0efe9] text-[#13233c] text-sm px-4 py-1.5 rounded-full cursor-pointer hover:bg-[#13233c] hover:text-white transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 mb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-[Georgia,serif] text-[#13233c]">Modelos relacionados</h2>
            <button onClick={onVoltar} className="text-[#13233c] underline text-sm cursor-pointer">
              Ver mais
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {relacionados.map((p) => (
              <Card
                key={p.id}
                id={p.id}
                nome={p.nome}
                imagem={p.imagem}
                categoria={p.categoria}
                onClick={() => onSelecionar(p)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProdutoDetalhe;