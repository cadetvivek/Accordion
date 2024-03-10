const data = [
    {
        id: '1',
        question: "What are accordion components?",
        answer: "Accordion components are user interface elements used for organ"
    },
    {
        id: '2',
        question: "What are they used for?",
        answer: "They are commonly employed in various contexts, including FAQs"
    },
    {
        id: '3',
        question: "Accordion as a musical instrument",
        answer: "The accordion is a musical instrument with a keyboard and bellows"
    },
    {
        id: '4',
        question: "Can I create an accordion component with a different answer?",
        answer: "Yes, of course, it is very possible to create an accordion component"
    }
];


const accordionWrapper = document.querySelector('.accordion');
function createAccordionData(){
    accordionWrapper.innerHTML=data.map(
        (dataItem)=>`
        <div class="accordion_item">
        <div class="accordion_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordion_content">
        <p>${dataItem.answer}</p>
        </div>
        </div>
        `
    ).join(" ")
}
createAccordionData()
const getAccordionTitle = document.querySelectorAll('.accordion_title')
console.log(getAccordionTitle)
getAccordionTitle.forEach(currentItem=>{
    currentItem.addEventListener('click',(event)=>{
        if(currentItem.classList.contains("active")){
            currentItem.classList.remove("active");
        }else{
            let getAlreadyAddedActiveClasses=document.querySelectorAll('.active')
            getAlreadyAddedActiveClasses.forEach((currentActiveItem)=>{
                currentActiveItem.classList.remove("active")
            })
            currentItem.classList.add("active")
        }
    })
})