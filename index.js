const express = require('express')
const app = express()

const jobs = {
   jobListings: [
    {
      name: "Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      positionWanted: ["Frontend Developer", "Backend Developer"],
      payPerHour: 60,
      description: "Develop and maintain web applications with modern frameworks.",
      type: "Full-time",
      schedule: "Monday - Friday, 9 AM - 5 PM",
      benefits: ["Health Insurance", "401(k)", "Remote Work"]
    },
    {
      name: "Graphic Designer",
      company: "Creative Minds LLC",
      location: "New York, NY",
      positionWanted: ["UI Designer", "Illustrator"],
      payPerHour: 40,
      description: "Create visually appealing designs for digital and print media.",
      type: "Part-time",
      schedule: "Flexible Hours",
      benefits: ["Work from Home", "Paid Leave"]
    },
    {
      name: "Data Analyst",
      company: "Data Solutions Co.",
      location: "Austin, TX",
      positionWanted: ["Data Scientist", "BI Analyst"],
      payPerHour: 50,
      description: "Analyze and interpret complex data to assist business decisions.",
      type: "Full-time",
      schedule: "Monday - Friday, 8 AM - 4 PM",
      benefits: ["Health Insurance", "Performance Bonuses"]
    },
    {
      name: "Marketing Specialist",
      company: "Brand Growth Ltd.",
      location: "Los Angeles, CA",
      positionWanted: ["SEO Specialist", "Social Media Manager"],
      payPerHour: 45,
      description: "Develop marketing campaigns and optimize online presence.",
      type: "Part-time",
      schedule: "Tuesday - Saturday, 10 AM - 3 PM",
      benefits: ["Remote Work", "Paid Time Off"]
    },
    {
      name: "Project Manager",
      company: "Enterprise Solutions Inc.",
      location: "Chicago, IL",
      positionWanted: ["Agile Coach", "Scrum Master"],
      payPerHour: 55,
      description: "Manage and oversee project timelines and deliverables.",
      type: "Full-time",
      schedule: "Monday - Friday, 9 AM - 6 PM",
      benefits: ["Health Insurance", "Stock Options"]
    },
    {
      name: "HR Coordinator",
      company: "People First HR",
      location: "Miami, FL",
      positionWanted: ["Recruiter", "HR Specialist"],
      payPerHour: 35,
      description: "Assist in hiring processes and employee relations.",
      type: "Part-time",
      schedule: "Monday - Thursday, 10 AM - 2 PM",
      benefits: ["401(k)", "Flexible Schedule"]
    },
    {
      name: "Cybersecurity Analyst",
      company: "SecureNet Solutions",
      location: "Seattle, WA",
      positionWanted: ["Security Engineer", "Ethical Hacker"],
      payPerHour: 70,
      description: "Monitor and secure network systems against threats.",
      type: "Full-time",
      schedule: "Monday - Friday, 8 AM - 5 PM",
      benefits: ["Health Insurance", "Remote Work", "Paid Training"]
    },
    {
      name: "Content Writer",
      company: "WriteWell Media",
      location: "Denver, CO",
      positionWanted: ["Copywriter", "Technical Writer"],
      payPerHour: 30,
      description: "Write engaging content for blogs, websites, and marketing.",
      type: "Part-time",
      schedule: "Flexible Hours",
      benefits: ["Remote Work", "Paid Per Article"]
    },
    {
      name: "UX Designer",
      company: "Innovate UX",
      location: "San Diego, CA",
      positionWanted: ["Product Designer", "User Researcher"],
      payPerHour: 50,
      description: "Design intuitive and user-friendly digital experiences.",
      type: "Full-time",
      schedule: "Monday - Friday, 9 AM - 5 PM",
      benefits: ["Health Insurance", "Equity Options"]
    },
    {
      name: "Customer Support Representative",
      company: "HelpDesk Pro",
      location: "Houston, TX",
      positionWanted: ["Call Center Agent", "Technical Support"],
      payPerHour: 25,
      description: "Assist customers with inquiries and troubleshoot issues.",
      type: "Part-time",
      schedule: "Monday - Friday, 12 PM - 6 PM",
      benefits: ["Paid Training", "Flexible Hours"]
    },
    {
      name: "Operations Manager",
      company: "BizFlow Operations",
      location: "Boston, MA",
      positionWanted: ["Logistics Coordinator", "Business Analyst"],
      payPerHour: 60,
      description: "Oversee daily operations and streamline business processes.",
      type: "Full-time",
      schedule: "Monday - Friday, 8 AM - 5 PM",
      benefits: ["Health Insurance", "Performance Bonuses"]
    },
    {
      name: "Electrical Engineer",
      company: "PowerTech Solutions",
      location: "Phoenix, AZ",
      positionWanted: ["Circuit Designer", "Power Systems Engineer"],
      payPerHour: 65,
      description: "Design and develop electrical systems and components.",
      type: "Full-time",
      schedule: "Monday - Friday, 9 AM - 6 PM",
      benefits: ["Health Insurance", "401(k)"]
    }
  ],
}

app.set("view engine","ejs")


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))


app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.get("/jobs", (req,res) => {
  res.render("jobs.ejs", jobs)
})

app.get("/jobs/:id", (req,res) => {
  const jobNum = req.params.id;
  res.render("jobs.ejs", jobs.jobListings[jobNum]);
})



app.listen(3000, () => {
    console.log("Server running")
})
