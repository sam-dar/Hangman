import { useState } from "react";
import React from 'react';

//const categoryList = ["animals", "birds", "sports"];

export default function Header(props) {
  
  const [category, setCategory] = useState('A');
const handleChange =(category) =>{  
     // console.log("header "+category)
      setCategory(category);
      props.toggleCategory(category);
}
  
 return (
   <>
      <h1>Hangman</h1>
      <p>please Select a category </p>
      <form>
          <input type="radio" value="A" 
          checked={category === 'A'}
            onChange={e => handleChange(e.currentTarget.value)}
             name='animals'
            />
          <label>Animals</label>

         <input type="radio" value="B" 
         checked={category === 'B'}
           onChange={e => handleChange(e.currentTarget.value)}
            name='birds'/>
            <label >Birds</label>

            <input type="radio" value="S" 
         checked={category === 'S'}
           onChange={e => handleChange(e.currentTarget.value)}
            name='sports'/>
            <label >Sports</label>

            
            <input type="radio" value="F" 
         checked={category === 'F'}
           onChange={e => handleChange(e.currentTarget.value)}
            name='food'/>
         <label >Food</label>

         <input type="radio" value="FF" 
         checked={category === 'FF'}
           onChange={e => handleChange(e.currentTarget.value)}
            name='fruit'/>
         <label >Fruits</label>

         <input type="radio" value="V" 
         checked={category === 'V'}
           onChange={e => handleChange(e.currentTarget.value)}
            name='vegetable'/>
         <label >Vegetable</label>
      </form>
       {/* <h1>{category}</h1>  */}

     
   </>
  );
}
//   const [category, setCategory] = useState(['animals']);

//   const handleChange =(category) =>{
//     console.log("header "+category)
//     setCategory(category);
//     props.toggleCategory(category);

//   }
//   return (
//     <div className="header">
      
//       {categoryList.map(f => (
//         <>
//           <input
//             type="radio"
//             name="category"
//             value={f}
//             checked={category === f}
//             onChange={e => handleChange(e.currentTarget.value)}
//           />{" "}
//           {f}
//         </>
//       ))}
//       <p>{category}</p>
//     </div>
//   );
// }
