import React, { useState } from 'react'

import cardBack from '../assets/img/bg-card-back.png'
import cardFront from '../assets/img/bg-card-front.png'
import cardLogo from '../assets/img/card-logo.svg'
import iconComplete from '../assets/img/icon-complete.svg'


function Hero() {

  const [cardName, setCardName] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [formFilled, setFormFilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cardName && cardNum && cardDate && cardMonth && cardCvc) {
      console.log('form filled');
      setFormFilled(!formFilled)
    }
  }

  const handleReset = () => {
   setCardName('');
   setCardNum('');
   setCardDate('');
   setCardMonth('');
   setCardCvc('');
   setFormFilled(!formFilled)
  }

  return (
    <main className='md:flex'>

      {/* hero img */}
      <div className='grid justify-center pt-10 pb-14 hero h-64 md:h-full md:py-[220px] md:w-[60%]'>
        <div className='md:flex flex-col-reverse '>

        <div className='relative '>
        <img src={cardBack} alt="card-back" className='w-80 ml-4 md:ml-[300px]'/>
          <p className='absolute bottom-20 right-10 text-xs text-LightGrayishViolet md:-right-[70px]'>{cardCvc ? cardCvc : '000'}</p>
      </div>

      <div className='relative drop-shadow-2xl'>
        <img src={cardFront} alt="card-front" className='w-80 -mt-[4.8em] md:ml-[250px]'/>
        <div className='absolute -top-14 left-4 w-72 md:left-[265px]'>
          <div className='w-14 mb-10'>
            <img src={cardLogo} alt="" />
          </div>
          
            <div className='text-white text-lg tracking-widest'>
            {cardNum ? 
            <span>{
              cardNum.toString().replace(/\d{4}(?=.)/g, '$&  ')
              }</span> : 
            <div className='flex gap-x-5'>
                <span>0000</span>
                <span>0000</span>
                <span>0000</span>
                <span>0000</span>
              </div>}
            </div>

            <div className='flex w-full justify-between items-end pt-4'>
              <p className='uppercase text-xs text-LightGrayishViolet'>{cardName ? cardName : 'Jane Appleseed'}</p>
              <p className='text-white text-xs'>{
                cardDate ? cardDate : '00'
              }/{cardMonth ? cardMonth : '00'}</p>
            </div>
          </div>

      </div>
        </div>
      
    </div>
    
    {/* form */}
    <section className='md:flex md:justify-center md:w-full'>
      <div className='md:max-w-sm'>
        <form className={`pt-28 mx-5 ${formFilled ? 'hidden' : 'block'}`} onSubmit={handleSubmit}>

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
              value={cardNum}
              onChange = {(e) => setCardNum(e.target.value)}
              />
        </div>

        <div className='flex gap-x-2'>

        <div className='basis-[35%]'>
           <label htmlFor="date" className='uppercase tracking-wider text-VeryDarkViolet text-sm'>exp. date</label>
           <input type="text" name='date' className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='MM'
           value={cardDate}
           onChange = {(e) => setCardDate(e.target.value)}
           />
        </div>

        <div className='basis-[35%]'>
           <label htmlFor="month" className='uppercase tracking-wider text-VeryDarkViolet text-sm'>(mm/yy)</label>
           <input type="text" name='month' className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='YY'
           value={cardMonth}
           onChange = {(e) => setCardMonth(e.target.value)}
           />
        </div>

        <div className=''>
           <label htmlFor="cvc" className='uppercase tracking-wider text-VeryDarkViolet text-sm'>cvc</label>
           <input type="text" name='cvc' className='my-2 w-full border-[1px] border-gray-300 rounded-md p-2 placeholder:text-gray-300 outline-none' placeholder='e.g. 123'
           value={cardCvc}
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

      <button className='mt-10 bg-VeryDarkViolet text-white w-full py-3 rounded-md' onClick={handleReset}>Continue</button>
    </div>
      </div>

    </section>
    </main>
    
  )
}

export default Hero