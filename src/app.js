/* Minimal app renderer */
(function () {
  function el(id) { return document.getElementById(id); }

  function createCard(item, category) {
    const c = document.createElement('div');
    c.className = 'card';
    c.dataset.category = category;
    c.dataset.id = item.id;
    c.innerHTML = `<h4>${item.name}</h4><p class="short">${item.short}</p>`;
    c.addEventListener('click', () => showDetail(item, category));
    return c;
  }

  function showDetail(item, category) {
    const d = el('detail');
    d.innerHTML = '';
    const h = document.createElement('h2');
    h.textContent = item.name + ' — ' + category;
    const p = document.createElement('p');
    p.textContent = item.description || '';
    const ul = document.createElement('ul');
    (item.useCases || []).forEach(u => { const li = document.createElement('li'); li.textContent = u; ul.appendChild(li); });
    const ecos = document.createElement('p'); ecos.innerHTML = '<strong>Ecosystem:</strong> ' + (item.ecosystem || []).join(', ');
    const tip = document.createElement('p'); tip.className = 'tip'; tip.innerHTML = '<strong>Tip:</strong> ' + (item.tip || '');
    d.appendChild(h); d.appendChild(p); d.appendChild(document.createElement('h4')).textContent = 'Use cases'; d.appendChild(ul); d.appendChild(ecos); d.appendChild(tip);
  }

  function renderCards(filter) {
    const container = el('cards');
    container.innerHTML = '';
    const q = el('search').value.trim().toLowerCase();

    const addItems = (items, category) => {
      items.forEach(it => {
        if (q && !(it.name.toLowerCase().includes(q) || (it.short||'').toLowerCase().includes(q))) return;
        if (filter && filter !== 'all' && filter !== category) return;
        container.appendChild(createCard(it, category));
      });
    };

    addItems(window.toolkit.dataTypes, 'dataTypes');
    addItems(window.toolkit.apis, 'apis');
    addItems(window.toolkit.devops, 'devops');
  }

  document.addEventListener('DOMContentLoaded', () => {
    // buttons
    document.querySelectorAll('.filters button').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        const f = b.dataset.filter;
        renderCards(f);
      });
    });

    el('search').addEventListener('input', () => renderCards(document.querySelector('.filters button.active').dataset.filter));

    renderCards('all');
  });
})();
