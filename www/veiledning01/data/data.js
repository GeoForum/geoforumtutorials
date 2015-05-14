var data = require('./trafikulykker01.nvdb.json');

/*for(var p1 in data){
  //console.log(p1, data[p1]);
  // console.log(data.resultater[0].vegObjekter)
}*/

var vegObr = data.resultater[0].vegObjekter;

for (var i = 0; i < vegObr.length; i++) {
  var vo = vegObr[i];
  console.log(vo.objektId,vo.objektTypeId,vo.lokasjon);
};

