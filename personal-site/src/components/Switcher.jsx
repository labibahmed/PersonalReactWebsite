import { useState } from 'react'
import TemplateBox from './Pages/TemplateBox'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

var Jobs = [{
    "Company": "Loblaw Companies Limited",
    "Role": "Network Analyst Intern",
    "Duration": "April 2020 / August 2021",

    "Description": "As a network analyst I worked in differents teams within 'Loblaw Technologies Network and Critical Facilities'." +
        " Most of the time spent was within the automation team where we dealt automating anything within networks, I also worked with other teams suck as the forensics team where I learned about" +
        " routers, switches, and other basic network concepts. Eventually after learning about networks I helped solve different network issues that were ticketed." +
        "\n\n" +
        " Some of my tasks include automating heath checks for servers using ansible, automating emails/building schedules for other teamns using MS Power Automate, automating different configurations for virtual stores using python/selenium" +
        ", creating Power BI reports using data gathered from MySQL database, learning Twillio to help with automated IVR systems, and more."
}, {
    "Company": "Loblaws Supermarket",
    "Role": "Cashier/ PC Express Clerk",
    "Duration": "March 2019 / March 2020",

    "Description": "As a network analyst I worked in differents teams within 'Loblaw Technologies Network and Critical Facilities'." +
        " Most of tath checks for servers using ansible, automating emails/building schedules for other teamns using MS Power Automate, automating different configurations for virtual stores using python/selenium" +
        ", creating Power BI reports using data gathered from MySQL database, learning Twillio to help with automated IVR systems, and more."
}, {
    "Company": "Cineplex Entertainments",
    "Role": "Concession Clerk",
    "Duration": "June 2017 / August 2017",

    "Description": "As a network analyst I worked in differents teams within 'Loblaw Technologies Network and Critical Facilities'." +
        " Most of tath checks for g schedules for other teamns using MS Power Automate, automating different configurations for virtual stores using python/selenium" +
        ", creating Power BI reports using data gathered from MySQL database, learning Twillio to help with automated IVR systems, and more."
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

        <div style={{ display: "inline-block" }}>
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