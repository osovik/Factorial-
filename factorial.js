function factorial(num){
    if (num < 0) return
    if (num ===1) return num
    return num * factorial(num-1)
}


factorial(5)//please write your num