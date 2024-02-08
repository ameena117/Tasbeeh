let athkar =
    [
        { thekr: "سبحان الله", count: 0 },
        { thekr: "الحمدلله", count: 0 },
        { thekr: "الله أكبر", count: 0 },
        { thekr: "لا إله إلا الله", count: 0 },
    ];

let container = document.querySelector(".container .row");
container.innerHTML = athkar
    .map(
        ({
            thekr,
            count,
        }) => `
        <div class="col-12 col-sm-6 col-lg-3 text-center p-3 text-light">
        <h3 class="thekrName bg-primary p-3 rounded-top cursor-pointer"> <button class="w-100 rounded">${thekr} </buton> </h3>
       <h3 class="thekrCount bg-secondary p-3 rounded-bottom">${count}</h3>
       </div>
      `
    )
    .join("");
let thekrCount = document.querySelectorAll(".thekrCount");
let thekrName = document.querySelectorAll(".thekrName");

for (let i = 0; i < thekrName.length; i++) {
    thekrName[i].addEventListener("click", function (e) {
        athkar[i].count += 1;
        refresh();
        function refresh() {
            thekrCount[i].innerHTML = athkar[i].count;
        }
    });
}
