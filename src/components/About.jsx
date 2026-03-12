import React from 'react'
import ServiceItem from './ServiceItem'

export default function About() {
    let services =[
  {
    sname: "Web Development",
    description: "We build responsive and modern websites using the latest technologies."
  },
  {
    sname: "Mobile App Development",
    description: "We develop Android and iOS mobile applications with smooth user experience."
  },
  {
    sname: "UI/UX Design",
    description: "We design attractive and user-friendly interfaces for web and mobile applications."
  },
  {
    sname: "Cloud Services",
    description: "We help businesses move their applications and data to secure cloud platforms."
  },
  {
    sname: "Data Analytics",
    description: "We analyze business data and provide insights using modern data tools."
  },
  {
    sname: "Cyber Security",
    description: "We protect systems, networks, and data from cyber threats and attacks."
  },
    {
    sname: "Software Development",
    description: "Custom software solutions designed to meet specific business requirements."
  },
  {
    sname: "API Development",
    description: "Design and development of secure and scalable APIs for system integration."
  },
  {
    sname: "DevOps Services",
    description: "Automation of development and deployment processes for faster delivery."
  }
    ]
    let servicesui = services.map((s)=>{
     return <ServiceItem heading={s.sname} des={s.description}></ServiceItem>
    })
  return (
    <div><h1>Who we are</h1>
<hr></hr>
<p className='margin-20'>
  We are a technology-driven IT company dedicated to providing innovative and reliable digital solutions to businesses of all sizes. Our team of skilled developers, designers, and technology experts works together to create high-quality software, web applications, and digital platforms that help organizations grow and succeed in the modern digital world.

With a strong focus on quality, performance, and user experience, we aim to deliver solutions that are not only technically strong but also practical for real business needs. Fro

</p>
<h1>What we Offer</h1>
    <hr></hr>
    <div className='serviceContainer'>

    {servicesui}
    </div>
    {/* <ServiceItem heading="Lease Enquiry" des="
    Thank you for your interest in Cafe Coffee Day. We are glad to expand our existing (Company owned or company operated) cafes. However, We do NOT franchise.We would be glad to partner with you, if you own a commercial or commercially converted/convertible retail space on a rental/revenue share basis with the following specifications:1) Retail Space Area: 1000 - 1500Sqft (Ground Floor)2) Minimum Frontage: 25 running feet3) Ample Parking space
    "></ServiceItem>
    <ServiceItem heading="Advertise With Us" des="
    How would you like your brand to join conversations of over 300000 young people who spend over 45 minutes at our 450+ cafes every day? At Cafe Coffee Day we're all about making the circle bigger, so get in touch with us to see how you can get in touch with those who matter to you!CCD has successfully executed a number of campaigns for various brands across a wide spectrum like FMCG, white goods, telecom, education and many more categories to meet their brand objectives and thus has proved to be a strong alternative to conventional media properties.The opportunity to get your brand message across to our customers in a very subtle yet effective method is limitless. From large wall sp
    "></ServiceItem>
    <ServiceItem heading="Coffe Vending MAchine" des="
    lorem isum summy  lorem isum summy  lorem isum summy  lorem isum summy  lorem isum summy  "></ServiceItem> */}
    </div>
  )
}
