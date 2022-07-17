window.addEventListener('DOMContentLoaded', (event) => {
    const recipes = [];
    const snos = [];
    let btn = document.getElementById('done');
    btn.addEventListener('click', function(){
        let name = document.getElementById('name').value;
        let calories = document.getElementById('calories').value;
        const ingredients = [];
        let ings = document.getElementsByClassName('ings');
        for(let id of ings){
            let val = id.value;
            if(val!=""){
                ingredients.push(" "+val);
            }
        }
        let type = document.querySelector('input[name="radio-choice-b"]:checked').value;
        var sno = 1;
        if(snos.length!=0){
            sno = snos.at(-1) + 1;
        }
        snos.push(sno);
        let ingredientList = ingredients.toString();
        // const myJSON = '{"name":"John", "age":30, "car":null}';
        const myJSON = '{"sno":'+sno+', "name":"'+name+'", "ings":"'+ingredientList+'", "type":"'+type+'", "calories":'+calories+'}';
        const myObj = JSON.parse(myJSON);
        recipes.push(myObj);
        var rows = '';
        for(let i = 0;i<recipes.length;i++){
            rows+="<tr><th>"+recipes.at(i).sno+"</th><td>"+recipes.at(i).name+"</td><td>"+recipes.at(i).ings+"</td><td>"+recipes.at(i).type+"</td><td>"+recipes.at(i).calories+"</td><td><a id='"+i+"' href='#' class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext'>Delete</a></td></tr>";
        }
        document.getElementsByTagName('tbody')[0].innerHTML = rows;
        const cbtn = document.querySelectorAll('.ui-icon-delete');
    cbtn.forEach(cb => {
        cb.addEventListener('click', function(){
            let index = cb.id;
            recipes.splice(index,1);
            var rows = '';
            for(let i = 0;i<recipes.length;i++){
                rows+="<tr><th>"+recipes.at(i).sno+"</th><td>"+recipes.at(i).name+"</td><td>"+recipes.at(i).ings+"</td><td>"+recipes.at(i).type+"</td><td>"+recipes.at(i).calories+"</td><td><a id='"+i+"' href='#' class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext'>Delete</a></td></tr>";
            }
            document.getElementsByTagName('tbody')[0].innerHTML = rows;
        });
    });
    });
    document.getElementById('delAll').addEventListener('click', function(){
        recipes.length = 0;
        document.getElementsByTagName('tbody')[0].innerHTML = '';
    });
});
const cbtn = document.querySelectorAll('.ui-icon-delete');
    cbtn.forEach(cb => {
        cb.addEventListener('click', function(){
            let index = cb.id;
            recipes.splice(index,1);
            var rows = '';
            for(let i = 0;i<recipes.length;i++){
                rows+="<tr><th>"+recipes.at(i).sno+"</th><td>"+recipes.at(i).name+"</td><td>"+recipes.at(i).ings+"</td><td>"+recipes.at(i).type+"</td><td>"+recipes.at(i).calories+"</td><td><a id='"+i+"' href='#' class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext'>Delete</a></td></tr>";
            }
            document.getElementsByTagName('tbody')[0].innerHTML = rows;
        });
    });