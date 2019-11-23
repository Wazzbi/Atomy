var Draw = {};

Draw.all = function(){
    var html = "<table>";
    for (var i=0; i<Board.length; i++){
        html += "<tr>";
        for (var j=0; j<Board.length; j++){
            html += "<td>";
            html += Draw.atoms(Board[j][i]);
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
}

Draw.atoms = function(count){
    var result = "";

    for (var i=0; i<count; i++){
        result += "o";
    }

    return result;
}
