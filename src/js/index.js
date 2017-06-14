const charts = document.querySelectorAll('.chart');

function drawChart(circ, p) {
  let count = 0;
  const timer = setInterval(() => {
    if (count >= Number(p)) clearInterval(timer);
    else circ.setAttribute('stroke-dasharray', `${count += 2} 100`);
  }, 20);
}

charts.forEach((ch) => {
  const chart = ch;
  const p = parseFloat(chart.textContent);
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  const circle = document.createElementNS(NS, 'circle');
  const title = document.createElementNS(NS, 'title');
  circle.setAttribute('r', 16);
  circle.setAttribute('cx', 16);
  circle.setAttribute('cy', 16);
  svg.setAttribute('viewBox', '0 0 32 32');
  title.textContent = chart.textContent;
  chart.textContent = '';
  svg.appendChild(title);
  svg.appendChild(circle);
  chart.appendChild(svg);
  drawChart(circle, p);
});
