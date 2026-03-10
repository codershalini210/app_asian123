export default function First(props)
{
    let username = props.uname
    let contactno = props.contact
    return(
        <>        
        <hr></hr>
        <h2> welcome {username} we will contact you on {contactno}</h2>
        <hr />
        {/* <h2>10+20 = {10+20}</h2> */}
        </>
    )
}