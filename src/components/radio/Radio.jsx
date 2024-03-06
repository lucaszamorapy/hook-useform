import React from 'react'

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null

  return (
    <>
        <fieldset>
          <legend className="mb-2 font-bold">{pergunta}</legend>
          {options.map((option) => (
            <label className="block mb-4 font-mono" key={option}>
              <input type="radio" checked={value === option} id={id} value={option} onChange={onChange}/>
              {option}
            </label>
          ))}
        </fieldset>
    </>
  )
}

export default Radio