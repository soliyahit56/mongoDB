
db.Teacher.insert({_id:1,name:"Jinal",age:38,subject:["BDT","DS"],DOB:"1995-09-26",gender:"Female",salary:49000,city:"a'bad"})
db.Teacher.insert({_id:2,name:"Anil",age:48,subject:["Hindi","English"],DOB:"1999-08-25",gender:"Male",salary:47000,city:"a'bad"})
db.Teacher.insert({_id:3,name:"Akash",age:28,subject:["Hindi","Guj"],DOB:"1981-01-01",gender:"Male",salary:30000,city:"baroda"})
db.Teacher.insert({_id:4,name:"Brinda",age:26,subject:["Computer","Guj"],DOB:"1988-12-11",gender:"Feale",salary:38000,city:"surat"})
db.Teacher.insert({_id:5,name:"Sweta",age:25,subject:["English","Sanskrit"],DOB:"1988-12-11",gender:"Female",salary:39000,city:"surat"})
db.Teacher.insert({_id:6,name:"Jenil",age:25,subject:["PT","C"],DOB:"1988-12-11",gender:"other",salary:8000,city:"surat"})
db.Teacher.insert({_id:7,name:"Samir",age:25,subject:["PT"],DOB:"2000-12-11",gender:"other",salary:5500,city:"gothara"})

db.Student.insert({_id:1,Rollno:1,name:"Akhil",grade:"VII",hobby:['chess','cricket'],DOJ:"2002-12-16"})
db.Student.insert({_id:2,Rollno:2,name:"Jenil",grade:"VI",hobby:['chess','dancing'],DOJ:"2004-02-19"})
db.Student.insert({_id:3,Rollno:3,name:"Hit",grade:"XII",hobby:['writing','dancing'],DOJ:"2001-01-26"})
db.Student.insert({_id:4,Rollno:4,name:"Samir",grade:"I",hobby:['chess','tennis'],DOJ:"2001-01-26"})
db.Student.insert({_id:5,Rollno:5,name:"Jay",grade:"VI",hobby:['cricket','reading'],DOJ:"2003-06-20"})
db.Student.insert({_id:6,Rollno:6,name:"Jymin",grade:"XII",hobby:['chess','reading'],DOJ:"2002-03-10"})
db.Student.insert({_id:7,Rollno:7,name:"Rishi",grade:"XI",hobby:['cricket','badminton'],DOJ:"2001-08-09"})
db.Student.insert({_id:8,Rollno:8,name:"Ravi",grade:"VII",hobby:['cricket','tennis'],DOJ:"2002-09-08"})
db.Student.insert({_id:9,Rollno:9,name:"Deep",grade:"VI",hobby:['writing','dancing'],DOJ:"2001-11-03"})
db.Student.insert({_id:10,Rollno:10,name:"Zoya",grade:"XII",hobby:['cricket','chess'],DOJ:"2003-12-06"})
db.Student.insert({_id:11,Rollno:11,name:"Monil",grade:"XII",hobby:['cricket','vollibool'],DOJ:"2002-12-06"})

db.Movie.insertMany([
    { "_id" : 1, "title" : "Fight Club", "writer" : "Chuck Palahniuk", "year" : "1999", "actors" : [ "Brad Pitt", "Edward Norton" ] },
    { "_id" : 2, "title" : "Pulp Fiction", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "John Travolta", "Uma Thurman" ] },
    { "_id" : 3, "title" : "Inglorious Hero", "writer" : "Quentin Tarantino", "year" : "2009", "actors" : [ "Brad Pitt", "Diane Kruger", "Eli Roth" ] },
    { "_id" : 4, "title" : "The Hobbit: An unexpected Journey", "writer" : "J.R.R. Tolkein", "year" : "2012", "franchise" : "The Hobbit" },
    { "_id" : 5, "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R Tolkien", "year" : "2013", "franchise" : "The Hobbit" },
    { "_id" : 6, "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R Tolkien", "year" : "2002", "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." },
    { "_id" : 7, "title" : "Pee Wee Herman's Big Adventures" },
    { "_id" : 8, "title" : "Avatar" }
    ])


db.Customer.insert({Cust_ID:"C100",AccBal:5000,AccType:"S"})
db.Customer.insert({Cust_ID:"C101",AccBal:1000,AccType:"C"})
db.Customer.insert({Cust_ID:"C100",AccBal:1500,AccType:"S"})
db.Customer.insert({Cust_ID:"C100",AccBal:1090,AccType:"S"})
db.Customer.insert({Cust_ID:"C100",AccBal:100,AccType:"S"})
db.Customer.insert({Cust_ID:"C101",AccBal:16000,AccType:"C"})
db.Customer.insert({Cust_ID:"C102",AccBal:1010,AccType:"S"})
db.Customer.insert({Cust_ID:"C102",AccBal:9010,AccType:"S"})
db.Customer.insert({Cust_ID:"C101",AccBal:7010,AccType:"C"})
db.Customer.insert({Cust_ID:"C103",AccBal:8000,AccType:"C"})
db.Customer.insert({Cust_ID:"C103",AccBal:5000,AccType:"C"})
db.Customer.insert({Cust_ID:null,AccBal:2000,AccType:"S"})
db.Customer.insert({Cust_ID:null,AccBal:4000,AccType:"S"})



db.demo.remove({id:1})
db.emp.dero()

db.createCollection("teabl name")
db.emp.find().pretty()

// $eq = equale
// $gt = greater
// $gte = greater equal to
// $in = matches valuse;
// $ne = not equal
// $lt = less than
// $lte = less than equal to
// $nin = not in

