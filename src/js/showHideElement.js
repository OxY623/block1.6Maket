export function createHideBurger(var1, var2, block) {
  let flag = false;

  var1.addEventListener('click', () => {
    block.classList.toggle('visually-hidden');
    flag = !flag;
  });

  var2.addEventListener('click', () => {
    if (flag) {
      block.classList.toggle('visually-hidden');
      flag = !flag;
    }
  });
}
