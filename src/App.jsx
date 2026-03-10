import Card from "./components/Card"
import First from "./components/First"
import "./App.css"
export default function App()
{
  return(
    <>
<div className="flex"> 
  <Card title="Web Development" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod modi minima enim quasi nemo, aut"></Card>
  <Card title="WEb Design" des=", harum vel veniam repellendus laudantium sequi nihil rerum quia minus impedit nesciunt itaque consequatur!"></Card>
  <Card title = "Data Analysis" des="dummy , harum vel veniam repellendus laudantium sequi nihil rerum quia minus impedit nesciunt itaque consequatur!"></Card>
</div>
    {/* <First uname = "Ron" contact="848456454"></First>
    <h1>Welcome to React </h1>
    <First uname="Maria" contact="7897897897"></First>
    <First uname="Sam" contact="8897897897"></First> */}
</>
  )
}