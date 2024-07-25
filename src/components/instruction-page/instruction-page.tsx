import React from 'react'

interface Props {
  updatePage: Function;
}

const InstructionPage = ({ updatePage }: Props) => {
  return (
    <div>
        TEST
        <button onClick={_ => updatePage(false)}>START</button>
    </div>
  )
}

export default InstructionPage