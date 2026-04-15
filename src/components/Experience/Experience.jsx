import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const experiences = [
    {
    company: "Freelancer",
    role: "Senior Fullstack Software Engineer",
    period: "JUN 2023 - PRESENT",
    type: "Freelance",
    industry: "Film & Multimedia, Human Resource, Food",
    projectDescription: [
        {type: 'header' , text: "eCommerce website" }, 
        {type: 'desc', text: "digitalize how small business like restaurant take order from customer" },
        {type: 'header', text: "HR timesheet & leave management" },
        {type: 'desc', text: "digitalize how company manage their employee's timesheet and digitalize their leave management"},
        {type: 'spacer' },
        {type: 'header', text: "Inventory Management" },
        {type: 'desc', text: "digitalize how equipment and items are stored, borrowed or bought into and out of their warehouse"},
        {type: 'dec', text: "" },
        ],
    jobScope: [
        "Create e-commerce website for client to display their item and services",
        "Add new item/features based on feedback from client",
        "Debugging the logic/workflow if the process didn’t produce the correct result",
        "Requirement gathering and system analysis",
        "Database schema design and optimization",
        "API development and documentation"
    ],
    skillsApplied: [
        "Research and designing UI and UX for the website",
        "Research and testing for website security and authentication",
        "Code testing and debugging",
        "Understanding and solving problem",
        "Understanding client’s requirement and represent it into logic flow",
        "Communication through verbal and writing",
        "Analyze business logic and implementation into code",
        "Software design, architecture, code reusability, stability, etc",
    ],
    contribution: [
        "Help client to display all the item and service available to their clients",
        "Reduce client’s work to explain which date is available for booking",
        "Help client to digitalise their ordering method and generate income faster"
    ],
    techApplied: ["Java", "Spring Boot", "intelliJ", "Javascript", "React", "VSCode", "MySQL", "Github"]
    },
    {
    company: "FMS Debt Management Sdn. Bhd",
    role: "Business owner/Human Resource & Accounting Manager",
    period: "DEC 2022 - JUN 2023",
    type: "Full-time",
    industry: "Credit & Debt Management",
    projectDescription: [
        {type: 'dec' , text: "managing company's account" },
        {type: 'dec' , text: "managing employee's benefit" },
    ],
    jobScope: [
        "Provide list of debtor to collector",
        "Prepare invoice after collection are done every end of the month",
        "Process all the payment for the company",
        "Calculate and manage all the necessary cost to run the office’s operation"
    ],
    skillsApplied: [
        "Communication soft skill",
        "Making invoice using the provided credit system",
        "Teamwork and staff management"
    ],
    contribution: [
        "Help client to collect payment from debtor that has been overdue for more than 6 months",
        "Make sure the employee received their reward on time if achieved",
        "Make sure all payment is paid before due date",
        "Prepare every invoice and payslip"
    ],
    techApplied: ["Volare", "Excel", "Google"]
    },
    {
    company: "Freelancer",
    role: "Backend Developer",
    period: "MARCH 2018 - OCT 2021",
    type: "Freelance",
    industry: "Film & Multimedia, Residence, Human Resource, Food",
    projectDescription: [
        {type: 'header', text: "HR timesheet & leave management" },
        {type: 'dec' , text: "digitalize how company manage their employee's timesheet and digitalize their leave management" },
        {type: 'spacer' },
        {type: 'header', text: "eCommerce website" },
        {type: 'dec' , text: "digitalize how small business like restaurant take order from customer" },
        {type: 'spacer' },
        {type: 'header', text: "residence android application" },
        {type: 'dec' , text: "application to help residence to manage item's from their community" },
        {type: 'spacer' },
        {type: 'header', text: "Project simplifier" },
        {type: 'dec' , text: "Excel project to help manage, keep track, identifying the hidden cost and summarize the actual cost for each project" },
        {type: 'spacer' },
        ],
    jobScope: [
        "Create new features/system to the client",
        "Add new item/features based on feedback from client",
        "Debugging the logic/workflow if the process didn’t produce the correct result"
    ],
    skillsApplied: [
        "Research and applying new/custom technologies",
        "Code testing and debugging",
        "Understanding and solving problem",
        "Understanding client’s requirement and represent it into logic flow",
        "Communication through verbal and writing"
    ],
    contribution: [
        "Reduce the work that has been done manually previously by client",
        "Propose a better apps for community to help them know what the end product should look",
        "Prevent extra cost and lost for the client’s project"
    ],
    techApplied: ["Java", "Spring Boot", "Eclipse", "Oracle", "sqlite3", "Excel", "Android Studio"]
    },
    {
    company: "Conduent Business Solutions Sdn. Bhd",
    role: "Software Engineer",
    period: "JULY 2017 - MARCH 2018",
    type: "Fulltime",
    industry: "Healthcare & pension benefit",
    projectDescription: [
        {type: 'header', text: "Calc Process" },
        {type: 'dec' , text: "Part of a huge backend system where it calculate a participant’s eligibility to get pension & other benefit" },
        {type: 'dec' , text: "There are 3 types of Calc: Health & Welfare, Define Contribution & Define Benefit. The calculation is done based on the client’s logic & calculation" },
        {type: 'dec' , text: "Every client has their own specific logic & calculation to be applied but the basic for every client are almost the same. Eg. Smokers will need a higher coverage amount, thus the benefit will be different from non-smokers" },
        {type: 'dec' , text: "Most of the client’s requirement are gathered by business analyst and passed to the Calc team when there are changes requested by the client" },        
        {type: 'spacer' },
    ],
    jobScope: [
        "Adjust or add new item into the calc calculation based on client’s requirement",
        "Debugging the logic applied if it didn’t produce the correct result",
        "Code testing and debugging"
    ],
    skillsApplied: [
        "Understanding and solving problem",
        "Understanding client’s requirement and represent it into logic flow",
        "Teamwork",
        "Communication through verbal and writing"
    ],
    contribution: [
        "Debug and fix issues that came from business analyst",
        "Took over some of the clients from other engineers",
        "Reduce the workload from other engineers"
    ],
    techApplied: ["C", "VIM", "Stored Procedure", "SQL Server", "Visual Studio", "Harvest"]
    },
    {
    company: "Comptel Communication Sdn. Bhd",
    role: "Software Engineer",
    period: "APRIL 2016 - DEC 2016",
    type: "Fulltime",
    industry: "Telecommunication",
    projectDescription: [
        {type: 'header', text: "Deliverability & Orchestration Project" },
        {type: 'desc', text: "An independent team that does orchestration that will be applied by business analyst at client’s site" },
        {type: 'desc', text: "The team also implement various ansible script for various use. Eg. preparing server environment, setting client’s configuration before installing, etc" },
        {type: 'desc', text: "The team help to debug/solve and prepare proper documentation if requested by other teams" },
        {type: 'desc', text: "The team help to add new features on existing product owned by other team if requested" },
        ],
    jobScope: [
        "Develop new features on an existing product",
        "Fix bug issues written in various languages",
        "Prepare various script to help the deliverability of a product"
    ],
    skillsApplied: [
        "Code testing and debugging",
        "Understanding and solving problem",
        "Teamwork",
        "Communication through verbal and writing",
        "Preparing and viewing document",
        "Exploring tools, languages and technology"
    ],
    contribution: [
        "Solve bugs and warnings for other product",
        "Explore and implement ansible script to be used inside the client’s side",
        "Gave comment/ideas on the product documentation and how to improvise it",
        "Reduce the workload from other engineers"
    ],
    techApplied: ["Java", "Spring", "Python", "Jenkins", "Eclipse", "Oracle", "Ansible", "Tortoise"]
    },
    {
    company: "Silverlake MasterSAM Sdn. Bhd",
    role: "RnD Developer",
    period: "MARCH 2015 - APRIL 2016",
    type: "Fulltime",
    industry: "Cybersecurity & Privilege Access Management",
    projectDescription: [
        {type: 'header', text: "MasterSAM Unix" },
        {type: 'desc', text: "A software that control and monitor user access and privilege in the Unix platform" },
        {type: 'desc', text: "It is a product runed on client’s server using root privilege" },
        {type: 'desc', text: "The product has a lot of option to control a user’s activity when logging into the targeted server. Eg. It can restrict user based on group or just individual to type certain command like sudo" },
        {type: 'spacer' },
        {type: 'header', text: "MasterSAM StarGate" },
        {type: 'desc', text: "A newer version of MasterSAM IGW with various add on feature. It is still a web-based application that act as a gateway to control and audit all the activity to target server" },
        {type: 'desc', text: "It is connected to a different product called MasterSAM Analyst where it will record every user’s session and MasterSAM Unix where it control the user access permission. The product can control the  permission and access time for a user to log in to the target server" },
        {type: 'desc', text: "The product can also connect to another product called MasterSAM Gateway Connector where it can do password reset to user or target server" },
        {type: 'spacer' },
        {type: 'header', text: "MasterSAM Gateway Connector (MasterSAM Connector)" },
        {type: 'desc', text: "A java application used to connect and do password reset on a target server" },
        {type: 'desc', text: "The target server cover various machine including UNIX, AS400, CISCO Router, etc. A password policy can be applied during the password reset so it can follow according to the server’s setting" },
        ],
    jobScope: [
        "Develop new features or enhance old features on an existing product",
        "Debug and resolve bugs issued by clients or support team",
        "Write various Unix script to be implemented in production"
    ],
    skillsApplied: [
        "Software Development",
        "Code testing and debugging",
        "Understanding, reproducing and solving problem",
        "Teamwork",
        "Communication through verbal and writing",
        "Preparing and viewing document",
        "Exploring tools, languages and technology"
    ],
    contribution: [
        "Contribute more than 70% for MasterSAM IG major and 100% for minor release",
        "Contribute 100% for MasterSAM Unix",
        "Contribute 100% for MasterSAM Connector"
    ],
    techApplied: ["Java", "Springboot", "Perl", "Eclipse", "VIM", "Oracle", "Apache Derby", "Git", "Maven", "Unix", "C", "sqlite3"]
    },
    {
    company: "MasterSAM Sdn. Bhd",
    role: "Unix C Developer",
    period: "AUG 2013 - FEB 2015",
    type: "Fulltime",
    industry: "Cybersecurity & Privilege Access Management",
    projectDescription: [
        {type: 'header', text: "MasterSAM Unix" },
        {type: 'desc', text: "A software that control and monitor user access and privilege in the Unix platform" },
        {type: 'desc', text: "It is a product runed on client’s server using root privilege" },
        {type: 'desc', text: "The product has a lot of option to control a user’s activity when logging into the targeted server. Eg. It can restrict user based on group or just individual to type certain command like sudo" },
        {type: 'spacer' },
        {type: 'header', text: "MasterSAM Integrated Gateway (MasterSAM IGW)" },
        {type: 'desc', text: "A web-based application that act as a gateway to control and audit all the activity to target server" },
        {type: 'desc', text: "It is connected to a different product called MasterSAM Analyst where it will record every user’s session" },
        {type: 'desc', text: "It also act as an extension to MasterSAM Unix to control the user’s accesspermission" },
        {type: 'desc', text: "The product can control the permission and access time for a user to log in to the target server" },
        ],
    jobScope: [
        "Develop new features",
        "Solve issues related to Unix platform",
        "Write Unix script or program according to customer’s need."
    ],
    skillsApplied: [
        "Code testing and debugging",
        "Understanding, reproducing and solving problem",
        "Teamwork",
        "Communication through verbal and writing",
        "Exploring tools, languages and technology"
    ],
    contribution: [
        "Contribute more than 80% for MasterSAM Unix major and minor release",
        "Redesign some critical features inside the product",
        "Contribute ideas that lead to winning some major contract from customer"
    ],
    techApplied: ["Java", "Springboot", "Perl", "Eclipse", "Oracle", "Apache", "Git", "Maven", "Unix", "C", "sqlite3"]
    },
    // Add more entries here...
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative">
        {/* THE VERTICAL LINE (Desktop: Center, Mobile: Left) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
