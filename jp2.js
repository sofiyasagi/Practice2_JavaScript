window.onload = function() {
  const check = word => {
    if (word.length > 8) {
      return '<span style="background:lightgreen"">' + word + '</span>'
    } else {
      return word
    }
  }
    const para = document.querySelector("#high")
    para.innerHTML = para.innerText
    .trim()
    .split(' ')
    .map(check)
    .join(' ')

//splitting
    para.innerHTML = para.innerHTML
    .split('.')
    .join('.</p><p>' + '</p>');
}
//link
  const link = document.createElement('a');
  link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
  link.innerText = 'Here is the source..';
  document.body.appendChild(link);

//number of words
  const para =  document.querySelector("#high");
  const Count = para.innerText.split(' ').length;
  const CountElements = document.createElement('div');
  CountElements.innerText = Count + " words";
  document.body.insertBefore(CountElements, para);

//emoji
  para.innerHTML = para.innerText.replace(/[?]/g, '&#129300');
  para.innerHTML = para.innerText.replace(/[!]/g, '&#128562');