db.emp.insertOne({
title:"Post Title 1",
body:"Body of post",
category:"News",likes:1,
tags:["news","events"],
data:Date()
})
db.emp.insertOne({
title:"Post Title 3",
body:"Body of post",
category:"events",likes:2,
tags:["new1s","events"],
data:Date()
})
db.emp.insertOne({
title:"Post Title 4",
body:"Body of post",
category:"events",likes:3,
tags:["news3","events1"],
data:Date()
})
db.emp.insert({
title:"Post Title 2",
body:"Body of post",
category:"News1",likes:2,
tags:["new1s","events"],
data:Date()
})
db.Teacher.insert({_id:1,name:"Jinal",
age:38,
subject:["BDT","DS"],DOB:"1995-09-26",
gender:"Female",
salary:49000,
city:"a'bad"})

db.emp.find({category:events},{title:1})

db.emp.Teacher({subject:{$in:["hindy","English"]}}).pretty()
db.Teacher.find({$and:[{subject:"hindi"},{subject:"English"}]}).pretty()
db.Teacher.find({$and:[{gender:"Female"},{subject:"English"}]}).pretty()
db.Teacher.find({$and:[{gender:"Male"},{salary:{$gte:30000}}]}).pretty()
db.Teacher.update({name:"Anil"},{$set:{subject:"Frenach"}}).pretty()
db.Teacher.updateMany({name:"Jenil"},{$inc:{salary:-5000}})
db.Teacher.updateMany({},{$inc:{salary:500}})

db.Teacher.remove({})
db.Teacher.update({_id:6},{$set:[{name:"samir"},{subject:"PT"},{salary:8000},{city:"Ahemdabad"},{gender:"Other"}]})

db.Teacher.findAndModify({query:{"_id":6},update:{$set:{name:"samir",subject:"PT",salary:8000,city:"Ahemdabad",gender:"Other"}},upsert:true})
db.Teacher.findAndModify({query:{"_id":6},update:{$unset:{salary}},upsert:true})
db.Teacher.update({_id:6},{$unset:{salary}})

var map=function(){emit(this.age,this.salary)}
var reduce=function(key,valuse){return Array.avg(valuse);}
db.Teacher.mapReduce(map,reduce,{out:"Total_salary"})
db.Total_salary.find().pretty()


db.Student.createIndex({Rollno:1},{name:"unique_index",unique:true})


db.Student.find({name:"Akhil"}),pretty()
db.Student.find({},{_id:0}),pretty()
db.Student.find({},{name:1,grade:1}),pretty()
db.Student.find({_id:1},{name:1,grade:1}),pretty()
db.Student.updateMany({},{$set:{address:"Ahemdabad"}})
db.Student.find({grade:"VII"}),pretty()
db.Student.find({grade:{$ne:"VII"}}).pretty()
db.Student.find({$or:[{hobby:"chess"},{hobby:"dancing"}]}).pretty()
db.Student.find({$nor:[{hobby:"chess"},{hobby:"dancing"}]}).pretty()


db.Student.find({name:/^A/})
db.Student.find({name:{$regex:/^A/i}})
db.Student.find({name:{$regex:/i$/}})
db.Student.find({name:/.*i.*/}).pretty()


db.Student.find({$or:[{hobby:["chess","dancing"]}]}).pretty()


