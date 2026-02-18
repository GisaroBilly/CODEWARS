var number = function(busStops){
  let people = 0
  for(let [on,off] of busStops){
    people += on - off;
  }
  return people
}