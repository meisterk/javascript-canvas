// Zeichenkontext
const leinwand = document.getElementById('leinwand');
const context = leinwand.getContext('2d');

// Stift definieren
context.lineWidth = 5;
context.strokeStyle = 'blue';

// Pinsel zum Ausmalen
context.fillStyle = 'red';

// Rechteck zeichnen
context.strokeRect(20, 30, 40, 50);
context.fillRect(20, 30, 40, 50);// Stift definieren

// Polygon zeichnen
context.beginPath();
context.moveTo(150, 10);
context.lineTo(180, 10);
context.lineTo(150, 40);
context.lineTo(180, 40);
context.lineTo(150, 10);
context.stroke();
context.fill();
context.closePath();
