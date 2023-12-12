interface lt {
    lts?:boolean;
}

export default function Ls({ lts }:lt){

    const l = lts ? 'dark' : ''
    return l
}