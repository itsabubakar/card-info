import React, { useState } from 'react'

function Form({formInfo}) {

  const [formFilled, setFormFilled] = useState(false);
  const {cardName, cardNum, cardDate, CardMonth, cardCvc} = formInfo;

  console.log(cardName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cardName) {
      console.log(cardName);
    }
  }


  return (
    <section>
      <form className = {formFilled ? 'pt-28 mx-5 hidden' : 'pt-28 mx-5'} onSubmit={handleSubmit}>

        <div className=''>
           <label htmlFor="name" className='uppercase text-sm tracking-wider text-VeryDarkViolet'>cardholder name</label>
           <input type="text" 
              name='name' 
              className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='e.g. Jane Appleseed'
              value={cardName}
              onChange = {(e) => setCardName(e.target.value)}
              />
        </div>

        <div className=''>
           <label htmlFor="number" className='uppercase text-sm tracking-wider text-VeryDarkViolet'>card number</label>
           <input type="text" 
              name='number'
              className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='e.g. 1234 5678 9123 0000'
              // value={cardNum}
              onChange = {(e) => setCardNum(e.target.value)}
              />
        </div>

        <div className='flex gap-x-2'>

        <div className='basis-[35%]'>
           <label htmlFor="date" className='uppercase tracking-wider text-VeryDarkViolet text-sm'>exp. date</label>
           <input type="text" name='date' className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='MM'
          //  value={cardDate}
           onChange = {(e) => setCardDate(e.target.value)}
           />
        </div>

        <div className='basis-[35%]'>
           <label htmlFor="month" className='uppercase tracking-wider text-VeryDarkViolet text-sm'>(mm/yy)</label>
           <input type="text" name='month' className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='YY'
          //  value={cardMonth}
           onChange = {(e) => setCardMonth(e.target.value)}
           />
        </div>

        <div className=''>
           <label htmlFor="cvc" className='uppercase tracking-wider text-VeryDarkViolet text-sm'>cvc</label>
           <input type="text" name='cvc' className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='e.g. 123'
          //  value={cardCvc}
           onChange = {(e) => setCardCvc(e.target.value)}
           />
        </div>

        </div>

        <input type="submit" value='Confirm' className='mt-4 bg-VeryDarkViolet text-white w-full py-3 rounded-md'/>
      </form>

    {/*---- Success Screen -----*/}

    <div className={`mx-5 ${formFilled ? 'block': 'hidden'}`}>
      <div className='mt-24 flex justify-center'>
        <img src={iconComplete} alt="" />
      </div>

      <div className='text-center pt-10'>
        <h2 className='uppercase text-lg text-VeryDarkViolet'>thank you!</h2>
        <p className='text-base pt-5'>We've added your card details</p>
      </div>

      <button className='mt-10 bg-VeryDarkViolet text-white w-full py-3 rounded-md'>Continue</button>
    </div>

    </section>
      
  )
}

export default Form