
function Link({text, link}: {text: string, link:string})  {
    return (<>
    <a href={link} className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank">{text}</a>
    </>)
}

export var resources = [
    {
        name: "Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) PPI Devon 2025", 
        link: "/resources/AD_ART_PPI_DEVON.pdf",
    }, 
    {
        name: "PPI Devon Playbook 2025", 
        link: "/resources/PPI_Devon_Playbook.pdf",
    }
]


export var faqs = [
    {
        question: "How do I get to Exeter from anywhere around UK?", 
        answer: 
        <>
        "Once you arrive in the UK there are several public transportations you can choose from such as trains or buses. You can easily book your travels from Trainline or National Express. More information can be found <Link text="here" link="https://www.exeter.ac.uk/students/international/newstudents/planningyourtraveltouniversity/"/>
        </>  
    },
    {
        question: "How do I get to the University from my acommodation?", 
        answer: 
        <>
        You can either walk (most acommodation will take 5-30 minutes to go to uni) or you can take the bus with a service UNI. More information can be found here <Link text="here" link="https://www.stagecoachbus.com/promos-and-offers/south-west/getting-to-exeter-university-by-bus"/>
        </>,
    },
    {
        question: "What options do I have for acommodation?", 
        answer: <>
        There are many! Year 1 students mostly stay on university acommodation located around campus. More information can be found here <Link text="here" link="https://www.exeter.ac.uk/study/accommodation/"/>
        </>
    },
    {
        question: "Nightlife and going out", 
        answer: <>
        Despite being a small city with low population, Exeter has a lively nightlife. You can see more information <Link text="here" link="https://www.exeter.ac.uk/about/thesouthwest/exeter/nightlifeandgoingout/"/>  
        </>
    },
    {
        question: "How do I ask general inquiries to the the University?",
        answer: <>
        University of Exeter has this thing called Student Information Desk (SID) where you can ask anything related to accommodations, fees, international student support, and more! Check it out <Link text="here" link="https://www.exeter.ac.uk/students/sid/"/>  
        </>
    }, 
]
