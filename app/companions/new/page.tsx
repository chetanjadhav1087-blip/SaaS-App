import ComapnionForm from '@/components/ComapnionForm'
import React from 'react'

function page() {
  return (
    <main className='main-lg:w1/3 min-md:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Comapnion Builder</h1>
        <ComapnionForm />
      </article>
    </main>
  )
}

export default page
