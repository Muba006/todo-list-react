function Todo() {
  return (
    function add() {
      const inputbox = document.getElementById("input-box");
      const list = document.getElementById("list1");
      function addtask() {
        if (inputbox === "") {
          alert("Add your Tasks");
        }
        else {
          const newinput = document.createElement("li");
          newinput.innerHTML = inputbox.value();
          list.appendChild("newinput");
          let spam = document.createElement("span");
          spam.innerHTML = "\ud007";
          newinput.appendChild("spam");
        }
      }


      inputbox.value = "";
      saveData();
      list.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
          e.target.classList.toggle();
          saveData();
        }
        else if (e.target.tagName === "SPAN") {
          e.target.parentElement.remove();
          saveData();
        }
      }, false);
      function saveData() {
        localStorage.setItem("data", list.innerHTML);
      }
      function showTask() {
        list.innerHTML = localStorage.getItem("data");
      }
      showTask();
    }
  );
}
