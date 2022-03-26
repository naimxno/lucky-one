import React from 'react';
import "./Question.css"

const Question = () => {
  return (
    <div className='question-container'>
      <div>
        <h1>How does useState work?</h1>
        <p>UseState is a react hook. useState works like a variable.We can push a initial value(that can be a number, Array, object, string) in useState hook and we can change this value using a function.</p>
      </div>
      <div>
        <h1>What is difference between props and state?</h1>
        <p>we can pass data from one component to another component using props.Props have better performance. Props are immutable.</p>
        <p>The state is a local data storage that is local to the component only. State has worse performance. we cannot be used from child components  State  is mutable.</p>
      </div>
    </div>
  );
};

export default Question;