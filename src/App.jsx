import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { TABS } from './const.js'
import { CoffeCard } from './components/CoffeCard.jsx'


function App() {
  const [coffes, setCoffes] = useState(Array(0))
  const [selectedTab, setSelectedTab] = useState(TABS.ALL)

  useEffect(() => {
    fetch(` https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`)
      .then(res => res.json())
      .then(data => setCoffes(data))
  }, [])

  return (
    <>
    <section className='main-container'>
      <header>
        <h1 className='title'>Our Collection</h1>
        <p className='text'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </header>
      <nav>
        <button
          className={`tabs-tab${selectedTab === TABS.ALL ? ' selected' : ''}`}
          onClick={() => setSelectedTab(TABS.ALL)}
        >
          {TABS.ALL}
        </button>
        <button
          className={`tabs-tab${selectedTab === TABS.AVAILABLE ? ' selected' : ''}`}
          onClick={() => setSelectedTab(TABS.AVAILABLE)}
        >
          {TABS.AVAILABLE}
          </button>
      </nav>

      <main>
        {
        coffes.map((coffe, index) => (
          (selectedTab == TABS.ALL || coffe.available)
          && <CoffeCard
                key={index}
                name={coffe.name}
                image={coffe.image}
                price={coffe.price}
                rating={coffe.rating}
                votes={coffe.votes}
                popular={coffe.popular}
                available={coffe.available}
          />
        ))}
      </main>

    </section>

    </>
  )
}

export default App
