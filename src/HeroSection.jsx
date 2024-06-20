import React from 'react'

const HeroSection = (props) => {

    const content = props.heroContent
  return (
    <>
      <section className='hero-section'>
        <div className="container">
{
    content.map((item)=>{
        return(
        <>
            <div className="heading">
            <h1>{item.heading}</h1>
            <p>{item.headingpara}</p>
        </div>

        <div className="heading_msg mt-5">
            <p className='text-start text-white'>{item.para}<a href=''> send us a message.</a></p>
        </div>

<div className="text-center">

        <button className='btn btn-black'><i className="fa-solid fa-mug-saucer"></i>{item.button}</button>
</div>
        </>
        )
    })
}
        </div>
      </section>
      
    </>
  )
}

export default HeroSection
