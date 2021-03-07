import { access } from 'node:fs';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../style/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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