db.Movie.find().pretty()
db.Movie.updateMany({"writer":{$ne:null}},{$rename:{"writer":"director"}})
db.Movie.find({writer:"Quentin Tarantino"}).pretty()
db.Movie.find({actors:"Brad Pitt"}).pretty()
db.Movie.update({title:"The Hobbit: The Desolation of Smaug"},{$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring"}})
db.Movie.find({$or:[{year:{$lte:"2000"}},{year:{$gte:"2010"}}]}).pretty()
db.Movie.update({title:"Pulp Fiction"},{$push:{actors:"Samuel L. Jackson"}})
db.Movie.find({synopsis:/Bilbo/}).pretty()
db.Movie.find({synopsis:/Gandalf/}).pretty()
db.Movie.find({$and:[{synopsis:/Bilbo/},{synopsis:{$not:/Gandalf/}}]}).pretty()
db.Movie.find({$or:[{synopsis:/dwarves/},{synopsis:/hobbit/}]}).pretty()
db.Movie.find({$or:[{synopsis:/gold/},{synopsis:/dragon/}]}).pretty()
db.Movie.remove({title:"Pee Wee Herman's Big Adventures"})

// pop remo arr 1 lest slike or -1 fost slike
// pull sille=name
// $natural:-1 or 1 use to revas and not revas


db.employees.update({firstName:"Kapil"},{$set:{skills:["HR"]}})
db.employees.updateMany({firstName:"Kapil"},{$push:{skills:["Accounting", "Tax", "Sales"]}})
db.employees.updateMany({firstName:"Kapil"},{$addToSet:{skills:["Accounting", "Tax", "Sales"]}})
db.employees.update({firstName:"Amitabh"},{$addToSet:{skills:"HR"}})


Day-3
db.Student.find({name:{$regex:/^M/,$options:'i'}}).pretty()
db.Student.find({$or:[{name:{$regex:/^M/,$options:'i'}},{name:{$regex:/^A/,$options:'i'}}]}).pretty()
db.Student.find({name:/e/}).pretty()
db.Student.find({name:/a$/}).pretty()
db.Student.count({})
db.Student.count({grade:{$regex:"VII"}})
db.Student.find({}).sort({name:1}).pretty()
db.Student.find().sort({Rollno:-1}).limit(2)

db.emp.insertMany([
    {no:1,name:"ST",salary:2000,role:"OB"},
    {no:2,name:"MSD",salary:1500,role:"WK"},
    {no:3,name:"YS",salary:1000,role:"ALR"},
    {no:4,name:"RD",salary:1000,role:"MOB"},
    {no:5,name:"RS",salary:500,role:"OB"},
    {no:6,name:"BK",salary:500,role:"MOB"},
    {no:7,name:"VK",salary:300,role:"BW"},
    {no:8,name:"JB",salary:400,role:"BW"},
    {no:9,name:"HP",salary:400,role:"ALR"},
    {no:10,name:"VS",salary:300,role:"OB"}
])

db.emp.find()
db.emp.update({name:"ST"},{salary:{$inc:8000}})
db.emp.updateMany({salary:{$inc:4000}})
db.emp.update({name:"MSD"},{$set:{role:"c and WK"}})
db.emp.update({name:"RS"},{$set:{remark:"WC"}})
db.emp.update({_id:11},{$set:{no:11,name:"AK",salary:10000,role:"coch"}},{upsert:true})
db.emp.remove({_id:11})
db.emp.update({name:"RD"},{$mul:{salary:2}})
db.emp.find({name:{$regex:/^S/}}).pretty()
db.emp.find({name:/^R/,$options:'i'}).pretty()
db.emp.find({name:/K$/}).pretty()
db.emp.find({name:/D$/}).pretty()
db.emp.find({name:/S/}).pretty()

// project : aggregate me all data show
db.Customer.find().pretty()
db.Customer.aggregate({$group:{_id:"$Cust_ID",Total:{$sum:"$AccBal"}}})
db.Customer.aggregate({$group:{_id:"$Cust_ID",Maxbal:{$max:"$AccBal"}}})
db.Customer.aggregate({$group:{_id:"$Cust_ID",Minbal:{$min:"$AccBal"}}})
db.Customer.aggregate({$group:{_id:"$Cust_ID",Avgbal:{$avg:"$AccBal"}}})
db.Customer.aggregate({$match:{AccType:"S"}},{$group:{_id:"$Cust_ID",Total:{$sum:"$AccBal"}}})
db.Customer.aggregate({$project:{"_id":0,"Cust_ID":1,"AccBal":1}})
db.Customer.aggregate({$match:{Cust_ID:null}},{$group:{_id:"$Cust_ID",Total:{$sum:"$AccBal"}}})
db.Customer.aggregate([{$group:{_id:"$Cust_ID",Total:{$sum:1}}}])

db.Books.insert([
    {_id:1,bookId:"b101",bookTitle:"The Secret 1",authors:["Rhonda Byrne"],publicationYear:2006,publisher:"Atria Publishing Group",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150},{OrderedId:"o104", orderDate:new Date("2020-02-14"), customerName:"Darshan", price:1000,
    quantityOrdered:1, discount:100}]},
    {_id:2,bookId:"b102",bookTitle:"The Secret 2",authors:["Rhonda Byrne","Bob Proctor"],publicationYear:2006,publisher:"Atria Publishing Group",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150}]},
    {_id:3,bookId:"b103",bookTitle:"The Secret 3",authors:["Rhonda Byrne","Esther Hicks"],publicationYear:2006,publisher:"Atria Publishing Group",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150},{OrderedId:"o104", orderDate:new Date("2020-02-14"), customerName:"Darshan", price:1000,
    quantityOrdered:1, discount:100}]},
    {_id:4,bookId:"b104",bookTitle:"The Secret 4",authors:["Rhonda Byrne","Bob Proctor"],publicationYear:2006,publisher:"Beyond Words Publishing",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150}]},
    {_id:5,bookId:"b105",bookTitle:"The Secret 5",authors:["Rhonda Byrne"],publicationYear:2006,publisher:"Atria Publishing Group",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50}]},
    {_id:6,bookId:"b106",bookTitle:"The Secret 6",authors:["Rhonda Byrne","EstherHicks","Esther Hicks"],publicationYear:2006,publisher:"Beyond Words Publishing",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150}]},
    {_id:7,bookId:"b107",bookTitle:"The Secret 7",authors:["Rhonda Byrne","BobProctor","Esther Hicks"],publicationYear:2006,publisher:"Atria Publishing Group",
    orders:[{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150},{OrderedId:"o104", orderDate:new Date("2020-02-14"), customerName:"Darshan", price:1000,
    quantityOrdered:1, discount:100}]},
    {_id:8,bookId:"b108",bookTitle:"The Secret 8",authors:["Rhonda Byrne"],publicationYear:2006,publisher:"Beyond Words Publishing",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150}]},
    {_id:9,bookId:"b109",bookTitle:"The Secret 9",authors:["Rhonda Byrne","Esther Hicks"],publicationYear:2006,publisher:"Atria Publishing Group",
    orders:[{OrderedId:"o101", orderDate:new Date("2020-02-11"), customerName:"Jainam", price:1000,
    quantityOrdered:1, discount:100},{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o104", orderDate:new Date("2020-02-14"), customerName:"Darshan", price:1000,
    quantityOrdered:1, discount:100}]},
    {_id:10,bookId:"b110",bookTitle:"The Secret 10",authors:["Rhonda Byrne","BobProctor","Esther Hicks"],publicationYear:2006,publisher:"Beyond Words Publishing",
    orders:[{OrderedId:"o102", orderDate:new Date("2020-02-12"), customerName:"Rahil", price:1000,
    quantityOrdered:2, discount:50},{OrderedId:"o103", orderDate:new Date("2020-02-13"), customerName:"Gautam", price:1000,
    quantityOrdered:2, discount:150},{OrderedId:"o104", orderDate:new Date("2020-02-14"), customerName:"Darshan", price:1000,
    quantityOrdered:1, discount:100}]},
    ])
