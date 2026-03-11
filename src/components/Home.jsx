import React from 'react'
import Card from './Card'
export default function Home() {
  return (
    <>
    <div>Home</div>
    <h1>What we do </h1>
    <div className="flex"> 
      <Card title="Web Development" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod modi minima enim quasi nemo, aut"></Card>
      <Card title="WEb Design" des=", harum vel veniam repellendus laudantium sequi nihil rerum quia minus impedit nesciunt itaque consequatur!"></Card>
      <Card title = "Data Analysis" des="dummy , harum vel veniam repellendus laudantium sequi nihil rerum quia minus impedit nesciunt itaque consequatur!"></Card>
    </div>
    </>
  )
}
