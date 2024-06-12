import React, { useState } from 'react'
import { difficultyLevel } from '../../utils/constants'
import { useDispatch,useSelector} from 'react-redux';
import { difficultyLevelFunc } from '../features/gamelogicSlice';


function DifficultyLevel() {
  const dispatch = useDispatch();
  const[difLevel,setDifLevel] = useState();
  const gameState = useSelector((state)=>state.gameLogic)


  return (
    <div className='difficulty-leve-main-container'>
        <select onClick={(e)=>dispatch(difficultyLevelFunc(JSON.parse(e.target.value)))}>
            {
                difficultyLevel.map((item,index)=>{
                    return(
                        <option key={index} 
                          value={JSON.stringify(item)} 
                          selected={item.name ==gameState.difficultyLevel.name}>
                            {item.name}
                        </option>
                    )
                })
            }

        </select>
        <div>
          <ul>
            <li>difficulty level {gameState.difficultyLevel.name}</li>
            <li>to win must match {gameState.difficultyLevel.box} boxs</li>
            <li>if you won you will recive {gameState.difficultyLevel.points}x times </li>
          </ul>
    

        </div>
      
    </div>
  )
}

export default DifficultyLevel