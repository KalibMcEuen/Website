let tabledata = []
function add() {
    const course = document.querySelector('course').value;
    const credits = document.querySelector('credits').value;
    const instructor = document.querySelector('instructor').value;
    tabledata.push(course, credits, instructor);
    console.log(tabledata);
}

function tablemaker() {
    table1Columns ++;
    document.querySelector(".mathrow").innerHTML = '<table></table>';
    console.log(table1Columns)
}

function tableremover() {
    if (table1Columns === 1) {
        return 0
    }
    
    else {
        table1Columns --;
    } 
    document.querySelector(".table1").innerHTML = '<table></table>';
    console.log(table1Columns);
}