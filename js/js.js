let switchNum = ["one", "two", "three", "four"];

for (let i = 0; i < switchNum.length; i++){
    let swichList = document.querySelectorAll(`.switch-${switchNum[i]} li`);
    let imgs = document.querySelectorAll(`.gall-${switchNum[i]} img`);
    console.log(swichList);
    console.log(imgs);
    console.log("#".repeat(10));
}
swichList.forEach((li) => {
    li.addEventListener("click", function () {
        swichList.forEach((li) => {
            li.classList.remove("active");
            this.classList.add("active");
            if (this.classList.contains("active")) {
                this.classList.add("bg-white");
                li.classList.remove("bg-white");
            }
        });
    });
    li.addEventListener("click", function () {
        imgs.forEach((img) => { img.style.display = "none" });
        document.querySelectorAll(this.dataset.sel).forEach((e) => { e.style.display = "block" });
    });
});