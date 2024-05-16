function startRace() {
    let cars = document.querySelectorAll('.car');
    let finishLine = document.querySelector('.track').offsetWidth - 40;
    
    cars.forEach(car => {
      moveCar(car, finishLine);
    });
  }
  
  function moveCar(car, finishLine) {
    let distance = 0;
    let speed = Math.random() * 15; // Aumentando a velocidade dos carros
    
    let moveInterval = setInterval(() => {
      distance += speed;
      car.style.left = distance + 'px';
      
      if (distance >= finishLine) {
        clearInterval(moveInterval);
        car.style.left = finishLine + 'px';
        alert('Carro ' + car.id + ' chegou!');
      }
    }, 100);
  }
  