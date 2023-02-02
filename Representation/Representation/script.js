var legal1 = document.getElementById('legal-1');
var legal2 = document.getElementById('legal-2');
var legalOpen = document.getElementById('legal-open');



legalOpen.addEventListener('mouseover', showLegal);
legalOpen.addEventListener('mouseleave', hideLegal);

function showLegal() {
  legal1.setAttribute('class');
  legal2.setAttribute('class');
  overlay.setAttribute('class');
}

function hideLegal() {
  legal1.setAttribute('class');
  legal2.setAttribute('class');
  overlay.setAttribute('class');
}
