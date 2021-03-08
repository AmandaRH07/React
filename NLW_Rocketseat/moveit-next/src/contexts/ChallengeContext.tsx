import {createContext, useState, ReactNode, useEffect} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number, 
    currentExperience: number, 
    challengesCompleted: number, 
    experienceToNextLevel: number;
    activeChallenge: Challenge,
    levelUp: () => void,
    startNewChallenges: () => void,
    resetChallenge: () => void,
    completedChallenge: () => void,
    closeLevelUpModal: () => void,
}

interface ChallengesProviderProps{
    // ReactNode aceita qualquer elemento como filho
    children: ReactNode;
    
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level +1) * 4, 2);

    // [] -> primeira função executada apenas uma vez quando a tela é aberta  
    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    },[level, currentExperience, challengesCompleted]);

    function levelUp(){
        setLevel(level +1);
        setIsLevelModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsLevelModalOpen(false);
    }

    function startNewChallenges(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === "granted"){
            new Notification('Novo desafio :D', {
                body: `Valendo ${challenge.amount} xp`
            })
        }

    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completedChallenge(){
        if (!activeChallenge){
            return;
        }
        
        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
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
            completedChallenge,
            closeLevelUpModal,
        }}>
            {children}
            {isLevelModalOpen && <LevelUpModal/>}
        </ChallengesContext.Provider>
    );
}
