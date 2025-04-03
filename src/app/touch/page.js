import React from 'react'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function page() {
    return (
        <>
            {/* NavBar */}
            <NavBar />
            {/* s1 */}
            <section className='pt-[32px] pb-[80px] px-[48px]'>
                <h1 className=' font-bold text-[136px] w-[70%]'>Get in touch with us.</h1>
            </section>
            {/* s2 form */}
            <section className='pb-[120px] pt-[40px] px-[48px] '>
                <ContactForm />
            </section>
            {/* s3 */}
            <section>

                <Footer />
            </section>
        </>
    )
}
