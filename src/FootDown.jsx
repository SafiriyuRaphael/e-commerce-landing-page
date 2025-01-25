import React from 'react'

const FootDown = () => {
  return (
    <footer className='bg-black'>
        <div className='flex py-12 justify-between text-white px-7 flex-col md:flex-row gap-7 '>
            <div>
                <h1>Fashion</h1>
                <p>Complete your style with awesome clothes from us</p>
                <div className='flex gap-3 mt-1'> <img src="/logofoot1.png" className='bg-yellow-400 p-2' alt="socialLogo" />
                <img src="/logofoot2.png" className='bg-yellow-400 p-2' alt="socialLogo" />
                 <img src="/logofoot3.png" className='bg-yellow-400 p-2' alt="socialLogo" />
                <img src="/logofoot4.png" className='bg-yellow-400 p-2' alt="socialLogo" /></div>
            </div>
            <div className=' grid grid-cols-2 gap-1 md:gap-14 md:flex md:flex-row'>
            <div>
                <h3>Company</h3>
                <ul>
                    <li className='m-0'>About</li>
                    <li className='m-0'>Contact us</li>
                    <li className='m-0'>Support</li>
                    <li className='m-0'>Careers</li>
                </ul>
            </div>
            <div>
                <h3>
                    Quick Link
                </h3>
                <ul>
                    <li className='m-0'>Share</li>
                    <li className='m-0'>Location</li>
                    <li className='m-0'>Orders</li>
                    <li className='m-0'>Tracking</li>
                    <li className='m-0'>Size</li>
                    <li className='m-0'>Guide</li>
                    <li className='m-0'>FAQs</li>
                </ul>
            </div>
            <div><h3>
                Legal</h3>
                <ul className='flex gap-2 md:block'>
                    <li className='m-0 whitespace-nowrap'>Terms & conditions</li>
                    <div className='border-l-2'></div>
                    <li className='m-0 whitespace-nowrap'>Privacy Policy</li>
                </ul>
                </div>
        </div>
        </div>
    </footer>
  )
}

export default FootDown