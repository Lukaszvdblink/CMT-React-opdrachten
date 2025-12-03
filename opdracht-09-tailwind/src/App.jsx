import './App.css'

function App() {

  return (
    <>
      <section className='mx-auto w-1/2'>
        <section className='w-48 '>
          <div className='flex'>
            <img src="/img/foto2.png" alt="Workcation" />
            <h1>Work<span className='text-violet-300'>cation</span></h1>
          </div>
         <img className='w-64' src="/img/foto.png" alt="Workcation" />
          <h2 className='text-2xl font-bold'>you can work form anywhere. <span className='text-violet-300'>take advantage of it</span></h2>
          <p>workation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when your not on vacation</p>

          <button className='bg-violet-300'>Book your escape</button>

        </section>
      </section>
    </>
  )
}

export default App
