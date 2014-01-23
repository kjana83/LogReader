var fs = require("fs");
var filePath = "E:/\Jana/\Workshop/\NodejsApp/\NodejsApp/\csvtest.csv";


var CsvData = function() {
    this.FirstName = '';
    this.LastName = '';
    this.EmpNo = '';
    this.Desig = '';
};

exports.getLogs=function(req, res) {
    
    fs.readFile(filePath, 'utf8', function(err, data) {
    var items=[];
    var lines=data.split(/\r\n|\r|\n/g);
    
    lines.forEach(function(line) {
        
        var lineData = line.split(',');
        if (lineData[0]) {
            var csvData = new CsvData();
            csvData.FirstName = lineData[0];
            csvData.LastName = lineData[1];
            csvData.EmpNo = lineData[2];
            csvData.Desig = lineData[3];
            items.push(csvData);
        }
    });
    
    if (err) {
        console.error('Unable to read');
    }
    console.log(items);
        res.send(items);
});
    
};