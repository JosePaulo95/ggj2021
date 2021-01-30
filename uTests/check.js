
Check = checks => {
    !checks.some(check => {
        if(check[0] !== check[1]){
            console.log(check);
            console.log(check[0]);
            console.log(check[1]);
            return false
        }
        return true
    });//true somente não tiver nenhum false
}