import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Pricing = () => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);

  const updateCoins = (amount) => {
    setCoins(amount);
  };
  const handlePaymentClick = (amount) => {
    // Quantidade de moedas desejada (parâmetro: amount)
    fetch('http://localhost:3000/insert-coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: "10", // Valor real do Id
        value: amount,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Moedas inseridas com sucesso!', data);
      })
      .catch(error => {
        console.error('Erro ao inserir moedas:', error);
      });
  };


  return (
    <div>
      <div className="coin-display">
        <h1>MOEDAS INSERT: {coins}</h1>
      </div>
      <div className="container">
        <div className="card" onMouseOver={() => updateCoins(100)}>
          <div className="content">
            <h2>01</h2>
            <h3>Pacote Inicial</h3>
            <p>
              Desbloqueie o básico com o Pacote Inicial! Receba <strong>100</strong> Moedas InCert para iniciar sua aventura.
            </p>
            <a href="#" onClick={() => handlePaymentClick(100)}>Comprar Agora</a>
          </div>
        </div>
        <div className="card" onMouseOver={() => updateCoins(250)}>
          <div className="content">
            <h2>02</h2>
            <h3>Pacote Avançado</h3>
            <p>
              Eleve seu jogo com o Pacote Avançado! Ganhe <strong>250</strong> Moedas InCert e vantagens exclusivas dentro do jogo.
            </p>
            <a href="#" onClick={() => handlePaymentClick(250)}>Comprar Agora</a>
          </div>
        </div>
        <div className="card" onMouseOver={() => updateCoins(500)}>
          <div className="content">
            <h2>03</h2>
            <h3>Coleção Master</h3>
            <p>
              Mergulhe na experiência de jogo definitiva com a Coleção Master! Aproveite incríveis <strong>500</strong> Moedas InCert e itens raros no jogo.
            </p>
            <a href="#" onClick={() => handlePaymentClick(500)}>Comprar Agora</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
