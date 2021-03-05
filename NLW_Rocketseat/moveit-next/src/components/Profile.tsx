import style from '../style/components/Profile.module.css'

export function Profile(){
    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/AmandaRH07.png" alt="Amanda Hass" />
            <div>
                <strong>Amanda Hass</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    );
}