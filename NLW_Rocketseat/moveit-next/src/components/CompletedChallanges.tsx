import style from '../style/components/CompletedChallanges.module.css'

export function CompletedChallanges(){
    return(
        <div className={style.completedChallangesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}