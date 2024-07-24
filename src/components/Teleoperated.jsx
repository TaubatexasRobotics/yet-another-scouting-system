const Teleoperated = () => {
  return (
    <form>
      <h2 className="text-7xl text-center my-10 font-bebas">Teleoperado</h2>
      <div className="flex justify-center mx-auto my-8 text-center bg-blue-900 w-1/2 px-8 py-10 rounded-[35px]">
        <div className="mx-8 flex flex-col justify-around bg-blue-500 p-8 rounded-[35px] text-white">
          <h3 className="text-2xl">Notas no Speaker</h3>
          <div>
            <button type="button" className="text-5xl bg-green-600 text-white px-3 rounded mx-3">+</button>
            <button type="button" className="text-5xl bg-red-600 text-white px-3 rounded mx-3">-</button>
          </div>
          <h3 className="text-2xl">0</h3>
        </div>
        <img alt="speaker" className="h-72" src="/images/speaker.png" />
        <div className="mx-8 flex flex-col justify-around bg-blue-500 p-8 rounded-[35px] text-white">
          <h3 className="text-2xl">Notas no Speaker<br/>(Amplificado)</h3>
          <div>
            <button type="button" className="text-5xl bg-green-600 text-white px-3 rounded mx-3">+</button>
            <button type="button" className="text-5xl bg-red-600 text-white px-3 rounded mx-3">-</button>
          </div>
          <h3 className="text-2xl">0</h3>
        </div>
      </div>
      <div className="flex justify-center mx-auto my-8 text-center bg-blue-900 w-1/2 px-8 py-10 rounded-[35px]">
        <img src="/images/amp.png" alt="amp" />
        <div className="mx-8 flex flex-col justify-around bg-blue-500 p-8 rounded-[35px] text-white">
          <h3 className="text-2xl">Notas no Amp</h3>
          <div>
            <button type="button" className="text-5xl bg-green-600 text-white px-3 rounded mx-3">+</button>
            <button type="button" className="text-5xl bg-red-600 text-white px-3 rounded mx-3">-</button>
          </div>
          <h3 className="text-2xl">0</h3>
        </div>
      </div>
      <div className="flex justify-center align-center">
          <button type="button">
                <div className="flex align-center text-center font-bold bg-yellow-300 p-6 rounded-[25px]">
                Avançar para o Endgame
                </div>
          </button>
      </div>
    </form>
  );
}

export default Teleoperated;
