const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
    :root {
      --espresso: #1a0a00;
      --roast:    #2d1200;
      --brown:    #5c2d0e;
      --caramel:  #c8742a;
      --cream:    #f5ead8;
      --mist:     #ede0cc;
      --gold:     #d4a853;
      --charcoal: #1c1410;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: var(--espresso); color: var(--cream); font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--roast); }
    ::-webkit-scrollbar-thumb { background: var(--caramel); border-radius: 2px; }
  `}</style>
);

export default FontLoader;
