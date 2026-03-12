import React from 'react'

export default function Project(props) {
    let title = props.title
    let imgsrc = props.imgsrc
    let des = props.des
  return (
    <div className='project'>
       <div className='projecttitle'> {title}</div>
        <img src={imgsrc} alt="" />
        <div className='projectdes'>{des}</div>
    </div>
  )
}
