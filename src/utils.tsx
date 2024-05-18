
const montNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function CharToBin(chr:string){
    if(chr === '') return '';
    const code = chr.charCodeAt(0);
    return code.toString(2).padStart(8, '0');
}

export function GetBinColor(chr:string){
    return chr === "1"? 'black':'';
}


export function IsValidDay(date: Date, excludeWeekend = true){
    const dayofweek = date.getDay();
    const isWeekend = dayofweek === 0 || dayofweek === 6;
    if(isWeekend && excludeWeekend ){
        return false;
    }
    //TODO: include govt holidays?
    return true;
}

export function GetMonthName(month:number){
    return montNames[month];
}