import ForgetPasswordVerification from '@/components/auth/ForgetPasswordVerification';
import React from 'react'

const page = async ({params}) => {
    const {token} = await params;
  return (
    <div>
        <ForgetPasswordVerification token={token} />
    </div>
  )
}

export default page
