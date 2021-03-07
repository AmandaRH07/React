import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../style/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completedChallenge} = useContext(ChallengesContext);
    const {resetCountdown} =  useContext(CountdownContext);
    
    function handleChallengeSucceded(){
        completedChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        completedChallenge();
        resetCountdown();
    }

    return(
        <div className={style.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <br/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button" 
                            className={style.challengeFailedButton}
                            onClick={handleChallengeFailed}>Falhei</button>
                        <button
                            type="button" 
                            className={style.challengeSucccededButton}
                            onClick={handleChallengeSucceded}> Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={style.challengeNoActive}> 
                    <strong>
                        Finalize um ciclo para receber um desafio
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        <br/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    )
}