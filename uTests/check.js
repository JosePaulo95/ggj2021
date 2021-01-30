
Check = checks => {
    !checks.some(check => {
        if(check[0] != check[1]){
            console.log(check[0] +" != "+check[1]);
        }
        return check[0] != check[1]
    });//true somente não tiver nenhum false
}