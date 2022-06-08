let a= parseInt(prompt('Enter a year'));
if(a%4==0) {
    if (a % 100 == 0) {
        if (a % 400 == 0) {
            alert(a + 'is leap');
        } else {
            alert(a + 'is not leap');
        }
    } else {
        alert(a + 'is leap');
    }
}
    else{
        alert(a+'is not leap');
    }
