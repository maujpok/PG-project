import React from 'react'

const headerBackgrounds = [
    'https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg?auto=compress&cs=tinysrgb&dpr=2&&w=1920',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
    'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
    'https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
    'https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
    'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
    'https://images.pexels.com/photos/4444989/pexels-photo-4444989.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
    'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&dpr=2&&w=1920',
];

function ComponentHeader(data) {

    if(data.data.bg === null) {
        data.data.bg = headerBackgrounds[Math.ceil(Math.random() * 6)-1];
    }

    const divStyle = { backgroundImage: 'url(' + data.data.bg + ')'};

    return (
        <div className="wrapper container-component-header" style={divStyle}>
            <div className="wrapper padd-xl-tb padd-lg-lr bg-color-light-a80">
                <section>
                    <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs">
                        <div className='font-main'>
                            <span className="padd-md-b padd-lg-r text-bold font-2x border-bottom-color-main">
                                {data.data.title}
                            </span>
                            <div className="padd-md-t mrg-sm-t font-lg">
                                {data.data.subtitle}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default ComponentHeader