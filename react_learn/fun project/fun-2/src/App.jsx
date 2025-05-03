import './App.css'
import GameBoard from './components/GameBoard'
import withEventHandlers from './components/withEventHandlers'


const EnhancedGame = withEventHandlers(GameBoard);

function App() {

  

  return (
    <>
      <h1 className='text-white text-2xl h-10 w-40 text-center rounded-2xl bg-blue-300 '>hi my new project</h1>
      <EnhancedGame />
    </>
  )
}

export default App
