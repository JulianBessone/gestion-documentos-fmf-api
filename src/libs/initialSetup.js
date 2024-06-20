import Role from "../models/Role"

export const createRoles = async () =>{
    
    try {
        const count = await Role.estimatedDocumentCount()

        if(count > 0) return console.log('***** Roles ya creados! ****');
    
        const values = await Promise.all([
            new Role({name: 'user'}).save(),
            new Role({name: 'moderador'}).save(),
            new Role({name: 'admin'}).save()
        ])
        
        console.log(values);
    } catch (error) {
        console.log(error)
    }
}
