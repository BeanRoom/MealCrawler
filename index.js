var cheerio = require('cheerio');
var request = require('request');
var newDate = require('date-utils');

var newDate = new Date();
var time = newDate.toFormat('HH24.MI');

var url = 'http://www.gsm.hs.kr/xboard/board.php?tbnum=8';


request(url, function(error, response, html){
    var $ = cheerio.load(html);
    
    S = ".today";
    
    $(S).each(function(){
        
        var rice = $(this).text();
        
        var n = rice.length;
        
        for(var i=0;i<n;i++){
            
            rice = rice.replace('.', '');
            
            rice = rice.replace('\t', '');
            
            for(var j=0;j<10;j++){
                rice = rice.replace(j,'');
            }
        }
        
        var rice = rice.replace('\n(월)\n\n\n\n\n','');
        
        var rice = rice.replace('\n(화)\n\n\n\n\n','');
        
        var rice = rice.replace('\n(수)\n\n\n\n\n','');
        
        var rice = rice.replace('\n(목)\n\n\n\n\n','');
        
        var rice = rice.replace('\n(금)\n\n\n\n\n','');
        
        var riceArr = rice.split('\n\n\n\n\n\n');
        console.log("PAGE LOADED\n");

        
        for(var i=0;i<3;i++){
            var n = riceArr[i].length;
            for(var j=0;j<n;j++){
                riceArr[i] = riceArr[i].replace('\n','');
                riceArr[i] = riceArr[i].replace('에너지단백질칼슘철분','');
                riceArr[i] = riceArr[i].replace('/','');
                riceArr[i] = riceArr[i].replace('*','');
            }
        }
        
        if(time < 7.30) {
            
        console.log('아침\n');
        console.log(riceArr[0]);
        
        }
        
        else if(time < 12.30) {
        
        console.log('\n점심\n');
        console.log(riceArr[1]);
        
        }
        
        else if(time < 24.00){
        
        
        
        }
    });
});