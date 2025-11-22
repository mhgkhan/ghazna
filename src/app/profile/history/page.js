import FreezeEnv from '@/config/EnvConfig';
import React from 'react'


const fetchHistory = async () => {
  const obj = {};
  try {

    const request = await fetch(`${FreezeEnv.DOMAIN}api/users/profile/gethistory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      }
    });

    const response = await request.json();
    if (response.success) {
      obj.error = false;
      obj.message = response.message;
      obj.data = response.data;
      obj.success = true;
    }
    else {
      obj.error = true;
      obj.message = response.message;
      obj.success = false;
    }

  } catch (error) {
    obj.error = true;
    obj.message = error.message;
    // return obj;
  } finally {
    return obj;
  }
}

const page = async () => {


  const getHistory = await fetchHistory();


  return (
    <article>
      <div className="container mx-auto ">
        <h2 className='md:text-3xl text-2xl md:px-auto font-bold my-5 text-pink-600 underline px-2 text-left'>Your History   </h2>
        <p className='text-xl italic md:px-auto px-2'>
          Here is your activity history
        </p>
        <div className="history-heading flex items-center justify-between p-5 my-5 rounded-md border-b border-1 border-pink-500 ">
          <h3 className='md:text-2xl text-lg font-bold text-pink-600'>Recent Activities</h3>
          <button className='px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-all duration-300'>Clear all</button>
        </div>


        {
          getHistory.success && getHistory.data.length > 0 ? <div className='my-2 history-all border border-1 border-dotted border-pink-500 rounded-md p-2 flex items-center justify-between gap-5'>
            <div className="history-info flex items-center justify-start gap-2">
              <span className='px-3 py-2 bg-pink-500 rounded-lg text-white font-bold'>1</span>
              <p>this is your history text all the text</p>
            </div>
            <span className="italic">01/01/2025</span>
          </div>
            : <h3 className='text-2xl text-center text-pink-500 font-bold italic'>Nothing in your  History </h3>
        }


      </div>
    </article>
  )
}

export default page
