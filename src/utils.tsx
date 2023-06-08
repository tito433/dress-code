
const montNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function CharToBin(chr:string){
    if(chr == '') return '';
    const code = chr.toUpperCase().charCodeAt(0);
    if(code>64){
        return (code-64).toString(2).padStart(5, '0');
    }else{
        throw Error(code+' not in range');
    }
}

export function GetBinColor(chr:string){
    return chr === "1"? 'red' : 'black';
}


export function IsValidDay(date: Date){
    const dayofweek = date.getDay();
    if(dayofweek !=0 && dayofweek !=6){
        return true;
    }
    //TODO: include govt holidays?
    return false;
}

export function GetMonthName(month:number){
    return montNames[month];
}