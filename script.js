function trackClick(id) {
  const key = 'asss_clicks';
  const data = JSON.parse(localStorage.getItem(key) || '{}');
  data[id] = (data[id] || 0) + 1;
  data['total'] = (data['total'] || 0) + 1;
  localStorage.setItem(key, JSON.stringify(data));
  updateCounter(data['total']);
  console.log('[ASSS Smoke Test] Click tracked:', id, data);
}

function updateCounter(total) {
  const el = document.getElementById('click-counter');
  if (el) el.textContent = total + ' interest click' + (total === 1 ? '' : 's') + ' tracked';
}

function showConfirmation() {
  const msg = document.getElementById('confirmed-msg');
  if (!msg) return;
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 2500);
}

window.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('asss_clicks') || '{}');
  if (data.total) updateCounter(data.total);
});
