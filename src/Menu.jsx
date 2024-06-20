import React from 'react'

const Menu = (props) => {

    const content = props.menuContent;
    const icedContent = props.icedmenuContent

    return (
        <>
            <section className='menu'>
                <div className="container">
                    <h2>Our Cafe Menu</h2>

                    <div className="row justify-content-between">
                        <div className=" col-md-5">
                            {
                                content.map((item) => {
                                    return (

                                        <div className="menu_coffee mb-5 ">
                                            <img src={item.img} alt="" className='rounded-3'/>
                                        <div>
                                            <h3>{item.menuHeading}</h3>
                                            <p>{item.small}</p>
                                            <p>{item.large}</p>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                    </div>

                        <div className=" col-md-5">

                            {
                                icedContent.map((item) => {
                                    return (

                                            <div className="menu_coffee mb-5 ">
                                            <img src={item.img} alt="" className='rounded-3'/>

                                        <div>
                                            <h3>{item.menuHeading}</h3>
                                            <p>{item.small}</p>
                                            <p>{item.large}</p>
                                            </div>
                                        </div>


                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Menu