db.Books.find().pretty()
db.Books.update({"bookTitle":"The Secret 10"},{$set:{"bookTitle":"The Secret 11"}})
db.Books.update({"bookTitle":"The Secret 11"},{$set:{"bookTitle":"The Secret 10"}})
db.Books.aggregate({$project:{_id:0,bookId:1,bookTitle:1,authors:{$size:"$authors"}}},{$out:"books"})
db.books.find().pretty()
db.books.aggregate({$match:{authors:{$lt:3}}}).pretty()
db.books.aggregate({$group:{_id:"$bookId",number:{$sum:1}}})

var map=function(){
    for(var i=0;i<this.orders.length;i++){
        var key=this.orders[i].customerName; 
        var values={count:1,discount:this.orders[i].discount}
        emit(key,values);
    }
}
var reduce=function(key,values){
    use={count:0,discount:0};
    for(var i=0;i<values.length;i++){
        use.count=use.count+values[i].count;
        use.discount=use.discount+values[i].discount;
    }
    return use;
}
db.Books.mapReduce(map,reduce,{out:"Total_orders"})
db.Total_orders.find().pretty()


var map=function(){
    for(var i=0;i<this.orders.length;i++){
        var key=this.orders[i].orderDate;
        var values={const:1,quantityOrdered:this.orders[i].quantityOrdered}
        emit(key,values);
    }
}
var reduce=function(key,values){
    use={count:0,quantityOrdered:0};
    for(var i=0;i<values.length;i++){
        use.count=use.count+values[i].const;
        use.quantityOrdered=use.quantityOrdered+values[i].quantityOrdered;
    }
    return use;
}
db.Books.mapReduce(map,reduce,{out:"Total_orders"})
db.Total_orders.find().pretty()

db.employees.insert({"name":"Akhil","dept":"Admin","languages":["german","french","english","hindi"],"age":30, "totalExp":10});
db.employees.insert({"name":"Anna","dept":"Admin","languages":["english","hindi"],"age":35, "totalExp":11});
db.employees.insert({"name":"Bob","dept":"Facilities","languages":["english","hindi"],"age":36, "totalExp":14});
db.employees.insert({"name":"Cathy","dept":"Facilities","languages":["hindi"],"age":31, "totalExp":4});
db.employees.insert({"name":"Mike","dept":"HR","languages":["english", "hindi", "spanish"],"age":26, "totalExp":3});
db.employees.insert({"name":"Jenny","dept":"HR","languages":["english", "hindi", "spanish"],"age":25, "totalExp":3});
db.employees.insert({"name":"Jay","dept":"HR","languages":["english", "hindi", "spanish"],"age":25, "totalExp":1});

// employees
// $out new view or dublicat table
// $unwind arre dive 
db.employees.find().pretty()
db.employees.aggregate({$match:{dept:"Admin"}},{$group:{_id:"$dept",Total:{$sum:1}}}).
db.employees.aggregate({$group:{_id:"$dept",avg:{$avg:"$totalExp"},Total:{$sum:"$totalExp"}}})
db.employees.aggregate({$match:{dept:"HR"}},{$group:{_id:"$dept",avg:{$avg:"$totalExp"},Total:{$sum:"$totalExp"}}})
db.employees.aggregate({$group:{_id:"$dept",max:{$max:"$totalExp"},Min:{$min:"$totalExp"}}})
db.employees.aggregate({$group:{_id:"$dept",f1:{$first:"$name"},l1:{$last:"$name"}}})
db.employees.aggregate({$group:{_id:"$dept",arrpush:{$push:"$totalExp"}}})
db.employees.aggregate({$group:{"_id":"$dept",names:{$push:"$name"},max:{$max:"$totalExp"},Min:{$min:"$totalExp"}}})

db.employees.aggregate({$project:{_id:0,name:1,dept:1,languagess:{$size:"$languages"}}},{$out:"emp1"})
db.emp1.find({languagess:{$gte:3}},{_id:0}).pretty()

db.Sales.insertMany([{
    productId:"Pid0020",
    productName:"TV",
    saleDate:"21-Mar-2023",
    salePrice:20000,
    saleQuantity:2000,
    purchaseDate:"18-Mar-2023",
    purchasePrice:18000,
    purchaseQuantity:50
},{
    productId:"Pid0231",
    productName:"Speaker",
    saleDate:"1-Mar-2023",
    salePrice:12000,
    saleQuantity:200,
    purchaseDate:"1-Apr-2023",
    purchasePrice:10000,
    purchaseQuantity:500
},{
    productId:"Pid0044",
    productName:"Mouse",
    saleDate:"18-Mar-2023",
    salePrice:200,
    saleQuantity:1000,
    purchaseDate:"1-Mar-2023",
    purchasePrice:150,
    purchaseQuantity:500
},{
    productId:"Pid0050",
    productName:"PC",
    saleDate:"10-Mar-2023",
    salePrice:18000,
    saleQuantity:2000,
    purchaseDate:"15-Mar-2023",
    purchasePrice:15000,
    purchaseQuantity:150
},{
    productId:"Pid0066",
    productName:"Microwave",
    saleDate:"21-Feb-2023",
    salePrice:2000,
    saleQuantity:1800,
    purchaseDate:"1-Mar-2023",
    purchasePrice:1550,
    purchaseQuantity:1000
},
{
    productId:"Pid0099",
    productName:"Mouse",
    saleDate:"1-Mar-2023",
    salePrice:600,
    saleQuantity:900,
    purchaseDate:"10-Mar-2023",
    purchasePrice:450,
    purchaseQuantity:800
}
])


