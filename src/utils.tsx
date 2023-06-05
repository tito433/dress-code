export function CharToBin(chr:string){
    const code = chr.toUpperCase().charCodeAt(0);
    if(code>64){
        return code.toString(2);
    }else{
        throw Error(code+' not in range');
    }
}

