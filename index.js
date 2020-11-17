const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  const win = array.find( function(record){
    return record["result"] == "W"
  });

  return win && win["year"]
}

