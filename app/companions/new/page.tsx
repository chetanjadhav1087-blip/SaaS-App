import ComapnionForm from '@/components/ComapnionForm'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

async function NewCompanion() {

  const {userId} = await auth();
  if(!userId) redirect('sign-in');
  return (
    <main className='main-lg:w1/3 min-md:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Comapnion Builder</h1>
        <ComapnionForm />
      </article>
    </main>
  )
}

export default NewCompanion