db.Sales.find().pretty()
db.Sales.find({salePrice:{$lte:1500}},{_id:0,productName:1}).pretty()
db.Sales.update({productName:"TV"},{$set:{productName:"Television"}}).pretty()
db.Sales.updateMany({$or:[{productId:"Pid0031"},{productId:"Pid0066"}]},{$set:{productsize:["small","middle","big"]}})
db.Sales.aggregate({$group:{_id:"$productId",maximum:{$max:"$salePrice"}}})
db.Sales.find({$and:[{saleQuantity:{$gt:100}},{saleQuantity:{$lt:1500}}]},{_id:0,productName:1,saleDate:1}).pretty()
db.Sales.updateMany({$or:[{productId:"Pid0031"},{productId:"Pid0099"},{productId:"Pid0066"}]},{$set:{Descriptor:"coumter product is healthy"}})
db.Sales.find({$or:[{Descriptor:{$regex:/healthy/,$options:'i'}},{Descriptor:{$regex:/fruit/,$options:'i'}}]}).pretty()
db.Sales.createIndex({productId:1},{name:"dublicate id!",unique:true})
db.Sales.update({productID:"Pid0099"},{$unset:{saleDate:""}})
db.Sales.remove({productID:"Pid0099"})


db.hotel.insert({HotelId:"HOT0025",
HotelName:"OYO",
HotelType:["3 Star","4 Star"],
TotNoOfRooms:20,
CityName:"Mumbai",
Ratings:4.8,
Owners:["Akhil","jenil","jay"],
Bookings:
[
    {Bookings:1,
    BookingDate:Date(),
    RoomType:["Double","twin"],
    CustomerName:"Mr.jaymin",
    NoOfRoomsBooked:2,
    price:5599,
    Discount:100},

    {Bookings:2,
    BookingDate:Date(),
    RoomType:["Double","twin"],
    CustomerName:"Miss.Zoya",
    NoOfRoomsBooked:1,
    price:9999,
    Discount:500},

    {Bookings:3,
    BookingDate:Date(),
    RoomType:["Double","twin"],
    CustomerName:"Mr.samir",
    NoOfRoomsBooked:2,
    price:6999,
    Discount:999}
]})
db.hotel.insert({HotelId:"HOT3951",
HotelName:"Jugnu",
HotelType:["4 Star","5 Star"],
TotNoOfRooms:30,
CityName:"Surat",
Ratings:4.5,
Owners:["Samir","jenil","ravi"],
Bookings:
[
    {Bookings:1,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Akhil",
    NoOfRoomsBooked:1,
    price:2000,
    Discount:1500},

    {Bookings:2,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Hit",
    NoOfRoomsBooked:1,
    price:8999,
    Discount:999},
    
    {Bookings:3,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Monil",
    NoOfRoomsBooked:5,
    price:21999,
    Discount:1999}
]})
db.hotel.insert({HotelId:"HOT0395",
HotelName:"LJ.hotel",
HotelType:["2 Star","3 Star"],
TotNoOfRooms:40,
CityName:"Ahemdabad",
Ratings:4.0,
Owners:["jinal","alpha","urja"],
Bookings:
[
    {Bookings:1,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.JayCR",
    NoOfRoomsBooked:2,
    price:20000,
    Discount:2500},

    {Bookings:2,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Hit",
    NoOfRoomsBooked:1,
    price:8999,
    Discount:999},
    
    {Bookings:3,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Aalok",
    NoOfRoomsBooked:5,
    price:91999,
    Discount:20999}
]})
db.hotel.insert({HotelId:"HOT2659",
HotelName:"Monik",
HotelType:["4 Star","5 Star"],
TotNoOfRooms:50,
CityName:"Baroda",
Ratings:3.2,
Owners:["Samir","jenil","Akhil","Hit","Monil","jay Modi"],
Bookings:
[
    {Bookings:1,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.jenil Modi",
    NoOfRoomsBooked:3,
    price:35000,
    Discount:1000},

    {Bookings:2,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Nirmal",
    NoOfRoomsBooked:2,
    price:8999,
    Discount:999},
    
    {Bookings:3,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Monil",
    NoOfRoomsBooked:5,
    price:81999,
    Discount:11999}
]})
db.hotel.insert({HotelId:"HOT0355",
HotelName:"Suraj",
HotelType:["3 Star","5 Star"],
TotNoOfRooms:60,
CityName:"Surat",
Ratings:4.0,
Owners:["Jay Modi","Zoya","jenil Modi","Samir"],
Bookings:
[
    {Bookings:1,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.Akhil",
    NoOfRoomsBooked:1,
    price:2000,
    Discount:1500},

    {Bookings:2,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mis.Niyati",
    NoOfRoomsBooked:1,
    price:9999,
    Discount:1999},
    
    {Bookings:3,
    BookingDate:Date(),
    RoomType:["Double","Singal"],
    CustomerName:"Mr.jenil",
    NoOfRoomsBooked:10,
    price:145999,
    Discount:15999}
]})
db.hotel.find().pretty()
db.hotel.find({TotNoOfRooms:{$gt:35}},{_id:0,HotelName:1})
db.hotel.find({$or:[{HotelId:"HOT0395"},{HotelId:"HOT2659"}]},{_id:0,HotelName:1,CityName:1})
db.hotel.find({$and:[{TotNoOfRooms :{$gt:30}},{TotNoOfRooms :{$lt:45}}]},{_id:0,HotelName:1,CityName:1})
db.hotel.update({HotelId:"HOT3951"},{$push:{HotelType:["6 Star","7 Star"]}})
db.hotel.updateMany({$or:[{HotelId:"HOT0395"},{HotelId:"HOT0355"},{HotelId:"HOT3951"}]},{$set:{History:"this hotel is Strat in 1967"}})
db.hotel.find({HotelType:{$ne:"4 Star"}})
db.hotel.find({HotelName:{$regex:/^s/,$options:'i'}},{_id:0,HotelName:1,DateOfRegistration:1})
db.hotel.find({},{_id:0,HotelName:1,Ratings:1}).sort({HotelName:-1})

