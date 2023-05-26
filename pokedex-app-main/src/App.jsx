import './Styles/App.css'

function App() {


  return (
    <>
      <div className="web-container">
        <header>
          <div className="logo-container">
            <img src="/src/assets/Images/Pokeball.png" alt="" />
            <h1>POKEDEX</h1>
          </div>

          <div className="header-background-container">
          </div>
        </header>

        <main>
          <div className="search-container">
            <div className="filter-container">
              <div className="current-filter">
                no hay filtro seleccionado              
              </div>
            </div>

            <div className="search-container-nav">
              <input type="search" placeholder='Buscar'/>
            </div>
          </div>

          <div className="loader-container">
          <div className="pikachu-run-container">
            aca va el pikachu corriendo
          </div>
          </div>

          <div className="elements-filter-container">

            <div className="numeric-sort-container">
              <img src="/numeric-sort.png" alt="" />
            </div>

            <div className="select-container">
              <select name="" id="">
                <option value="">Electric</option>
                <option value="">Fire</option>
                <option value="">Water</option>
              </select>
            </div>

            <div className='alphabetic-sort-container'>
              <img src="/sortA.png" alt="" />
            </div>           

          </div>

          

          <div className="type-pk-container">
            <div className='type-filter-container'>


              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>

              <div className='card-1'>
                <div className='tittle-class'>
                  <h3>tipo</h3>
                </div>

              </div>


            </div>
          </div>

          <footer>
            <div className="pikachu-run-container">

            </div>

            <div className='footer-info-container'>
              aca iria algo            
            </div>
          </footer>
        </main>

      </div>
    </>
  )
}

export default App
