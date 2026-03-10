
export default function Card(props) {
    let title = props.title
    let des = props.des
  return (
    <div className="card">
        <h2>{title}</h2>
        <p>{des}</p>
    </div>
  )
}
