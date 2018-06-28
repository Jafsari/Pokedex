export const check = () => {
    if (count === 2) {
        return;
    }
    let count = 0;
    setInterval(function(){
        count++
    },1000)
    check()
}

export const imperativeCheck = () => {

}