let a11=document.querySelector("#a11"),
    a21=document.querySelector("#a21"),
    a31=document.querySelector("#a31"),
    a12=document.querySelector("#a12"),
    a22=document.querySelector("#a22"),
    a32=document.querySelector("#a32"),
    a13=document.querySelector("#a13"),
    a23=document.querySelector("#a23"),
    a33=document.querySelector("#a33"),
    b1=document.querySelector("#b1"),
    b2=document.querySelector("#b2"),
    b3=document.querySelector("#b3"),
    x1=document.querySelector("#x1"),
    x2=document.querySelector("#x2"),
    btn1=document.querySelector("#btn1"),
    cases=document.querySelectorAll(".case"),
    x3=document.querySelector("#x3");
    resultat=document.querySelector("#resultat");

function cramr(a11,a12,a13,b1,a21,a22,a23,b2,a31,a32,a33,b3) {
    let k = ((a11*a22*a33)+(a12*a23*a31)+(a13*a21*a32))-(a31*a22*a13)-(a32*a23*a11)-(a33*a21*a12),
        k1 =((b1*a22*a33)+(a12*a23*b3)+(a13*b2*a32))-(b3*a22*a13)-(a32*a23*b1)-(a33*b2*a12),
        k2 =((a11*b2*a33)+(a23*b1*a31)+(a13*a21*b3))-(a31*a13*b2)-(a23*b3*a11)-(b1*a21*a33),
        k3 =((a11*a22*b3)+(a12*b2*a31)+(b1*a21*a32))-(a31*a22*b1)-(a32*b2*a11)-(b3*a21*a12),
        solution1 = (k1.toFixed(2))/(k.toFixed(2)),
        solution2 = (k2.toFixed(2))/(k.toFixed(2)),
        solution3 = (k3.toFixed(2))/(k.toFixed(2));

    let reponse = solution1 + " " + " " + " " + solution2 + " " + " "  + solution3;
    if (k>0){
        x1.innerText = solution1.toFixed(2);
        x2.innerText = solution2.toFixed(2);
        x3.innerText = solution3.toFixed(2);
    }
    else
    {
        resultat.innerHTML = " Cette equation n'a pas de solution";
    }


    return reponse ;
}


btn1.addEventListener("click", function (){
    for (let i=0; i<=cases.length; i++){

        if (cases[i].value !== ""){
            cramr(a11.value,a12.value, a13.value, b1.value,a21.value,a22.value,a23.value,b2.value,a31.value,a32.value,a33.value,b3.value);
        }

        // else {
        //     cases[i].value = 0;
        //     alert("pas de solution")
        // }
    }

})