const init = () => {
  console.log('Bob', 'Tom');
};

function hello(...args) {
  return args.reduce((accu, curr) => `Helo Helo! ${accu} ${curr}`);
}

document.addEventListener('DOMContentLoaded', (event) => {
  init();
});