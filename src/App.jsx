import { useState } from 'react'
import Score from './Components/Score/Score'
import Buttons from './Components/Buttons/Buttons'
import MyRules from './Components/MyRules/MyRules'
import Choices from './Components/Choices/Choices'

import Paper from "./assets/img/icon-paper.svg"
import Rock from "./assets/img/icon-rock.svg"
import Scissors from "./assets/img/icon-scissors.svg"


function App() {

  const [choicePlayer,setChoicePlayer] = useState("")

  const [choiceHouse,setChoiceHouse] = useState("")

  //score Player

  const[scorePlayer,setScorePlayer] = useState(0)

  //to check whether player has chosen or not, leading to next display
  const [madeChoice,setMadeChoice] = useState(false)

  //winning text

  const[resultRound,setResultRound] = useState("")

  //chose random choice computer

  let options=[Scissors,Rock,Paper]

  //to verify if rules menu opened or not
  const [openRules, setOpenRules] = useState(false)

  function randomChoice(){

    // get random index within my array "options"
    // Math.floor() returns the nearest integer value generated by Math.random() 
    let randomIndex = Math.floor(Math.random() * options.length);

    // get random item with index within my array "options"
    let item = options[randomIndex];
    console.log(item)

    return item;

  }

  function winnerRound(playerChoice,houseChoice){
    if(playerChoice == houseChoice){
      setResultRound("IT'S A TIE")
    } else if((playerChoice == Scissors && houseChoice == Paper) || (playerChoice == Rock && houseChoice == Scissors) || (playerChoice == Paper && houseChoice == Rock)){
      setResultRound("YOU WON")
      setScorePlayer(scorePlayer + 1)
    } else {
      setResultRound("YOU LOST")
      if(scorePlayer > 0){
        setScorePlayer(scorePlayer - 1)
      } else{
        setScorePlayer(0)
      }
    }
  }

  function round(choice){

    setChoicePlayer(choice)
    const houseChosing = randomChoice()
    setChoiceHouse(houseChosing)
    winnerRound(choice,houseChosing)

  }


  return (
    <div className='w-screen h-screen bg-[#182343ff] flex flex-col justify-center items-center relative'>

    <div className='w-[80%] h-[30%] flex justify-center items-center'>
      <Score scorePlayer={scorePlayer}/>
    </div>

    <div className='w-[80%] h-[70%] flex justify-center items-center'>

        {
        madeChoice == false ? <Buttons round={round} setMadeChoice={setMadeChoice} Scissors={Scissors} Rock={Rock} Paper={Paper}/>

          :

        <Choices resultRound={resultRound} setMadeChoice={setMadeChoice} choicePlayer={choicePlayer} choiceHouse={choiceHouse} Scissors={Scissors} Rock={Rock} Paper={Paper}/>

        }

    </div>


    <div className='absolute right-5 bottom-5'>
        <button onClick={()=>{openRules == false ? setOpenRules(true) : ""}} className='border-white text-white rounded-lg border-solid border-2 flex justify-center items-center px-6 py-2 font-barlow font-semibold tracking-widest'>RULES</button>
    </div>  

      {

        openRules && <MyRules openRules={openRules} setOpenRules={setOpenRules}/>

      } 

    </div>
  )
}

export default App
