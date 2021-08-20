import React from 'react'

const Header = ()=>{
  const course = 'Half Stack application development'
  return (
    <h1>{course}</h1>
  )
}

const Content = (props)=>{
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return (
    <>
    <p>
     {part1} {props.exercises1}
    </p>
    <p>
      {part2} {props.exercises2}
    </p>
   <p>
      {part3} {props.exercises3}
    </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const exercises1 = 10 
  const exercises2 = 7  
  const exercises3 = 14

  return (
    <div>
      <Header></Header>
      <Content exercises1 ={exercises1} exercises2 ={exercises2} exercises3= {exercises3}></Content>
      <Total exercises1 ={exercises1} exercises2 ={exercises2} exercises3= {exercises3}></Total>
     
    </div>
  )
}

export default App
