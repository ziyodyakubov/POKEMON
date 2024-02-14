let cardWrapper = document.querySelector(".card_wrapper");

function renderData(data){
    data.cards.forEach((el)=>{
        const {img,name,extra,kg,age} = el;

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