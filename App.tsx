import { useState } from "react";

const NAV = [
  { label: "Coleção", href: "#colecao" },
  { label: "Categorias", href: "#categorias" },
  { label: "A loja", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const PRODUCTS = [
  // ── Vestidos (5) ──
  {
    id: "001",
    name: "Vestido Azul Simples",
    era: "Vestidos",
    size: "M",
    price: "R$ 89",
    condition: "Ótimo estado",
    img: "/src/imports/image.png",
    alt: "Vestido longo azul estampado com palmeiras",
    tag: "Destaque",
  },
  {
    id: "002",
    name: "Vestido Azul Midi",
    era: "Vestidos",
    size: "P",
    price: "R$ 76",
    condition: "Excelente",
    img: "https://i.pinimg.com/736x/31/8b/3b/318b3bf4520cbf3ba46dc49cef06e9f8.jpg",
    alt: "Vestido rosa bebê",
    tag: null,
  },
  {
    id: "003",
    name: "Vestido Longo Floral",
    era: "Vestidos",
    size: "G",
    price: "R$ 115",
    condition: "Ótimo estado",
    img: "https://i.pinimg.com/736x/d2/f2/be/d2f2bedb0664af1f6c2a5e5d1f1ab914.jpg",
    alt: "Vestido longo marrom",
    tag: null,
  },
  {
    id: "004",
    name: "Vestido Cinza Manga Longa",
    era: "Vestidos",
    size: "M",
    price: "R$ 68",
    condition: "Bom estado",
    img: "https://i.pinimg.com/736x/10/05/e8/1005e89ce53297e4997e86cd57fa6274.jpg",
    alt: "Vestido branco",
    tag: null,
  },
  {
    id: "005",
    name: "Vestido Branco Clássico",
    era: "Vestidos",
    size: "P",
    price: "R$ 98",
    condition: "Excelente",
    img: "https://i.pinimg.com/736x/fb/06/62/fb0662e5b13344b4f7cc752cd4fc22b2.jpg",
    alt: "Vestido preto",
    tag: "Peça única",
  },
  // ── Macacão (3) ──
  {
    id: "006",
    name: "Macacão Ombro Único Marrom",
    era: "Macacão",
    size: "M",
    price: "R$ 128",
    condition: "Excelente",
    img: "/src/imports/image-12.png",
    alt: "Macacão ombro único marrom perna larga feminino",
    tag: "Destaque",
  },
  {
    id: "007",
    name: "Macacão Alça Fina Marrom",
    era: "Macacão",
    size: "P",
    price: "R$ 119",
    condition: "Ótimo estado",
    img: "/src/imports/image-13.png",
    alt: "Macacão alça fina marrom perna larga feminino",
    tag: null,
  },
  {
    id: "008",
    name: "Macacão Halter Preto",
    era: "Macacão",
    size: "M",
    price: "R$ 112",
    condition: "Excelente",
    img: "/src/imports/image-14.png",
    alt: "Macacão halter preto perna larga feminino",
    tag: null,
  },
  // ── Calças/Calção (10) ──
  {
    id: "011",
    name: "Calça Wide Leg Azul Clara",
    era: "Calças/Calção",
    size: "38",
    price: "R$ 65",
    condition: "Bom estado",
    img: "/src/imports/image-2.png",
    alt: "Calça wide leg jeans azul clara feminina",
    tag: null,
  },
  {
    id: "012",
    name: "Calça Wide Leg Azul Média",
    era: "Calças/Calção",
    size: "40",
    price: "R$ 58",
    condition: "Ótimo estado",
    img: "/src/imports/image-3.png",
    alt: "Calça wide leg jeans azul média feminina",
    tag: "Destaque",
  },
  {
    id: "013",
    name: "Calça Wide Leg Azul Escuro",
    era: "Calças/Calção",
    size: "38",
    price: "R$ 72",
    condition: "Excelente",
    img: "/src/imports/image-4.png",
    alt: "Calça wide leg jeans azul escuro feminina",
    tag: null,
  },
  {
    id: "014",
    name: "Calça Pantalona Off-White",
    era: "Calças/Calção",
    size: "36",
    price: "R$ 85",
    condition: "Excelente",
    img: "/src/imports/image-5.png",
    alt: "Calça pantalona off-white feminina",
    tag: null,
  },
  {
    id: "015",
    name: "Calça Pantalona Preta",
    era: "Calças/Calção",
    size: "40",
    price: "R$ 79",
    condition: "Ótimo estado",
    img: "/src/imports/image-6.png",
    alt: "Calça pantalona preta feminina",
    tag: null,
  },
  {
    id: "016",
    name: "Shortão Jeans com Dobra",
    era: "Calças/Calção",
    size: "36",
    price: "R$ 48",
    condition: "Bom estado",
    img: "/src/imports/image-7.png",
    alt: "Shortão jeans com dobra feminino",
    tag: null,
  },
  {
    id: "017",
    name: "Shortão Social Preto",
    era: "Calças/Calção",
    size: "38",
    price: "R$ 62",
    condition: "Excelente",
    img: "/src/imports/image-8.png",
    alt: "Shortão social preto feminino",
    tag: null,
  },
  {
    id: "018",
    name: "Shortão Azul Marinho com Cinto",
    era: "Calças/Calção",
    size: "36",
    price: "R$ 55",
    condition: "Ótimo estado",
    img: "/src/imports/image-9.png",
    alt: "Shortão azul marinho com cinto feminino",
    tag: null,
  },
  {
    id: "019",
    name: "Shorts com Cinto 3 Cores",
    era: "Calças/Calção",
    size: "P/M/G",
    price: "R$ 52",
    condition: "Bom estado",
    img: "/src/imports/image-10.png",
    alt: "Shorts com cinto em preto, bege e branco",
    tag: null,
  },
  {
    id: "020",
    name: "Shortão Jeans 3 Lavagens",
    era: "Calças/Calção",
    size: "36/38",
    price: "R$ 45",
    condition: "Bom estado",
    img: "/src/imports/image-11.png",
    alt: "Shortão jeans em azul escuro, claro e preto",
    tag: null,
  },
  // ── Camisas/Blusas — Calor (4) ──
  {
    id: "021",
    name: "Regata Preta",
    era: "Camisas/Blusas",
    size: "M",
    price: "R$ 38",
    condition: "Ótimo estado",
    img: "https://images.unsplash.com/photo-1713881917939-b558c8f50ccd?w=600&h=750&fit=crop&auto=format",
    alt: "Regata preta feminina",
    tag: "Calor",
  },
  {
    id: "022",
    name: "Regata Amarela",
    era: "Camisas/Blusas",
    size: "P",
    price: "R$ 35",
    condition: "Bom estado",
    img: "https://images.unsplash.com/photo-1579097735259-6b222583f4f3?w=600&h=750&fit=crop&auto=format",
    alt: "Regata amarela decote canoa feminina",
    tag: "Calor",
  },
  {
    id: "023",
    name: "Camisa de Linho Branca",
    era: "Camisas/Blusas",
    size: "M",
    price: "R$ 55",
    condition: "Excelente",
    img: "https://images.unsplash.com/photo-1774005906384-0e96e046f614?w=600&h=750&fit=crop&auto=format",
    alt: "Camisa de linho branca feminina verão",
    tag: "Calor",
  },
  {
    id: "024",
    name: "Top Branco Decote",
    era: "Camisas/Blusas",
    size: "P/M",
    price: "R$ 42",
    condition: "Ótimo estado",
    img: "https://images.unsplash.com/photo-1574296148664-3685383579c9?w=600&h=750&fit=crop&auto=format",
    alt: "Top branco com decote feminino verão",
    tag: "Calor",
  },
  // ── Camisas/Blusas — Frio (5) ──
  {
    id: "025",
    name: "Blusa de Tricô Cinza",
    era: "Camisas/Blusas",
    size: "M",
    price: "R$ 72",
    condition: "Ótimo estado",
    img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=600&h=750&fit=crop&auto=format",
    alt: "Blusa de tricô cinza feminina inverno",
    tag: "Frio",
  },
  {
    id: "026",
    name: "Blusa de Tricô Vermelha",
    era: "Camisas/Blusas",
    size: "G",
    price: "R$ 68",
    condition: "Bom estado",
    img: "https://images.unsplash.com/photo-1608984361471-ff566593088f?w=600&h=750&fit=crop&auto=format",
    alt: "Blusa de tricô vermelha feminina inverno",
    tag: "Frio",
  },
  {
    id: "027",
    name: "Blusa de Tricô Branca",
    era: "Camisas/Blusas",
    size: "M",
    price: "R$ 75",
    condition: "Excelente",
    img: "https://images.unsplash.com/photo-1588271968087-4c51abe05afc?w=600&h=750&fit=crop&auto=format",
    alt: "Blusa de tricô branca feminina inverno",
    tag: "Frio",
  },
  {
    id: "028",
    name: "Top de Malha Cinza",
    era: "Camisas/Blusas",
    size: "P",
    price: "R$ 58",
    condition: "Ótimo estado",
    img: "https://images.unsplash.com/photo-1536992266094-82847e1fd431?w=600&h=750&fit=crop&auto=format",
    alt: "Top de malha cinza feminino inverno",
    tag: "Frio",
  },
  {
    id: "029",
    name: "Suéter Colorido",
    era: "Camisas/Blusas",
    size: "M/G",
    price: "R$ 85",
    condition: "Excelente",
    img: "https://images.unsplash.com/photo-1643015862949-5c8d15a4242e?w=600&h=750&fit=crop&auto=format",
    alt: "Suéter colorido feminino inverno",
    tag: "Frio",
  },
];

const CATEGORIES = [
  { num: "I", name: "Calças/Calção", count: "74 peças", img: "https://images.unsplash.com/photo-1605092474347-574370143393?w=400&h=500&fit=crop&auto=format", alt: "Calças e calções femininos vintage" },
  { num: "II", name: "Vestidos", count: "91 peças", img: "https://images.unsplash.com/photo-1470092922729-762ec45090ac?w=400&h=500&fit=crop&auto=format", alt: "Vestidos femininos vintage" },
  { num: "III", name: "Macacão", count: "38 peças", img: "https://images.unsplash.com/photo-1643888056839-f86c616c1557?w=400&h=500&fit=crop&auto=format", alt: "Macacões femininos vintage" },
  { num: "IV", name: "Camisas/Blusas", count: "112 peças", img: "https://images.unsplash.com/photo-1677715156741-b7af71207c4d?w=400&h=500&fit=crop&auto=format", alt: "Camisas e blusas femininas vintage" },
];

const TESTIMONIALS = [
  { name: "Beatriz Alves", text: "Encontrei um casaco anos 80 que parecia saído de uma passarela. Nunca mais comprei roupa nova.", city: "São Paulo" },
  { name: "Tiago Ferreira", text: "O atendimento é incrível e as peças são curadas com tanto cuidado. Virei cliente fiel.", city: "Campinas" },
  { name: "Laura Matos", text: "Moda circular com estilo. Aqui cada peça tem história e isso faz toda a diferença.", city: "Santos" },
];

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase border rounded-full ${
      dark ? "border-[#1e2d4a] text-[#1e2d4a]" : "border-[#82a9e4] text-[#82a9e4]"
    }`}>
      {children}
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Calças/Calção", "Vestidos", "Macacão", "Camisas/Blusas"];
  const filtered = activeFilter === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.era === activeFilter);

  function toggleWishlist(id: string) {
    setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]);
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-[#eef3fb] text-[#1e2d4a]">

      {/* ── NAV ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#eef3fb]/95 backdrop-blur-sm border-b border-[#c5d8f5]">
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-600 tracking-tight text-[#1e2d4a]">
            Alter<span className="text-[#82a9e4]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="text-xs font-medium tracking-[0.1em] uppercase text-[#7a8fa8] hover:text-[#1e2d4a] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a href="#colecao" className="text-xs font-semibold tracking-[0.1em] uppercase text-[#7a8fa8] hover:text-[#82a9e4] transition-colors flex items-center gap-1.5">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <circle cx="8" cy="8" r="5" />
                <path d="M13 13l4 4" strokeLinecap="round" />
              </svg>
              Buscar
            </a>
            <button className="relative">
              <svg viewBox="0 0 20 20" fill="none" stroke="#7a8fa8" strokeWidth="1.5" className="w-5 h-5 hover:stroke-[#82a9e4] transition-colors">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#82a9e4] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>

          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              {menuOpen
                ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[#c5d8f5] bg-[#eef3fb] px-6 py-5 flex flex-col gap-5">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-[#1e2d4a]">{l.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="pt-[60px] min-h-screen grid md:grid-cols-[1fr_1fr] relative overflow-hidden">
        {/* Left — editorial text */}
        <div className="flex flex-col justify-end pb-16 px-8 md:px-16 pt-20 md:pt-0">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a8fa8] font-medium">Temporada 2026</span>
            <span className="h-px w-8 bg-[#7a8fa8]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#82a9e4] font-medium">Brechó Curado</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-600 leading-[0.95] text-[#1e2d4a] mb-8">
            Peças que<br />
            <em className="italic font-300 text-[#82a9e4]">carregam</em><br />
            história.
          </h1>
          <p className="text-[#7a8fa8] text-base leading-relaxed max-w-sm mb-10 font-body">
            Roupas de décadas passadas selecionadas com critério — cada peça higienizada, avaliada e pronta para um novo capítulo.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#colecao"
              className="px-8 py-3.5 bg-[#1e2d4a] text-[#eef3fb] text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#82a9e4] transition-colors">
              Ver coleção
            </a>
            <a href="#sobre" className="text-xs font-medium tracking-[0.1em] uppercase text-[#7a8fa8] hover:text-[#1e2d4a] transition-colors flex items-center gap-2">
              Nossa história
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-[#c5d8f5] grid grid-cols-3 gap-4">
            {[["280+", "peças únicas"], ["100%", "curado a mão"], ["Desde", "2018"]].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-600 text-[#1e2d4a]">{v}</div>
                <div className="text-[11px] text-[#7a8fa8] uppercase tracking-[0.1em] mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative hidden md:block bg-[#ddeaf8]">
          <img
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=900&h=1100&fit=crop&auto=format"
            alt="Interior da loja Alter com araras de roupas vintage iluminadas"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d4a]/30 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 bg-[#eef3fb] px-4 py-3 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#1e2d4a]">
            São Paulo — SP
          </div>
        </div>

        {/* Mobile image strip */}
        <div className="md:hidden h-[340px] bg-[#ddeaf8] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=800&h=500&fit=crop&auto=format"
            alt="Interior da loja Alter com araras de roupas vintage"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* ── CATEGORIAS ── */}
      <section id="categorias" className="py-24 bg-[#1e2d4a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a8fa8] font-medium">Navegue por</span>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-[#eef3fb] mt-2">Categorias</h2>
            </div>
            <a href="#colecao" className="hidden md:flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[#7a8fa8] hover:text-[#82a9e4] transition-colors">
              Ver tudo
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CATEGORIES.map((cat) => (
              <a key={cat.name} href="#colecao"
                className="group relative aspect-[3/4] bg-[#253758] overflow-hidden cursor-pointer">
                <img src={cat.img} alt={cat.alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d4a]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 font-display text-[#7a8fa8] text-xs italic">{cat.num}</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-display text-xl font-600 text-[#eef3fb] mb-1">{cat.name}</div>
                  <div className="text-[10px] tracking-[0.1em] uppercase text-[#7a8fa8]">{cat.count}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLEÇÃO ── */}
      <section id="colecao" className="py-24 bg-[#eef3fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a8fa8]">Acervo atual</span>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-[#1e2d4a] mt-2">Coleção</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase border transition-all ${
                    activeFilter === f
                      ? "bg-[#1e2d4a] text-[#eef3fb] border-[#1e2d4a]"
                      : "border-[#c5d8f5] text-[#7a8fa8] hover:border-[#1e2d4a] hover:text-[#1e2d4a]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="group relative">
                <div className="relative bg-[#ddeaf8] overflow-hidden aspect-[3/4]">
                  <img src={p.img} alt={p.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {p.tag && (
                    <div className="absolute top-3 left-3">
                      <Pill>{p.tag}</Pill>
                    </div>
                  )}
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-[#eef3fb]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={wishlist.includes(p.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                  >
                    <svg viewBox="0 0 20 20" className="w-4 h-4"
                      fill={wishlist.includes(p.id) ? "#82a9e4" : "none"}
                      stroke={wishlist.includes(p.id) ? "#82a9e4" : "#1e2d4a"}
                      strokeWidth="1.5">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-[#1e2d4a] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full text-[10px] font-semibold tracking-[0.12em] uppercase text-[#eef3fb]">
                      Tenho interesse
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <div className="font-display text-base font-600 text-[#1e2d4a] leading-tight">{p.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] tracking-[0.08em] uppercase text-[#7a8fa8]">{p.era}</span>
                      <span className="text-[#c5d8f5]">·</span>
                      <span className="text-[10px] tracking-[0.08em] uppercase text-[#7a8fa8]">Tam. {p.size}</span>
                    </div>
                    <div className="text-[10px] text-[#e07a5f] mt-0.5 font-medium">{p.condition}</div>
                  </div>
                  <div className="font-display text-lg font-600 text-[#1e2d4a] shrink-0">{p.price}</div>
                </div>
                <div className="absolute top-3 left-16 text-[10px] text-[#b8cef0] font-mono">#{p.id}</div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#7a8fa8]">
              <div className="font-display text-2xl mb-2">Nenhuma peça encontrada</div>
              <button onClick={() => setActiveFilter("Todos")} className="text-sm text-[#82a9e4] underline">
                Ver todas as peças
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <a href="#contato"
              className="inline-block px-10 py-3.5 border border-[#1e2d4a] text-xs font-semibold tracking-[0.12em] uppercase text-[#1e2d4a] hover:bg-[#1e2d4a] hover:text-[#eef3fb] transition-all">
              Ver acervo completo
            </a>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO BANNER ── */}
      <section className="py-20 bg-[#82a9e4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="font-display text-[20vw] font-600 text-white leading-none select-none">ALTER</div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="font-display text-3xl md:text-5xl font-300 italic text-[#eef3fb] leading-[1.2]">
            "Moda circular não é tendência —<br />é a única moda que faz sentido."
          </p>
          <div className="mt-8 flex justify-center gap-8 text-[10px] tracking-[0.15em] uppercase text-[#e8c4ae] font-medium">
            <span>Sem fast fashion</span>
            <span className="opacity-40">—</span>
            <span>Peças com história</span>
            <span className="opacity-40">—</span>
            <span>Moda consciente</span>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-24 bg-[#eef3fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-[#ddeaf8] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?w=700&h=900&fit=crop&auto=format"
                  alt="Araras de roupas coloridas organizadas na loja Alter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1e2d4a] p-6 hidden md:block">
                <div className="font-display text-4xl font-600 text-[#eef3fb]">2018</div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-[#7a8fa8] mt-1">fundação</div>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a8fa8] font-medium">A loja</span>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-[#1e2d4a] mt-3 mb-6 leading-[1.1]">
                Curado com olhar,<br />
                <em className="italic font-300 text-[#82a9e4]">vendido com propósito.</em>
              </h2>
              <div className="space-y-5 text-[#7a8fa8] leading-relaxed text-sm">
                <p>
                  A Alter nasceu da crença de que as melhores roupas já foram feitas. Desde 2018 garimpamos peças de brechós, coleções particulares e feiras de toda a América do Sul.
                </p>
                <p>
                  Cada peça passa por avaliação de qualidade, higienização profissional e recebe uma ficha técnica com era, estado de conservação e procedência — para que você compre com confiança.
                </p>
                <p>
                  Funcionamos no Bom Retiro, o bairro mais textil de São Paulo. Venha nos visitar.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  ["Terça–Sexta", "11h às 19h"],
                  ["Sábado", "10h às 17h"],
                  ["Endereço", "R. José Paulino, 388"],
                  ["Bairro", "Bom Retiro, SP"],
                ].map(([l, v]) => (
                  <div key={l} className="border-t border-[#c5d8f5] pt-4">
                    <div className="text-[10px] tracking-[0.1em] uppercase text-[#7a8fa8] font-medium">{l}</div>
                    <div className="font-display text-base font-600 text-[#1e2d4a] mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-24 bg-[#ddeaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a8fa8]">O que dizem</span>
            <h2 className="font-display text-4xl md:text-5xl font-600 text-[#1e2d4a] mt-2">Quem usa, aprova.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="bg-[#eef3fb] p-8 relative">
                <div className="font-display text-[80px] leading-none text-[#c5d8f5] absolute top-3 left-6 select-none">"</div>
                <p className="font-display text-lg font-300 italic text-[#1e2d4a] leading-[1.5] relative z-10 mt-6 mb-8">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 border-t border-[#c5d8f5] pt-5">
                  <div className="w-8 h-8 bg-[#c5d8f5] flex items-center justify-center font-display font-600 text-sm text-[#1e2d4a]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1e2d4a]">{t.name}</div>
                    <div className="text-[10px] text-[#7a8fa8] tracking-wide">{t.city}</div>
                  </div>
                  <div className="ml-auto text-[10px] font-mono text-[#b8cef0]">0{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 bg-[#1e2d4a]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a8fa8]">Fique por dentro</span>
          <h2 className="font-display text-4xl md:text-5xl font-600 text-[#eef3fb] mt-3 mb-4 leading-[1.1]">
            Novas peças toda semana.
          </h2>
          <p className="text-sm text-[#7a8fa8] mb-10">
            Receba em primeira mão os lançamentos do acervo e ofertas exclusivas para assinantes.
          </p>

          {subscribed ? (
            <div className="py-8">
              <div className="font-display text-2xl font-600 text-[#82a9e4] mb-2">Obrigada!</div>
              <p className="text-sm text-[#7a8fa8]">Você receberá nossas novidades em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com.br"
                className="flex-1 bg-[#253758] border border-[#304570] text-[#eef3fb] px-5 py-3.5 text-sm placeholder-[#546a90] focus:outline-none focus:border-[#82a9e4] transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#82a9e4] text-[#eef3fb] text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#5a87d4] transition-colors whitespace-nowrap"
              >
                Assinar
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 bg-[#eef3fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1fr] gap-16">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a8fa8]">Contato</span>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-[#1e2d4a] mt-3 mb-8 leading-[1.1]">
                Venha nos<br />
                <em className="font-300 italic text-[#82a9e4]">conhecer.</em>
              </h2>

              <div className="space-y-8">
                {[
                  { label: "Endereço", value: "R. José Paulino, 388 — Bom Retiro, São Paulo" },
                  { label: "Horário", value: "Terça a Sexta das 11h às 19h · Sábado das 10h às 17h" },
                  { label: "WhatsApp", value: "(11) 94567-8901" },
                  { label: "Instagram", value: "@alter.brechó" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-[#c5d8f5] pb-6">
                    <div className="text-[10px] tracking-[0.12em] uppercase text-[#7a8fa8] font-medium mb-2">{item.label}</div>
                    <div className="font-display text-lg font-400 text-[#1e2d4a]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1e2d4a] p-10">
              <h3 className="font-display text-2xl font-600 text-[#eef3fb] mb-8">Envie uma mensagem</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1e2d4a] border-t border-[#253758] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-xl font-600 text-[#eef3fb]">
              Alter<span className="text-[#82a9e4]">.</span>
            </div>
            <div className="flex gap-8">
              {NAV.map((l) => (
                <a key={l.href} href={l.href}
                  className="text-[10px] tracking-[0.1em] uppercase text-[#7a8fa8] hover:text-[#eef3fb] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="text-[10px] tracking-wide text-[#546a90]">
              © 2026 Alter Brechó — Moda que dura.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="font-display text-5xl text-[#82a9e4] mb-4">✓</div>
        <div className="font-display text-xl font-600 text-[#eef3fb] mb-2">Mensagem recebida!</div>
        <p className="text-sm text-[#7a8fa8]">Respondemos em até 24h.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-xs text-[#82a9e4] hover:underline tracking-wide uppercase">
          Nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { key: "nome", label: "Nome", type: "text", placeholder: "Seu nome" },
        { key: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
      ].map(({ key, label, type, placeholder }) => (
        <div key={key}>
          <label className="block text-[10px] tracking-[0.12em] uppercase text-[#7a8fa8] mb-2">{label}</label>
          <input
            required
            type={type}
            value={form[key as "nome" | "email"]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            placeholder={placeholder}
            className="w-full bg-[#253758] border border-[#304570] text-[#eef3fb] px-4 py-3 text-sm placeholder-[#546a90] focus:outline-none focus:border-[#82a9e4] transition-colors"
          />
        </div>
      ))}
      <div>
        <label className="block text-[10px] tracking-[0.12em] uppercase text-[#7a8fa8] mb-2">Mensagem</label>
        <textarea
          required
          rows={4}
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          placeholder="Como podemos ajudar?"
          className="w-full bg-[#253758] border border-[#304570] text-[#eef3fb] px-4 py-3 text-sm placeholder-[#546a90] focus:outline-none focus:border-[#82a9e4] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 bg-[#82a9e4] text-[#eef3fb] text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#5a87d4] transition-colors"
      >
        Enviar
      </button>
    </form>
  );
}

