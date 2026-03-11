export default function ServiceItem(props)
{
    let heading = props.heading 
    let des = props.des
return(
    <div className ="serviceitem">

<h2>{heading}</h2>
<p>{des}</p>       
 </div>
)
}