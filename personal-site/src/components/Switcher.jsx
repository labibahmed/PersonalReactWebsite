import { useState } from 'react'
import TemplateBox from './Pages/TemplateBox'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

var Jobs = [{
    "Company": "Loblaw Companies Limited",
    "Role": "Network Analyst Intern",
    "Duration": "April 2020 / August 2021",

    "Description": "My role was within the 'Loblaw Technologies Network and Critical Facilities' where I mostly worked with the automation team." +
        " Tasks within the automation team include creating server heath checks using ansible, automated emails/schedules using MS Power Automate, browser automation using python/selenium," +
        " creating Power BI reports from MySQL data, learning Twillio, and more." +
        "\n\n" +
        " I also worked with other teams such as the forensics team where I learned about routers and other basic network concepts." +
        " I had to problem solve different issues reported to the forensics team" +
        "\n\n" +
        "Most important part about working at Loblaw was to always ask questions and to commuunicate with peers."
}, {
    "Company": "Loblaws Supermarket",
    "Role": "Cashier/ PC Express Clerk",
    "Duration": "March 2019 / March 2020",

    "Description": "Working as a PC Express clerk, my task was to complete grocery orders on time that were sent by customers." +
        " Coordinating in small teams allowed my colleagues and I to provide excellent service, finish the orders, and other tasks on time." +
        "\n\n" +
        " Taking initiative was crucial in this environment since a lot of the time we were not under supervision of a manager, therefore whenever provided a problem my team and I would resolve it in the best way possible."
}, {
    "Company": "Cineplex Entertainments",
    "Role": "Concession Clerk",
    "Duration": "June 2017 / August 2017",

    "Description": "In a small span of time I was trained to provide service as a Concession Clerk. My responsibilities included interacting with customer providing food," +
        " able to open and close the concession stand, and being able to work with cash." +
        "\n\n" +
        " Although the time spent at Cineplex was short, I was able to gather experience working with time constraints in a stressful and time cons environment with my colleagues."
}]



function Switcher() {

    var [i, setI] = useState(0)

    return <div >
        <button type="button" className="switcherBtn" onClick={() => {
            if (i == 0) {
                var o = Jobs.length - 1;
                setI(o);
            } else {
                var o = i - 1;
                setI(o);
            }
        }}>
            <AiOutlineDoubleLeft size="30px" /></button>

        <div id="exp" style={{ display: "inline-block" }}>
            <p className="experienceCompany">{Jobs.[i].Company}</p>
            <TemplateBox h2={(Jobs.[i].Role + ' - ' + Jobs.[i].Duration)} description={Jobs.[i].Description} />
        </div>

        <button type="button" className="switcherBtn" onClick={() => {
            if (i == (Jobs.length - 1)) {
                setI(0);
            } else {
                var o = i + 1;
                setI(o);
            }
        }} >
            <AiOutlineDoubleRight size="30px" /></button>
    </div >
}

export default Switcher;