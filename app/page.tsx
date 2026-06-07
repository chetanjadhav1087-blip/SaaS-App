import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard 
          id = '123'
          name = 'Neura the Brein Explorer'
          topic = 'Neural Network of the brain'
          subject = 'Science'
          duration = {45}
          color = 'rgb(127, 242, 215)'
        />
        <CompanionCard 
          id = '234'
          name = 'Counsty the Number Wizard'
          topic = 'Derivatives & Integer'
          subject = 'Maths'
          duration = {30}
          color = '#ddda'
        />
        <CompanionCard 
          id = '345'
          name = 'Verba the Vocabulary builder'
          topic = 'Language'
          subject = 'English Literature'
          duration = {30}
          color = 'rgb(238, 95, 95)'
        />
      </section> 

      <section className='home-section'>
        <CompanionsList 
          title = 'Recently completely Sessions'
          companions = {recentSessions}
          classNames = 'w-2/3 max-lg:w-full'
        />
      </section>
        <Cta />
    </main>
  )
}

export default Page