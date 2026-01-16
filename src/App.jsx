import React from 'react'
import Card from './components/card'




const App = () => {

 const jobOpenings = [
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Google",
    salaryPerHour: 120
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Apple",
    salaryPerHour: 115
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Meta",
    salaryPerHour: 110
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Amazon",
    salaryPerHour: 105
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Netflix",
    salaryPerHour: 130
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Microsoft",
    salaryPerHour: 108
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Tesla",
    salaryPerHour: 112
  },
  {
   
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "NVIDIA",
    salaryPerHour: 125
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Adobe",
    salaryPerHour: 102
  },
  {
    
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZyN1jU6HFvJe2MtCIwF90RX8DSdKvSt7CQ&s",
    companyName: "Uber",
    salaryPerHour: 100
  }
]

console.log(jobOpenings)

  return (
    <div className="parent" >
      {jobOpenings.map(function(elem ,idx){
        return <div key={idx}><Card  company={elem.companyName} salary={elem.salaryPerHour} logo={elem.brandLogo}/>
        </div>
      })}

    </div>
  )
}

export default App
