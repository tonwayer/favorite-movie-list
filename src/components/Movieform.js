import React, { useState } from 'react'

function Movieform(props) {
  const [name, setName] = useState('');
  const [ratings, setRatings] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      name,
      ratings,
      duration,
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRatingsChange = (e) => {
    setRatings(e.target.value);
  };

  const handleDurationChange = (e) => {
    const durationValidator = /^\d+(\.\d+)?[m|h]$/i;
    setDuration(e.target.value);
  };

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ handleSubmit }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={ratings}
              onChange={handleRatingsChange}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={duration}
              onChange={handleDurationChange}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
