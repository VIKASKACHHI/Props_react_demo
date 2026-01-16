📦 React Props Practice

This repository is a hands-on practice project to understand how props work in React, how data flows between components, and best practices used in real-world (industry-level) React applications.

🚀 What Are Props in React?

Props (short for “properties”) are a way to pass data from a parent component to a child component.

Props are read-only

They follow one-way data flow (parent ➜ child)

Props make components reusable and dynamic

🧠 Basic Concept
Parent Component
<Card company="Google" salary={120} />

Child Component
function Card(props) {

  return (

    <div>
      <h2>{props.company}</h2>
      <p>${props.salary}/hr</p>
    </div>
  )
}


👉 The parent controls the data, the child only consumes it.

📊 Props With Arrays & map()

In real projects, data usually comes as arrays (API / database).

Example:
{jobOpenings.map(job => (

  <Card

    key={job.id}
    company={job.companyName}
    salary={job.salaryPerHour}
    logo={job.brandLogo}
  />
))}

Why key is important?

Helps React track elements

Improves performance

Prevents rendering bugs

✔ Always use a unique and stable id
❌ Avoid array index as key in dynamic lists

🧩 Props Destructuring (Industry Standard)
❌ Not Recommended
function Card(props) {
  return <h2>{props.company}</h2>
}

✅ Recommended
function Card({ company, salary, logo }) {

  return (

    <div>
      <img src={logo} alt={company} />
      <h2>{company}</h2>
      <p>${salary}/hr</p>
    </div>
  )
}


✔ Cleaner
✔ More readable
✔ Easier maintenance

🔒 Props Are Immutable (Important Rule)

❌ Never modify props

props.salary = 200   // ❌ wrong


✅ Correct approach:

Use state in parent

Pass updated value as prop

🏗️ Industrial-Level Best Practices
1️⃣ Keep Components Small

Each component should do one job only.

Card
 ├── Logo
 ├── CompanyName
 └── Salary

2️⃣ Clear & Meaningful Prop Names
❌

<
Card a={x} b={y} />
✅


<
Card company={name} salary={pay} />

3️⃣ Validate Props (Recommended)

Using PropTypes (or TypeScript in real projects):

import PropTypes from "prop-types"

Card.propTypes = {

  company: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
}


Prevents runtime bugs.

4️⃣ Avoid Over-Passing Props (Prop Drilling)

❌

App → Section → Card → Button


✅ Solutions:

Context API

State management (Redux, Zustand)

Component composition

5️⃣ Do NOT Put Logic Inside JSX

❌

<
Card salary={salary > 100 ? salary : 100} />


✅

const finalSalary = salary > 100 ? salary : 100
<Card salary={finalSalary} />


Cleaner & testable.

⚠️ Common Mistakes to Avoid
Mistake	Why it’s bad
Missing key	Causes re-render bugs
Modifying props	Breaks React rules
Too many props	Hard to maintain
Using index as key	UI breaks on reorder
Business logic in JSX	Poor readability
🧪 What This Repo Covers

✔ Passing props
✔ Props with map()
✔ Keys in lists
✔ Reusable components
✔ Clean component structure
✔ Industry-ready patterns

🎯 Goal of This Project

To build a strong foundation in props, which is essential for:

React internships

Frontend interviews

Large-scale React applications

📌 Final Takeaway

Props define how components communicate.
Clean props = clean architecture.