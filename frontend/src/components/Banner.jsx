function Banner() {
  return (
    <section className="h-[500px] bg-[linear-gradient(to_right,_rgba(196,173,137,0.95),_rgba(235,232,227,0.5))] flex items-center justify-between px-[200px]">
      <div className="max-w-[500px]">
        <span className="tracking-[8px] text-base">TORNE SUA IDEIA REALIDADE</span>

        <h1 className="text-5xl leading-[0.95] my-5 font-[Georgia,serif] font-normal">
          
          Personalize cada detalhe
          {/* <br />
          para a família */}
        </h1>

        <p className="text-2xl text-[#444]">
          Criamos objetos em impressão 3D do jeito que você imaginou, com acabamento de alta qualidade.
        </p>
      </div>

      <img
        src="https://makerworld.bblmw.com/makerworld/model/US69f4ab07108c43/design/2025-07-27_bc3a4ddfb049e8.jpg?x-oss-process=image/resize,w_1000/format,webp"
        alt="blusa"
        className="w-[40%] mr-[140px] rounded-[40px]"
      />
    </section>
  );
}

export default Banner;
