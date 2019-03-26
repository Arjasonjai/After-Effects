// IMPORTANT: It only works when there are two keyframes!!!

T = thisLayer;
if ((T.marker.numKeys > 1 ) && (numKeys > 3)){
  sIn = key(2).time - key(1).time;
  sOut = key(4).time - key(3).time;
  eIn = T.marker.key(1).time;
  eOut = T.marker.key(2).time;
  if (time < T.marker.key(2).time)
    linear(time,eIn-sIn,eIn,key(1).value,key(2).value)
  else
    linear(time,eOut,eOut+sOut,key(3).value,key(4).value);
}else 
  value;
