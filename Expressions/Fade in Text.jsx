var v = effect("Evolution")("Slider");
var delay = effect("Delay")("Slider");
var reverse = effect("Reverse")("Checkbox");
if(reverse == true) {
    offset = (textTotal-textIndex)*thisComp.frameDuration*delay;
} else {
    offset = (textIndex-1)*thisComp.frameDuration*delay;
}
t = time-offset;
v.valueAtTime(t)
