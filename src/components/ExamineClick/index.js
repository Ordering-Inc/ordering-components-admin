import React, { useRef } from 'react'

export const ExamineClick = ({ onFiles, childRef, childId, children, className, style, accept, disabled }) => {
  const inputRef = useRef(null)

  const handleClick = (e) => {
    if (childRef || childId) return
    inputRef.current.click()
  }

  const handleChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onFiles(e.target.files)
  }

  return (
    <div
      draggable
      onClick={handleClick}
      style={style}
      className={className}
    >
      <input
        type='file'
        id={childId}
        style={{ display: 'none' }}
        onChange={handleChange}
        onClick={e => e.stopPropagation()}
        ref={(e) => {
          inputRef.current = e
          childRef && childRef(e)
        }}
        accept={accept}
        disabled={disabled}
      />
      {children}
    </div>
  )
}
