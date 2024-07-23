const Teleoperated = () => {
  return (
    <form>
      <h2>Teleoperado</h2>
      <div>
        <h3>Notas no Speaker</h3>
        <img src="/images/speaker.png" />
        <button type="button">+</button>
        <button type="button">-</button>
        <h3>0</h3>
      </div>
      <div>
        <h3>Notas no Speaker Amplificado</h3>
        <img src="/images/speaker.png" />
        <button type="button">+</button>
        <button type="button">-</button>
        <h3>0</h3>
      </div>
      <div>
        <h3>Notas no Amp</h3>
        <img src="/images/amp.png" />
        <button type="button">+</button>
        <button type="button">-</button>
        <h3>0</h3>
      </div>
      <button type="button">Avançar para o Endgame</button>
    </form>
  );
}

export default Teleoperated;