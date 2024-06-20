import mongoose from "mongoose";

mongoose.connect('mongodb+srv://fmfdocumentacion:jEpoRTXrERP0KnOg@cluster0.yulaptk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(db => console.log("db is connected"))
.catch(error => console.log(error))


/*  PARA CREAR MESAS PORQUE SI LO PASO POR APP NO SE CONECTA A LA DB NOSE PQ :(*/
/*
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    try {
        const count = await Mesa.estimatedDocumentCount({},{ maxTimeMS: 30000 })

        if(count > 0)return console.log('***** Mesas ya creadas! *****');
        const values = await Promise.all([
            new Mesa({
                "nombre": "Mesa 1",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 0,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 2",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 1,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 3",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 2,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 4",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 3,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 5",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 4,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 6",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 5,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 7",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 6,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 8",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 7,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 9",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 8,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 10",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 9,
                "y": 0,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 11",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 0,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 12",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 1,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 13",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 2,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 14",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 3,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 15",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 4,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 16",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 5,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 17",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 6,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 18",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 7,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 19",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 8,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
            new Mesa({
                "nombre": "Mesa 20",
                "ubicacion": "Salón principal",
                "comensales": 4,
                "status": "Libre",
<<<<<<< HEAD
                "paymentStatus": "Pendiente de Pago",
                "x": 9,
                "y": 1,
=======
                "paymentStatus": "Pendiente de Pago"
>>>>>>> 2ce2c6bed5848cdcb1303589acdae4325bea5d85
              }).save(),
        ])

        console.log(values)
        

    } catch (error) {
        console.log(`Hay un error ${error}`)
    }
});*/