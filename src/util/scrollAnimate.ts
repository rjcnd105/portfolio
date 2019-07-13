export default (element: HTMLElement, to: number, duration: number = 400) => {
  const start = element.scrollTop,
    change = to - start,
    increment = 20;

  let currentTime = 0;

  const animateScroll = function(){
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
const easeInOutQuad = function (t: number, b: number, c: number, d: number) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};