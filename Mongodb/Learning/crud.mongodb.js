use("CurdDb")

db.createCollection("courses")

db.courses.insertOne({
    name : "Rajat things ", 
    price : 0 , 
    assignments : 12 , 
    project : 45 
})

db.courses.insertMany([
    { name: "Rajat things 1", price: 100, assignments: 10, project: 20 },
    { name: "Rajat things 2", price: 200, assignments: 12, project: 25 },
    { name: "Rajat things 3", price: 150, assignments: 8, project: 30 },
    { name: "Rajat things 4", price: 250, assignments: 15, project: 35 },
    { name: "Rajat things 5", price: 300, assignments: 20, project: 40 },
    { name: "Rajat things 6", price: 350, assignments: 18, project: 45 },
    { name: "Rajat things 7", price: 400, assignments: 22, project: 50 },
    { name: "Rajat things 8", price: 450, assignments: 25, project: 55 },
    { name: "Rajat things 9", price: 500, assignments: 30, project: 60 },
    { name: "Rajat things 10", price: 550, assignments: 35, project: 65 }
  ])

  let a = db.courses.find({
    price : 100 
  })

  console.log(a)