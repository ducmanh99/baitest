import React, { useState } from 'react'
const Ex3 = () => {
  const [dataLink,setDataLink] = useState({})
  const [shrtco,setShrtco] = useState(false)
  const [qr,setQr] = useState(false)
  const [shiny,setShiny] = useState(false)
  const [valueInput,setValueInput] = useState("")
  
  const SubmitForm = (e) =>{
    e.preventDefault();
    shrtcodeAPI(valueInput)
  } 

  const shrtcodeAPI = async(URL) =>{
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${URL}`)
      const data = await res.json()
      setDataLink(data.result)
      alert("ok")
    } catch (error) {
      alert("lỗi")
    }

  }
  console.log(dataLink)
  console.log(shrtco)
  return (
    <div className='main'>
        <h1>The <span> privacy-friendly</span> URL Shortener</h1>
        <div className='content'>
          <h3>Link Shortener</h3>
          <form onSubmit={SubmitForm}>
            <label for='inputUrl'>Enter a Link :</label>
            <input type="text" value={valueInput} onChange={(e)=>setValueInput(e.target.value)}/>
            <button>Enter</button>
          </form>
          <span>Short domain :</span> 
          <button className={`btn ${shrtco ? `done` : false}`} onClick={()=>setShrtco(shrtco ? false : true)}>shrtco.de</button>
          <button className={`btn ${qr ? `done` : false}`} onClick={()=>setQr(qr ? false : true)}>9pr.de</button>
          <button className={`btn ${shiny ? `done` : false}`} onClick={()=>setShiny(shiny ? false : true)}>shiny.link</button>
        </div>
        <h3>Link Compact</h3>
        {
          shrtco && <p>{dataLink.full_share_link}</p>
        }
        {
          qr &&  <p>{dataLink.full_short_link2}</p>
        }
        {
          shiny && <p>{dataLink.short_link3}</p>
        }
    </div>
  )
}

export default Ex3