db.hotel.aggregate({$project:{_id:0,HotelName:1,Ratings:1,count:{$size:"$Owners"}}},{$out:"hotel1"})
db.hotel1.find({count:{$gte:3}}).pretty

db.hotel.update({HotelId:"HOT0395"},{$addToSet:{Owners:"Mr. Mathur"}})
db.hotel.createIndex({HotelId:1},{name:"dublicate id!",unique:true})

var map=function(){emit(this.HotelId,this.Ratings)}
var reduce=function(key,valuse){return Array.avg(valuse);}
db.hotel.mapReduce(map,reduce,{out:"Total_Ratings",query:{HotelType:{$regex:/5 Star/,$options:'i'}}})
db.Total_Ratings.find().pretty()


//map,reduce = 
// var me not compal sari right map,reduce for ani name

db.Customers.insert({CustID:"C123", AccBal:500, AccType:"S"})
db.Customers.insert({CustID:"C123", AccBal:900, AccType:"S"})
db.Customers.insert({CustID:"C123", AccBal:1500, AccType:"C"})
db.Customers.insert({CustID:"C123", AccBal:1200, AccType:"S"})
db.Customers.insert({CustID:"C111", AccBal:1200, AccType:"S"})
db.Customers.insert({CustID:"C111", AccBal:1000, AccType:"C"})
db.Customers.insert({CustID:"C111", AccBal:5000, AccType:"S"})
db.Customers.insert({CustID:"C112", AccBal:5000, AccType:"S"})
db.Customers.insert({CustID:"C112", AccBal:200, AccType:"S"})


var map=function(){emit(this.CustID,this.AccBal);}
var reduce=function(key,valuse){return Array.sum(valuse);}
db.Customers.mapReduce(map,reduce,{out:"Customers_Total"})
db.Customers_Total.find().pretty()

db.Customers.mapReduce(map,reduce,{out:"Customers_Total",query:{AccType:"S"}})
db.Customers_Total.find().pretty()


//use Blogs

db.createCollection("Blogs")
db.Blogs.insertMany([
{_id:1,userId:"u101",post_text:"Python MapReduce", status:"Active"},
{_id:2,userId:"u101",post_text:"Python Socket", status:"Active"},
{_id:3,userId:"u102",post_text:"Java Script", status:"Active"},
{_id:4,userId:"u102",post_text:"Css&bootstrap", status:"Active"},
{_id:5,userId:"u101",post_text:"Python ADT", status:"Passive"},
])

var map=function(){emit(this.userId,1)}
var reduce=function(userId,count){return Array.sum(count);}
db.Blogs.mapReduce(map,reduce,{out:"Total_post"})
db.Total_post.find().pretty()

db.Blogs.mapReduce(map,reduce,{out:"Total_post",query:{status:"Active"}})
db.Total_post.find().pretty()

db.Restaurants.remove({})
db.Restaurants.insert({
"_id" : 1,
 "RestaurantId" : 1, 
 "RestaurantName" : "Mirch Masala",
 "Grades" : [ "A", "A+" ],
 "Cuisine" : "Kitchen King", 
 "Address" : [ { "BuildingName" : "Himalaya",
				"Street" : "Vastrapur",
				"Area" : "Vastrapur Lake", 
				"City" : "Ahmedabad",
				"ZipCode" : 380052 } ],
  "DateofEstablishment" : "1-Jan-2008", 
  "Score" : 90, 
  "Rating" : 4.9 
})

db.Restaurants.insertMany([
{ "RestaurantId" : 2, "RestaurantName" : "Jassi De Parathe", "Grades" : [ "A" ], "Cuisine" : "Kitchen Masala", "Address" : [ { "BuildingName" : "Sarkhej", "Street" : "Maninagar", "Area" : "Kankaria Lake", "City" : "Ahmedabad", "ZipCode" : 380052 } ], "DateofEstablishment" : "1-Jan-2008", "Score" : 40, "Rating" : 3.9 },
{ "RestaurantId" : 4, "RestaurantName" : "Nini's Kitchen", "Grades" : [ "A" ], "Cuisine" : "Multi Cuisine", "Address" : [ { "BuildingName" : "Saket-II", "Street" : "Abc", "Area" : "Science City", "City" : "Baroda", "ZipCode" : 380051 } ], "DateofEstablishment" : "1-Jan-2008", "Score" : 40, "Rating" : 3.9 },
{ "RestaurantId" : 3, "RestaurantName" : "Barbeque Nation", "Grades" : [ "C" ], "Cuisine" : "Multi Cuisine", "Address" : [ { "BuildingName" : "Memnagar", "Street" : "Maninagar", "Area" : "Iskon", "City" : "Surat", "ZipCode" : 380052 } ], "DateofEstablishment" : "1-Jan-2008", "Score" : 80, "Rating" : 3.9 },
{ "RestaurantId" : 5, "RestaurantName" : "Nini's Kitchen", "Grades" : [ "A" ], "Cuisine" : "Multi Cuisine", "Address" : [ { "BuildingName" : "Saket-II", "Street" : "Abc", "Area" : "Science City", "City" : "Baroda", "ZipCode" : 380051 } ], "DateofEstablishment" : "1-Jan-2024", "Score" : 40, "Rating" : 3.9 },
{ "RestaurantId" : 6, "RestaurantName" : "Jassi De Parathe", "Grades" : [ "A" ], "Cuisine" : "Kitchen Masala", "Address" : [ { "BuildingName" : "Sarkhej", "Street" : "Maninagar", "Area" : "Kankaria Lake", "City" : "Ahmedabad", "ZipCode" : 380050 } ], "DateofEstablishment" : "1-Jan-2010", "Score" : 30, "Rating" : 3.9 },
{ "RestaurantId" : 7, "RestaurantName" : "Nini's Kitchen", "Grades" : [ "A" ], "Cuisine" : "Multi Cuisine", "Address" : [ { "BuildingName" : "Saket-II", "Street" : "Abc", "Area" : "Science City", "City" : "Baroda", "ZipCode" : 380048 } ], "DateofEstablishment" : "1-Jan-2008", "Score" : 80, "Rating" : 4.9 }
])

