import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import style from '../style/components/ExperienceBar.module.css'

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNExtLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

   return (
       <header className={style.experienceBar}>
           <span>0 xp</span>
           <div>
               <div style={{ width: `${percentToNExtLevel}%`}}>
                   <span className={style.currentExperience} style={{left: `${percentToNExtLevel}%`}}>{currentExperience} xp</span>
               </div>
           </div>
           <span>{experienceToNextLevel} xp</span>
       </header>
   );
}