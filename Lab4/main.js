var size=9;
var xhr = new XMLHttpRequest();
xhr.open("GET", "scratch.xml", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDoc = xhr.responseXML;
        var colors = xmlDoc.getElementsByTagName("color");
        var table = document.getElementById("color-table");
        var randomIndexes = [];
        while (randomIndexes.length < size*size) {
            var randomIndex = Math.floor(Math.random() * colors.length);
            randomIndexes.push(randomIndex);
        }
        var index = 0;
        for (var i = 0; i < size; i++) {
            var row = table.insertRow(-1);
            for (var j = 0; j < size; j++) {
                var randomColor = colors[randomIndexes[index]].textContent;
                var cell = row.insertCell(j);
                cell.className = "color-cell color";
                cell.style.backgroundColor = randomColor;
                cell.textContent = randomColor;
                index++;
            }
        }
    }
};
xhr.send();