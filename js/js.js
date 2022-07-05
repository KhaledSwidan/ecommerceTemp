let switchNum = ["one", "two", "three", "four", "five"];

for (let i = 0; i < switchNum.length; i++){
    let swichList = document.querySelectorAll(`.switch-${switchNum[i]} li`);
    let gallBoxs = document.querySelectorAll(`.gall-${switchNum[i]} .gallBoxy`);

    swichList.forEach((li) =>
    {
        li.addEventListener("click", function ()
        {
            swichList.forEach((li) =>
            {
                li.classList.remove("active");
                this.classList.add("active");
                if (this.classList.contains("active")) {
                    this.classList.add("bg-white");
                    li.classList.remove("bg-white");
                }
            });
        });
        li.addEventListener("click", function ()
        {
            gallBoxs.forEach((gallBox) => { gallBox.style.display = "none" });
            document.querySelectorAll(this.dataset.sel).forEach((e) => { e.style.display = "block" });
        });
    });
}

// select all bullets;
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
function scrollToSomeWhere(element)
{
    element.forEach((ele) =>
    {
        ele.addEventListener("click", (e) =>
        {
            document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: 'smooth' });
        })
    });
}
scrollToSomeWhere(allBullets);