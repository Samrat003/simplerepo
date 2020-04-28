function currencyConverter(){
    if(document.getElementById("inRes").value<=0){
        window.alert("Enter The correct value");
    }else{
        let x=document.getElementById("inRes").value;
        let y=(x*76.50).toFixed(2);
        document.getElementById("rupess").value=y;
    }
}