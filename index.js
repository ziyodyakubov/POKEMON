let cardWrapper = document.querySelector(".card_wrapper");

// DATA INTERCHANGE STARTED

function renderData(data) {
    data.cards.forEach((el) => {
        const { img, name, extra, kg, age } = el;

        const card = document.createElement('div')


        card.innerHTML = `
                                <div class="card w-[307px] bg-[#fff] border-[2px] border-[#000] rounded-[20px] cursor-pointer">
                            <img src="${img}" alt="pinguing"
                                class="px-[75px] pt-[30px] pb-[68px]">

                            <div class="title pl-[30px] pr-[30px] pt-[20px] pb-[37px] border-t-[2px] border-t-[#000]">
                                <div class="flex justify-between">
                                    <div class="flex flex-col">
                                        <h3 class="text-[24px] font-[700]">${name}</h3>
                                        <p class="text-[17px] font-[500]">${extra}</p>
                                    </div>

                                    <i class='bx bx-heart text-[30px] pt-[5px] cursor-pointer'></i>
                                </div>

                                <div class="flex items-center gap-[30px] pt-[25px]">
                                    <h3 class="text-[24px] font-[700]">${kg} kg</h3>
                                    <h3 class="text-[24px] font-[700]">${age} age</h3>
                                </div>
                            </div>
                        </div>

        
        `
        cardWrapper.appendChild(card);
    })
}

renderData(card)

// DATA INTERCHANGE ENDED

// STARTED SELECT VARIABLE FOR SEARCHING

let searchInput = document.querySelector(".searchbtn");
let searchWrapper = document.querySelector(".inputResult");
let exitBtn = document.querySelector(".exit");
let searchli = document.querySelector(".search-li");
let searcha = document.querySelector(".search-a");
let moshniy = document.querySelector(".moshniywrapper");


exitBtn.addEventListener("click", () => {
    searchWrapper.style.display = "none";
    searchInput.value = "";
})

searchInput.addEventListener('input', function (e) {
    searchWrapper.classList.toggle("hidden");

    if (searchWrapper.classList[5] !== "hidden") {
        searchWrapper.style.display = 'flex';
    }

})

// ENDED SELECT VARIABLE FOR SEARCHING


// SEARCH PROCESSING STARTED

let search = document.querySelector(".searchbtn");

search.addEventListener("input", function (e) {
    let searchStr = e.target.value;
    let searched = card.cards.filter(el => {
        return el.name.toLowerCase().includes(searchStr.toLowerCase())
    })

    RenderData2(searched)

})

function RenderData2(data) {
    moshniy.innerHTML = ''
    data.forEach(el => {
        let searchTitle = document.createElement('li')
        searchTitle.textContent = el.name;
        moshniy.appendChild(searchTitle)
    })

}


// SEARCH PROCESSING ENDED