setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
  }, 1000);




  setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p3 = document.createElement(`p`);
    p3.innerText = `One`;
    div2.append(p2);


    setTimeout(() => {
        const div2 = document.querySelector(`#timeout-nesting`);
        const p2 = document.createElement(`p`);
        p2.innerText = `two`;
        div2.append(p2);
      }, 1000);
    }, 2000);


    let up = 1;
    const clock = setInterval(() => {
        console.log(up);
        up++;
    }, 1000);
    
    const stop = document.querySelector(`button`);
    stop.addEventListener(`click`, () => {
        clearInterval(clock);
      });