n = 0; 
if (numKeys > 0){
n = nearestKey(time).index;
if (key(n).time > time){
n--;
}
}
if (n == 0){
t = 0;
}else{
t = time - key(n).time;
}
if (n > 0){
v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
amp = 0.25;
freq = 2;
decay = 4;
M=Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t); 
value + v*amp*M;
}else{
value;
}
