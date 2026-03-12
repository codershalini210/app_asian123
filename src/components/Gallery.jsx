import React from 'react'
import Project from './Project'
import cab from "../assets/cab.jfif"
import chat from "../assets/chat.jfif"
import ecommerce from "../assets/ecommerce.jfif"
import library from "../assets/library.jfif"
import lms from "../assets/lms.jfif"
import socialmedia from "../assets/socialmedia.jfif"
export default function Gallery() {
  const projects = [
  {
    title: "E-Commerce Platform",
    des: "An online shopping platform where users can browse products, add items to cart, and make secure payments.",
    imgsrc: ecommerce
  },
  {
    title: "Learning Management System",
    des: "A platform for students and instructors to manage courses, upload lessons, track progress, and conduct quizzes.",
    imgsrc: lms
  },
  {
    title: "Chat Application",
    des: "A real-time messaging application that allows users to send messages, images, and create group chats.",
    imgsrc: chat
  },
  {
    title: "Cab Booking System",
    des: "An online cab booking application where users can book rides, track drivers, and make digital payments.",
    imgsrc: cab
  },
  {
    title: "Library Management System",
    des: "A digital system to manage books, issue and return records, and maintain library member details.",
    imgsrc: library
  },
  {
    title: "Social Media Platform",
    des: "A social networking platform where users can create profiles, share posts, like, comment, and connect with others.",
    imgsrc: socialmedia
  }
];
let projectsui = projects.map((p)=>{
  return <Project title={p.title} imgsrc={p.imgsrc} des={p.des}></Project>
})
  return (
    <>
    <div>Gallery</div>
   <div className='projectcontainer'> 
{projectsui}
   </div>
    
  </>
  )
}
