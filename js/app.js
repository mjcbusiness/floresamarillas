
    const btn = document.getElementById('sprinkleBtn');
    const layer = document.getElementById('layer');
    const tpl = document.getElementById('flower-tpl');
    const secondary = document.getElementById('secondary');

    const COUNT = 40;

    function rand(min,max){return Math.random()*(max-min)+min}

    function createFlower(){
      const node = tpl.content.cloneNode(true);
      const el = node.querySelector('svg');
      const wrapper = document.createElement('div');
      wrapper.className = 'flower';
      wrapper.style.left = rand(0,100)+'%';
      wrapper.style.top = rand(0,100)+'%';
      const dx = rand(-300,300)+'px';
      const dy = rand(-300,300)+'px';
      wrapper.style.setProperty('--dx',dx);
      wrapper.style.setProperty('--dy',dy);
      const dur = rand(4,9);
      wrapper.style.animation = `floatAll ${dur}s linear forwards`;
      if(Math.random()<0.7) el.classList.add('flash');
      wrapper.appendChild(el);
      wrapper.addEventListener('animationend',()=>wrapper.remove());
      return wrapper;
    }

    function sprinkle(){
      secondary.classList.add('show');
      for(let i=0;i<COUNT;i++){
        const f = createFlower();
        layer.appendChild(f);
      }
      setTimeout(()=> secondary.classList.remove('show'), 7200);
    }

    btn.addEventListener('click',sprinkle);
  