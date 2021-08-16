import React from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';




  const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content
        name1={course.parts[0].name}
        name2={course.parts[1].name}
        name3={course.parts[2].name}
        firstExercise={course.parts[0].exercises}
        secondExercise={course.parts[1].exercises}
        thirdExercise={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  )





// const App = () => {

//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

  // return [ 
  //     <div>
  //     <h1>{course}</h1>
  //     <p>
  //       {part1} {exercises1}
  //     </p>
  //     <p>
  //       {part2} {exercises2}
  //     </p>
  //     <p>
  //       {part3} {exercises3}
  //     </p>
  //     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> 
  //   </div>
// ]

    // return (
    //     <>
    //    <Header course  = {course}/>

    //    <Content part1 = {part1}/>
    //    <Content part2 = {part2}/>
    //    <Content part3 = {part3}/>
       
    //    <Total exercises1 = {exercises1}/>
    //    <Total exercises2 = {exercises2}/>
    //    <Total exercises3 = {exercises3} />

    //     </>  
    // )
  
}

export default App;
