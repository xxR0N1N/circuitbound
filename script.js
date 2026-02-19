// Simple tab switching for dashboard/shop
document.addEventListener('DOMContentLoaded', () => {
  const tabContainers = document.querySelectorAll('.tabs');
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('button');
    const panels = container.querySelectorAll('.tab-panel');

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.style.display = 'none');
        btn.classList.add('active');
        panels[i].style.display = 'block';
      });
    });

    // Initialize
    buttons[0]?.click();
  });
});