db.Restaurants.find().pretty()

var map=function(){emit(this.RestaurantName,this.Rating)}
var reduce=function(key,valuse){return Array.avg(valuse);}
db.Restaurants.mapReduce(map,reduce,{out:"Total_Restaurants"})
db.Total_Restaurants.find().pretty()


db.Restaurants.mapReduce(map,reduce,{out:"Total_Restaurants",query:{Score:{$lt:50}}})
db.Total_Restaurants.find().pretty()



db.Orders.insert(
    { _id:1,
      Cust_id:"Aishwarya",  
      Ord_date: new Date("2021-06-23"),
      Price:50,
      Items:[{ sku:"pen",qty:10,price:2.00},
             { sku:"pencil",qty:6,price:10.00},
             { sku:"eraser",qty:12,price:3.00}],
      Status:"A"
     }
     )      
db.Orders.insert(
    { _id:2,
      Cust_id:"Abhishek",  
      Ord_date: new Date("2021-04-25"),
      Price:50,
      Items:[{ sku:"compass",qty:8,price:2.00},
             { sku:"scale",qty:5,price:10.00},
         { sku:"pen",qty:4,price:5.00}],
      Status:"A"})
db.Orders.insert(
    { _id:3,
      Cust_id:"Abhishek",  
      Ord_date: new Date("2021-04-25"),
      Price:50,
      Items:[{ sku:"pen",qty:2,price:2.00},
             { sku:"pencil",qty:15,price:10.00}],
      Status:"A"})
db.Orders.insert(
    { _id:4,
    Cust_id:"Aishwarya",  
    Ord_date: new Date("2021-04-25"),
    Price:50,
    Items:[{ sku:"pen",qty:2,price:2.00},
    { sku:"sharpner",qty:15,price:10.00},
    { sku:"scale",qty:15,price:10.00}],
    Status:"A"})

db.Orders.find().pretty()

var map=function(){emit(this.Cust_id,this.Price)}
var reduce=function(key,valuse){return Array.sum(valuse);}
db.Orders.mapReduce(map,reduce,{out:"Total_Price",query:{Status:"A"}})
db.Total_Price.find().pretty()

var map=function(){
    for(var i=0;i<this.Items.length;i++){
        var key=this.Items[i].sku;
        var valus={const:1,qty:this.Items[i].qty}
        emit(key,valus);
    }
}
var reduce=function(key,valus){
    use={count:0,qty:0};
    for(var i=0;i<valus.length;i++){
        use.count=use.count+valus[i].const;
        use.qty=use.qty+valus[i].qty;
    }
    return use;
}
db.Orders.mapReduce(map,reduce,{out:"Total_Qty"})
db.Total_Qty.find().pretty()



var map=function(){
    for(var i=0;i<this.Items.length;i++){
        var key=this.Items[i].sku;
        var valus={const:1,qty:this.Items[i].qty,price:this.Items[i].price}
        emit(key,valus);
    }
}
var reduce=function(key,valus){
    use={count:0,qty:0,price:0};
    for(var i=0;i<valus.length;i++){
        use.count=use.count+valus[i].const;
        use.qty=use.qty+valus[i].qty;
        use.price+=valus[i].qty*valus[i].price;
    }
    return use;
}
db.Orders.mapReduce(map,reduce,{out:"Total_Qty"})
db.Total_Qty.find()

db.book.insertMany([
    {Name:"C",Auther:"Samir",Pages:350,Quantity:50,Price:250},
    {Name:"C++",Auther:"jenil",Pages:150,Quantity:200,Price:150},
    {Name:"Java",Auther:"ravi",Pages:250,Quantity:100,Price:80},
    {Name:"RDBMS",Auther:"jay",Pages:100,Quantity:25,Price:120},
    {Name:"PHP",Auther:"Samir",Pages:500,Quantity:320,Price:200},
    {Name:"Python",Auther:"jymin",Pages:300,Quantity:150,Price:300}
])

book1 = {Name:"C",Auther:"Samir",Pages:350,Quantity:50,Price:250}
db.book.save(book1)
book1 = {Name:"C++",Auther:"jenil",Pages:150,Quantity:200,Price:150}
db.book.save(book1)
book1 = {Name:"Java",Auther:"ravi",Pages:250,Quantity:100,Price:80}
db.book.save(book1)
book1 = {Name:"RDBMS",Auther:"jay",Pages:100,Quantity:25,Price:120}
db.book.save(book1)
book1 = {Name:"PHP",Auther:"Samir",Pages:500,Quantity:320,Price:200}
db.book.save(book1)
book1 = {Name:"Python",Auther:"jymin",Pages:300,Quantity:150,Price:300}
db.book.save(book1)

