//I think onClick gets overwritten by :active pseudo class, so I added an event listeners
//using javascript

function dropdownListener() {
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < 180; i++) {
    boxes[i].addEventListener("click", () => {
      console.log("23")
      const dropdown = document.getElementById("dropdown");
        const position = boxPosition(i);
        dropdown.style.display = "flex";
        dropdown.style.top = `${position.top}%`
        dropdown.style.left = `${position.left}%`  
        dropdown.id = `0${i}`
    });
  }
}

function boxPosition(i) {
  let top = (Math.trunc(i / 18) + 1)*10
  let left = (i % 18 + 1) *(100/18)
  return {top, left}
}

export default dropdownListener;
