buttonClick('loginButton');

function buttonClick(id){
document.getElementById(id).addEventListener('click', function(){
    document.getElementById('id2').style.display="none"
    document.getElementsByClassName('hidden')[0].style.display='block';
    })
}

function add_money(id, id2, id3){
    document.getElementById(id).addEventListener('click', function(){
    let int= parseFloat(document.getElementById(id2).value);
    let y= parseFloat(document.getElementById(id3).innerText);
    let add= (y+int).toFixed(2);
    document.getElementById(id3).innerText=add;
    })
    
    
}
add_money('addMoney', 'value', 'insertMoney');
plus('addMoney', 'value', 'totalMoney');
add_money('takeMoney', 'value2', 'okMoney');
minus('takeMoney', 'value2', 'totalMoney');

function minus(id, id2, id3){
    document.getElementById(id).addEventListener('click', function(){
        let int= parseFloat(document.getElementById(id2).value);
        let y= parseFloat(document.getElementById(id3).innerText);
        let add= (y-int).toFixed(2);
        document.getElementById(id3).innerText=add;
        document.getElementById(id2).value='';
        })
}

function plus(id, id2, id3){
    document.getElementById(id).addEventListener('click', function(){
        let int= parseFloat(document.getElementById(id2).value);
        let y= parseFloat(document.getElementById(id3).innerText);
        let add= (y+int).toFixed(2);
        document.getElementById(id3).innerText=add;
        document.getElementById(id2).value='';
        })
}
