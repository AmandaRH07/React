import {createContext, useState, ReactNode} from 'react';
import challenges from '../../../challenges.json';

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number, 
    currentExperience: number, 
    challengesCompleted: number, 
    activeChallenge: Challenge,
    levelUp: () => void,
    startNewChallenges: () => void,
    resetChallenge: () => void,
    experienceToNextLevel: number;
}

interface ChallengesProviderProps{
    // ReactNode aceita qualquer elemento como filho
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level +1) * 4, 2);

    function levelUp(){
        setLevel(level +1);
    }

    function startNewChallenges(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        
        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    return(
        // provider permite acesso aos dados daquele contexto
        <ChallengesContext.Provider value={{
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenges,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
        }}>
            {children}
        </ChallengesContext.Provider>
    );
}
