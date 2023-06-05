export function CharToBin(chr:string){
    if(chr == '') return '';
    const code = chr.toUpperCase().charCodeAt(0);
    if(code>64){
        return (code-64).toString(2).padStart(5, '0');
    }else{
        throw Error(code+' not in range');
    }
}

