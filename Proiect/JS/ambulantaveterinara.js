function toggleLights()
{
  for (let light of document.querySelectorAll('.light')) {
    light.classList.toggle('light--flash');
  }
  document.querySelector('.ambulance__headlight').classList.toggle('headlight--flash')
}
toggleLights();
