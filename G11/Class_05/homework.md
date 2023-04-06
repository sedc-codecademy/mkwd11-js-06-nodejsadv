# Exercise: Filter an array of objects

- Create interface Person that will have the following properties
  - name which is string, age which is number and gender which is 'male' or 'female'.
- Create a function named filterByProperty. The function should accept three parameters

  - people => which is array of Person objects
  - property => which is string
  - value => which is string

- So if we invoke the function filterByProperty as filterByProperty(peopleArray, "gender", "male") it should return the objects of the peopleArray that its gender is male

- So if we invoke the function filterByProperty as filterByProperty(peopleArray, "age", 30) it should return the objects of the peopleArray that its age is 30.
