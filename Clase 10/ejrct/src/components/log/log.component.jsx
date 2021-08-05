import React from 'react';

export default function Log(props) {
  const reporte = [...props.children].map(item => {
    if(typeof item.type.name !== 'undefined')
      return item.type.name;
    else
      return item.type;
  })

  console.log(reporte);
  return (
    <div>
      {props.children}
    </div>
  )
}