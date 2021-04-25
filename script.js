const button = document.getElementById("confirm")
var res = []
var k = 0; var l = 0; var m = 0; var n = 0; var o = 0; var p = 0; var q = 0;
zero = function(num){
    if (num == 0){
        return true
    }else{
        return false
    }
}
button.onclick = function(){
    if (document.getElementById("num-atomico-pass").value == ''){
        alert('Insira um valor')
    }else if(Number(document.getElementById("num-atomico-pass").value) > 118 || document.getElementById("num-atomico-pass".value) == Infinity || Number(document.getElementById("num-atomico-pass".value)) == NaN){
        alert('Insira somente números atômicos contidos na tabela periódica')
    }else{
        var num = Number(document.getElementById("num-atomico-pass").value)
        if(num >= 2){
            num -= 2
            k+=2
            res.push('1s<sup>2</sup>')
            if(num >= 2){
                num -= 2
                l+=2
                res.push(' 2s<sup>2</sup>')
                if(num >=6){
                    num -= 6
                    l+=6
                    res.push(' 2p<sup>6</sup>')
                    if (num >= 2){
                        num -= 2
                        m+=2
                        res.push(' 3s<sup>2</sup>')
                        if (num >= 6){
                            num -= 6
                            m+=6
                            res.push(' 3p<sup>6</sup>')
                            if (num >= 2){
                                num -= 2
                                n+=2
                                res.push(' 4s<sup>2</sup>')
                                if(num >= 10){
                                    num -= 10
                                    m+=10
                                    res.push(' 3d<sup>10</sup>')
                                    if(num >= 6){
                                        num -= 6
                                        n+=6
                                        res.push(' 4p<sup>6</sup>')
                                        if(num >= 2){
                                            num -= 2
                                            o+=2
                                            res.push(' 5s<sup>2</sup>')
                                            if(num >= 10){
                                                num -= 10
                                                n+=10
                                                res.push(' 4d<sup>10</sup>')
                                                if(num >= 6){
                                                    num -= 6
                                                    o+=6
                                                    res.push(' 5p<sup>6</sup>')
                                                    if(num >= 2){
                                                        num -= 2
                                                        p+=2
                                                        res.push(' 6s<sup>2</sup>')
                                                        if (num >= 14){
                                                            num -= 14
                                                            n+=14
                                                            res.push(' 4f<sup>14</sup>')
                                                            if(num >= 10){
                                                                num -= 10
                                                                o+=10
                                                                res.push(' 5d<sup>10</sup>')
                                                                if(num >= 6){
                                                                    num-=6
                                                                    p+=6
                                                                    res.push(' 6p<sup>6</sup>')
                                                                    if(num >= 2){
                                                                        num -= 2
                                                                        q+=2
                                                                        res.push(' 7s<sup>2</sup>')
                                                                        if(num >= 14){
                                                                            num -= 14
                                                                            o+=14
                                                                            res.push(' 5f<sup>14</sup>')
                                                                            if (num >= 10){
                                                                                num -= 10
                                                                                p+=10
                                                                                res.push(' 6d<sup>10</sup>')
                                                                            }else{
                                                                                if(zero(num) == false){
                                                                                res.push(`6d<sup>${num}</sup>`)
                                                                                p+=num
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(zero(num) == false){
                                                                            res.push(`5f<sup>${num}</sup>`)
                                                                            o+=num
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(zero(num) == false){
                                                                        res.push(`7s<sup>${num}</sup>`)
                                                                        q+=num
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(zero(num) == false){
                                                                    res.push(`6p<sup>${num}</sup>`)
                                                                    p+=num
                                                                    }
                                                                }
                                                            }else{
                                                                if(zero(num) == false){
                                                                res.push(`5d<sup>${num}</sup>`)
                                                                o+=num
                                                                }
                                                            }
                                                        }else{
                                                            if(zero(num) == false){
                                                            res.push(`4f<sup>${num}</sup>`)
                                                            n+=num
                                                            }
                                                        }
                                                    }else{
                                                        if(zero(num) == false){
                                                        res.push(`6s<sup>${num}</sup>`)
                                                        p+=num
                                                        }
                                                    }
                                                }else{
                                                    if(zero(num) == false){
                                                    res.push(`5p<sup>${num}</sup>`)
                                                    o+=num
                                                    }
                                                }
                                            }else{
                                                if(zero(num) == false){
                                                res.push(`4d<sup>${num}</sup>`)
                                                n+=num
                                                }
                                            }
                                        }else{
                                            if(zero(num) == false){
                                            res.push(`5s<sup>${num}</sup>`)
                                            o+=num
                                            }
                                        }
                                    }else{
                                        if(zero(num) == false){
                                        res.push(`4p<sup>${num}</sup>`)
                                        n+=num
                                        }
                                    }
                                }else{
                                    if(zero(num) == false){
                                    res.push(`3d<sup>${num}</sup>`)
                                    m+=num
                                    }
                                }
                            }else{
                                if(zero(num) == false){
                                res.push(`4s<sup>${num}</sup>`)
                                n+=num
                                }
                            }
                        }else{
                            if(zero(num) == false){
                            res.push(`3p<sup>${num}</sup>`)
                            m+=num
                            }
                        }
                    }else{
                        if(zero(num) == false){
                        res.push(`3s<sup>${num}</sup>`)
                        m+=num
                        }
                    }
                }else{
                    if(zero(num) == false){
                    res.push(`2p<sup>${num}</sup>`)
                    l+=num
                    }
                }
            }else{
                if(zero(num) == false){
                res.push(`2s<sup>${num}</sup>`)
                l+=num
                }
            }
        }else{
            if(zero(num) == false){
                res.push('1s<sup>1</sup>')
                k+=1
            }
            }
        }
    console.log(res)
    console.log(num)
    document.getElementById("divisao").innerHTML = res
    document.getElementById("k").innerHTML = k
    document.getElementById("l").innerHTML = l
    document.getElementById("m").innerHTML = m
    document.getElementById("n").innerHTML = n
    document.getElementById("o").innerHTML = o
    document.getElementById("p").innerHTML = p
    document.getElementById("q").innerHTML = q
    res=[]
    k = 0; l = 0; m = 0; n = 0; o = 0; p = 0; q = 0;
}