var map=function(){
    var category;
    if(this.Pages>=300){
        category = "Big Book";
    }else{
        category = "Small Book";
    }
    emit(category,{name:this.Name})
}
var reduce=function(key,valus){
    var sum = 0;
    valus.forEach(function(doc){
        sum += 1;
    });
    return {book:sum};
}
db.book.mapReduce(map,reduce,{out:"Total_results"})
db.Total_results.find()


var map=function(){
    var category;
    if(this.Pages>=300){
        category = "Big Book";
    }else{
        category = "Small Book";
    }
    emit(category,{name:this.Name})
}
var reduce=function(key,valus){
    var Book = 0;
    for(var i=0;i<valus.length;i++){
        Book += 1;
    }
    return {Book}
}
db.book.mapReduce(map,reduce,{out:"Total_results"})
db.Total_results.find()




// hdfs dfs -mkdir /LJ
// hdfs dfs -copyFromLocal d:\file name /table name
// hdfs dfs -cat /LJ/demo.txt
// hdfs dfs -appedToFile d:\demo1.txt /abc/demo.txt

// Upload/Download Files
// hdfs dfs -put d:\demo1.txt /tmp
// hdfs dfs -put -f d:\demo1.txt /tmp
// hdfs dfs -get /abc/demo.txt d:\demo1
// hdfs dfs -copyToLocal /abc/demo.txt d:\
// hdfs dfs -moveFromLocal /abc/demo.txt d:\

// hdfs dfs -rm -r /abc
// hdfs dfs -rm -r /LJ
// hdfs dfs -rm -r /student/student1.txt
// hdfs dfs -rm -R /hadoop
// hdfs dfs -rmr /hadoop

// hdfs dfs -cp /student/student.txt /LJ

// hdfs dfs -mkdir /emp
// hdfs dfs -copyFromLocal d:\emp_data1.txt /emp
// hdfs dfs -mkdir /product
// hdfs dfs -copyFromLocal d:\product1.txt /product
// hdfs dfs -mkdir /student
// hdfs dfs -copyFromLocal d:\student1.txt /student
// hdfs dfs -mkdir /movie
// hdfs dfs -copyFromLocal d:\Book1.csv /movie
// hdfs dfs -mkdir /food
// hdfs dfs -copyFromLocal d:\Food.csv /food




// pig
/*
emp = LOAD'hdfs://localhost:9000/emp/emp_data1.txt' USING PigStorage(',')as(id:chararray,fname:chararray,post:chararray,sal:int,age:int,city:chararray);
dump emp;

--------
product = LOAD'hdfs://localhost:9000/product/product1.txt'USING PigStorage(',')as(id:chararray,product:chararray,qunty:int,price:float,manufachar:chararray);
dump product;

--------
student = LOAD'hdfs://localhost:9000/student/student1.txt' USING PigStorage(',')as(id:chararray,fname:chararray,lname:chararray,number:chararray,city:chararray);
student = LOAD'hdfs://localhost:9000/student/student1.txt' USING PigStorage(',')as(id:chararray,fname:chararray,rollnumber:int,avg:float);
dump student;

1 Filter all the students who are having GPA>5
ans1 = FILTER student BY (float)avg>7.5;
dump ans1;

b. Display the name of all Students in Uppercase.
ans2 = FOREACH student GENERATE (id,fname),UPPER(fname);
dump ans2;

c. Group tuples of students based on their GPA.
ans3 = GROUP student BY avg;
dump ans3;

d. Remove duplicates tuple of Student list.
ans4 = DISTINCT Student ;
dump ans4;

e. Display first three tuples from student relation.
ans5 = LIMIT student 3;
dump ans5;

f. Display the names of students in ascending order.
ans6 = ORDER student BY fname ASC;
dump ans6;

E. Display last three tuples from "student"relation
ans7 = ORDER student BY id DESC;
dump ans7;
ans8 = LIMIT ans7 3;
dump ans8;

---------
movie = LOAD'hdfs://localhost:9000/movie/Book1.csv' USING PigStorage(',')as(id:int,mname:chararray,year:int,rating:float,durasun:long);
dump movie;
illustrate movie;

store movie into 'my_movie';
cat my_movie;

4. List the movies that were released between 1950 and 1960.
m1 = FILTER movie BY year>2000 and year<2020;
dump m1;

5. List the movies that start with the Alphabet D.
m2 = FILTER movie BY mname matches 'p.*';
dump m2;

6. List the movies that have duration greater than 2 hours.
m3 = FILTER movie BY durasun>5000;
dump m3;

7. List the movie names its duration in minutes.
m4 = FOREACH movie GENERATE mname,durasun,(double)(durasun/3000),(durasun/5000);
dump m4;

8. List the years and the number of movies released each year
m5 = GROUP movie BY year;
dump m5;
m6 = FOREACH m5 GENERATE group,COUNT(movie);
dump m6;

9. List all the movies in the ascending order of year
m7 = ORDER movie BY mname ASC;
dump m7;


10. List all the movies in the descending order of year
m8 = ORDER movie BY mname DESC;
dump m8;


11. Display Top 5 movies
m9 = ORDER movie BY rating DESC;
dump m9;
ans9 = LIMIT m9 5;
dump ans9;

m6 = FOREACH movie GENERATE mname;

-----
food = LOAD'hdfs://localhost:9000/food/Food.csv' USING PigStorage(',')as(id:int,state:chararray,fname:chararray,price:int);

-----
f1 = FILTER food BY fname matches '*.Panner.*';
dump f1;

*/