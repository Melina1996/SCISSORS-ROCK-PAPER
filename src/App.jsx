import { useState } from 'react'
import Score from './Components/Score/Score'
import Buttons from './Components/Buttons/Buttons'
import MyRules from './Components/MyRules/MyRules'
import Result from './Components/Result/Result'
import ResultRound from './Components/ResultRound/ResultRound'

import Paper from "./assets/img/icon-paper.svg"
import Rock from "./assets/img/icon-rock.svg"
import Scissors from "./assets/img/icon-scissors.svg"
import Triangle from "./assets/img/bg-triangle.svg"
import Close from "./assets/img/icon-close.svg"
import Rules from "./assets/img/image-rules.svg"


function App() {

  //useStates for Choices (Rock,Scissors,Paper) for Player and House
  const [choicePlayer,setChoicePlayer] = useState("")

  const [choiceHouse,setChoiceHouse] = useState("")

  //changing score Player
  const[scorePlayer,setScorePlayer] = useState(0)

  //to check whether player has chosen or not, leading to display with two choices and result
  const [madeChoice,setMadeChoice] = useState(false)

  //changing text for result of each round
  const[resultRound,setResultRound] = useState("")

  //to verify if rules menu opened or not
  const [openRules, setOpenRules] = useState(false)

  //color bg & box-shadow for each of the choices 
  const[styleBtn,setStyleBtn] = useState([{
    img: Paper,
    bgColor : "bg-[#4F6BF3ff]",
    shadow : "shadow-lila"
  },
  {
    img : Scissors,
    bgColor : "bg-[#EFA41Cff]",
    shadow : "shadow-yellow"
  },
  {
    img: Rock,
    bgColor : "bg-[#DB324Fff]",
    shadow : "shadow-red"
  }
  ])

  //style of Player Choice Btn
  const[styleBtnSelected,setStyleBtnSelected] = useState([""])

  //style of House Choice Btn
  const[styleBtnSelectedHouse,setStyleBtnSelectedHouse] = useState([""])


  //array with all my options for random choice computer
  let options=[Scissors,Rock,Paper]


  //FUNCTION to select a random element from my array
  function randomChoice(){

    // get random index within my array "options"
    // Math.floor() returns the nearest integer value generated by Math.random() 
    let randomIndex = Math.floor(Math.random() * options.length);

    // get random item with index within my array "options"
    let item = options[randomIndex];

    return item;

  }

  //FUNCTION to see if player won: if yes, his score is added 1, if not -1 and useState-Function for winning Text respectively changes
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

  //MAIN-FUNCTION FOR GAME: onCLick, this function is called to (1)change the value of player choice, (2)call the random selection function (3)assign style for selected Choice House (4) calculates who won and changes score & text respectively
  function round(choice){

    setChoicePlayer(choice)
    const houseChosing = randomChoice()
    setChoiceHouse(houseChosing)
    if(houseChosing == Paper){
      setStyleBtnSelectedHouse([styleBtn[0].bgColor,styleBtn[0].shadow])
    } else if(houseChosing == Scissors){
      setStyleBtnSelectedHouse([styleBtn[1].bgColor,styleBtn[1].shadow])
    } else if(houseChosing == Rock){
      setStyleBtnSelectedHouse([styleBtn[2].bgColor,styleBtn[2].shadow])
    }
    winnerRound(choice,houseChosing)

  }


  return (
    <div className='w-screen h-screen bg-[#182343ff] flex flex-col justify-center items-center relative'>

    <div className='w-[80%] h-[30%] flex justify-center items-center'>

      <Score scorePlayer={scorePlayer}/>

    </div>

    <div className='w-[95%] h-[70%] flex justify-center items-center'>

    {/* double ternary condition: if the players score is not yet 3 AND the player has not yet made a choice, I show three btns to chose an element */}
    { scorePlayer !=3 ?
        
        (madeChoice == false ?
          <div className='bg-triangle bg-no-repeat w-[370px] h-[370px] md:w-[420px] md:h-[420px] bg-center flex relative'>
          <Buttons styling={"rounded-full w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex justify-center items-center absolute md:top-5 top-[-2px] left-[-2px] md:left-0"} bg={styleBtn[0].bgColor} shadow={styleBtn[0].shadow} styleBtn={styleBtn} img={Paper} setStyleBtnSelected={setStyleBtnSelected} round={round} setMadeChoice={setMadeChoice} Scissors={Scissors} Rock={Rock} Paper={Paper}/>
          <Buttons styling={"rounded-full w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex justify-center items-center absolute md:top-5 md:right-0 top-[-2px] right-[-2px]"} bg={styleBtn[1].bgColor} shadow={styleBtn[1].shadow} styleBtn={styleBtn} img={Scissors} setStyleBtnSelected={setStyleBtnSelected} round={round} setMadeChoice={setMadeChoice} Scissors={Scissors} Rock={Rock} Paper={Paper}/>
          <Buttons styling={"rounded-full w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex justify-center items-center absolute md:bottom-5 bottom-8 left-1/2 transform -translate-x-1/2"} bg={styleBtn[2].bgColor} shadow={styleBtn[2].shadow} styleBtn={styleBtn} img={Rock} setStyleBtnSelected={setStyleBtnSelected} round={round} setMadeChoice={setMadeChoice} Scissors={Scissors} Rock={Rock} Paper={Paper}/>
          </div>
          :

          // if player has already made choice, we show player's and computer's choice and respective result
        <div className='w-[100%] md:w-[100%] h-[100%] flex justify-center items-center pt-4 font-barlow font-semibold tracking-widest'>

          <div className='relative w-[100%] h-[100%] flex justify-center items-start gap-10'>
        
            <div className='md:w-[38%] w-[50%] h-[70%] flex flex-col md:justify-center items-center gap-10 md:order-first order-first'>

                <h1 className='text-white md:text-2xl order-last md:order-first'>YOU PICKED</h1>

                <Buttons styling={"relative rounded-full md:w-[210px] md:h-[210px] w-[150px] h-[150px] flex justify-center items-center top-5 left-0"} bg={styleBtnSelected[0]} shadow={styleBtnSelected[1]} img={choicePlayer} pulse={`${resultRound == "YOU WON" ? "myPulse" : ""}`}/>

            </div>

            <ResultRound resultRound={resultRound} setMadeChoice={setMadeChoice}/>

            <div className='md:w-[38%] w-[50%] h-[70%] flex flex-col md:justify-center items-center gap-10 md:order-3 order-last'>

                <h1 className='text-white md:text-2xl order-last md:order-first'>THE HOUSE PICKED</h1>

                <Buttons styling={"relative rounded-full md:w-[210px] md:h-[210px] w-[150px] h-[150px]  flex justify-center items-center top-5 left-0"} bg={styleBtnSelectedHouse[0]} shadow={styleBtnSelectedHouse[1]} img={choiceHouse} pulse={`${resultRound == "YOU LOST" ? "myPulse" : ""}`}/>


            </div>

        </div>

        </div>
        )
        

      :

      // if player's score is 3, the end display is shown and game can be restarted
      <Result setScorePlayer={setScorePlayer} setMadeChoice={setMadeChoice}/>

      } 

    </div>


    <div className='absolute md:right-5 md:bottom-5 bottom-0'>

      {/* if rules menu is not open (false), then its openend by btnClick, see ternary condition below */}
        <button onClick={()=>{openRules == false ? setOpenRules(true) : ""}} className='border-white text-white rounded-lg border-solid border-2 flex justify-center items-center px-6 py-2 font-barlow font-semibold tracking-widest hover:text-black hover:bg-white'>RULES</button>
    </div>  

      {

        openRules && <MyRules openRules={openRules} setOpenRules={setOpenRules} rules={Rules} close={Close}/>

      } 

    </div>
  )
}


export default App
