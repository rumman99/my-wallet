buttonClick('loginButton');

function buttonClick(id){
document.getElementById(id).addEventListener('click', function(){
    document.getElementById('id2').style.display="none"
    document.getElementsByClassName('hidden')[0].style.display='block';
    })
}

function add_money(id, id2, id3){
    document.getElementById(id).addEventListener('click', function(){
    let int= parseInt(document.getElementById(id2).value);
    let y= parseInt(document.getElementById(id3).innerText);
    let add=int;
    if(id2=="value"|| id2=='value2' && id3=='okMoney'){
        add= y+int;
        document.getElementById(id3).innerText=add;
    }
    else if(id2=="value2"){
        add= y-int;
        document.getElementById(id3).innerText=add;
    }
    })
}

add_money('addMoney', 'value', 'insertMoney');
add_money('addMoney', 'value', 'totalMoney');
add_money('takeMoney', 'value2', 'okMoney');
add_money('takeMoney', 'value2', 'totalMoney');