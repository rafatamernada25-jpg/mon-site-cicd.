function saluer(nom) { 
  return 'Bonjour ' + nom + ' !'; 
}
if (typeof module !== 'undefined') {
  module.exports = { saluer }; }
if (typeof document !== 'undefined') {
  document.getElementById('btn').addEventListener('click', function () {
    const nom = document.getElementById('nada').value || 'monde'; 
    document.getElementById('resultat').textContent = saluer(nada); }); }
