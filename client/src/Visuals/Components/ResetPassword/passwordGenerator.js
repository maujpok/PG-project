export default function generator(){
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''
    for(let i = 0; i<=20;i++){
        pass+=characters[Math.floor(Math.random()*characters.length)]
    }
    return pass
}