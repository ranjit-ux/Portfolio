import React from 'react'
import ContactItem from '../components/ContactIcon'
import { DiscordLogo, FiverrLogo, GmailLogo, LinkedinLogo, UpworkLogo, XLogo,Caller,GitHubWeb } from '../assets/images'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div>
      <section className="py-14">
        <h1 className="text-3xl font-bold text-white mb-4">
            <span className="primary text-4xl">/</span>contacts
        </h1>
        <div className='flex flex-col md:flex-row gap-30 justify-between items-center'>
            <div className='w-1/2 mt-10 text-primary'>
                <ContactForm/>
            </div>
            <div className='w-1/2  flex flex-col justify-center items-center -mt-20' > 
                <p className='text-white text-xl font-semibold mb-8'><span className='primary'>#</span>all-media</p> 
                <ContactItem icon={LinkedinLogo} label="Ranjit Kumar Singh" link="https://www.linkedin.com/in/ranjit-kumar-singh/"  />
                <ContactItem icon={XLogo} label="Currently Inactive" link="" />
                <ContactItem icon={GmailLogo} label="ranjitksingh.079@gmail.com" link="mailto:ranjitksingh.079@gmail.com" />
                <ContactItem icon={Caller} label="+91 6200369363" link="tel:+916200369363" />
                <ContactItem icon={GitHubWeb} label="ranjit-ux" link="https://github.com/ranjit-ux" />
                <ContactItem icon={FiverrLogo} label="@ranjit_ksingh" link="https://www.fiverr.com/s/LdbXayp" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
