import HeadingSection from '@/components/ui/HeadingSection'
import React from 'react'

const page = () => {
  return (
    <article className='page w-full h-full'>
        
        <section className='intro w-full'>
        <div className='container mx-auto'>
            <HeadingSection start={"My"} end={"Pricing"} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore? Sit, accusantium nulla cum, natus atque repellendus adipisci voluptas, deserunt minus repudiandae explicabo aliquam. Eos porro quam nisi ipsum consequatur.</p>
        </div>
        </section>

    </article>
  )
}

export default page
