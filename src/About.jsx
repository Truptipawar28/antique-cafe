import React from 'react'

const About = (props) => {
  const content = props.aboutContent;
  return (
    <section className="about">
      <div className="container">
        <div className="row mb-5 mt-5 justify-content-end">
          {/* <div className="col-md-6"></div> */}
          <div className="col-md-6 mt-5">
            {
              content.map((item) => {
                return (
                  <>
                    <div className="mb-4 mt-5 about-content">
                      <h2>{item.aboutheading}</h2>
                      <p>{item.aboutcontent}</p>
                      <p>{item.aboutcontent1}</p>
                    </div>
                    <div className="about_btn">
                    <a className='btn-chat' href='#.'><i class="fa-regular fa-comments"></i>{item.contactbutton}</a>
                    </div>

                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
