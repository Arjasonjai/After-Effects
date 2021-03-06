
// IN Animation

freq = 2;
decay = 6;
duration = 0.2;
retard = textIndex*thisComp.frameDuration*1;
t = time - (inPoint + retard);
startVal = [100,100,100];endVal = [0,0,0];
if (t < duration){
linear(t,0,duration,startVal,endVal);
}else{
amp = (endVal - startVal)/duration;
w = freq*Math.PI*2;
endVal + amp*(Math.sin((t-duration)*w)/Math.exp(decay*(t-duration))/w);}

// OUT Animation

freq = 2;
decay = 6;
duration = 0.2;
retard = textIndex*thisComp.frameDuration*1;
t = -(time - (outPoint - retard));
startVal = [100,100,100];endVal = [0,0,0];
if (t < duration){
linear(t,0,duration,startVal,endVal);
}else{
amp = (endVal - startVal)/duration;
w = freq*Math.PI*2;
endVal + amp*(Math.sin((t-duration)*w)/Math.exp(decay*(t-duration))/w);}
