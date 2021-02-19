/* eslint-disable  no-param-reassign */
function moveTo(start, end, dom, prop) {
  let dis = 0;
  const speed = end > 0 ? 5 : -5;
  const timer = setInterval(() => {
    dis += speed;
    dom[prop] = start + dis;
    if (Math.abs(dis) > Math.abs(end)) {
      dom[prop] = start + end;
      clearInterval(timer);
    }
  }, 1);
}

export default {
  moveTo,
};
