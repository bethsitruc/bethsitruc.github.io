import React from 'react'

export default function FunFacts() {
  const facts = [
    'Mom of four',
    'Musicals forever',
    'Baking resets',
    'Singapore study abroad',
    'Bobby Bones fan',
    'Coffee powered',
  ]

  return (
    <div className='fun-facts'>
      <h3 className='fun-facts-title'>Fun Facts</h3>
      <ul className='fun-facts-grid'>
        {facts.map(fact => (
          <li key={fact} className='tag-chip fun-fact-chip'>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  )
}
