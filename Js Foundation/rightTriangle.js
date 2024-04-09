function rightAngle(n){
    for(let i=0; i<n; i++){
        let asterisk = "";
        for(let j=i; j<n; j++){
            asterisk += "*";
        }
        console.log(asterisk);
    }
}

rightAngle(6);
rightAngle(10);

