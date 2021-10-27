'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'centos',
    'mysql',
    'postgresql',
    'java',
    'php',
    'ruby',
    'kotlin',
    'perl',
    'apache',
    'squid',
    'django',
    'ruby on rails',
    'bind',
    'samba',
    'postfix',
    'sendmail',
    'dovecot',
    'git',
    'docker',
    'nginx'
  ]
let word;
let loc = 0;
let startTime;
let isPlaying = false;
const target = document.getElementById('target');

document.addEventListener('click', () => {
if (isPlaying === true) {
  return;
}

  isPlaying = true;
  startTime = Date.now();
  setWord();
});

  document.addEventListener('keydown', e => {
   if (e.key !== word[loc]) {
     return;
   }


   
    loc++;

    //1: _ed
    //2: __d
    //3: ___
    target.textContent = '_'. repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }


      setWord();
    }
  });
}