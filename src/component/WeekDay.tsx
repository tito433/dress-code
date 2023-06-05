export default function WeekDay(props:{
    value: Date,
    color: string | undefined
}){
    return (
        <div className={`day ${props.color}`}>
            <div className='sqr'></div>
            <div className='ct'>
                {props.value.getDate()}
            </div>
        </div>
    )
}