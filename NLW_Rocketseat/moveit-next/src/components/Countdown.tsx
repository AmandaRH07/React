import { access } from 'node:fs';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import style from '../style/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const {startNewChallenges} = useContext(ChallengesContext);

    const[time, setTime] = useState(0.1 * 60);
    const[isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0){
            setTimeout(() => {
                setTime(time -1);
            }, 1000)
        } else if( isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenges();
        }
    }, [isActive, time])

    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div className={style.block}>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
               <button disabled className={style.countdownButton}> Ciclo encerrado
                </button>
            ) : (
            <>
                {isActive ? (
                <button 
                    type="button" 
                    className={`${style.countdownButton} ${style.countdownButtonActive}`} 
                    onClick={resetCountdown}>Abandonar ciclo
                </button>
                ) : (
                <button 
                    type="button" 
                    className={style.countdownButton} 
                    onClick={startCountdown}>Iniciar ciclo
                </button>
                )}
            </>
            )}
        </div>
        );
}