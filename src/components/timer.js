function counter () {
  let count=300;
  const counter=setInterval(timer, 1000); //1000 will  run it every 1 second
  function timer()
  {
    count=count-1;
    if (count <= 0)
    {
      clearInterval(counter);
      const dropdown = document.getElementsByClassName("foo")[0];
      dropdown.remove()
      return;
    }
  document.getElementById("timer").innerHTML=count + " secs"; 
    //Do code for showing the number of seconds here
  }
}


export default counter