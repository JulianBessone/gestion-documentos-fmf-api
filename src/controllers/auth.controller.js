import User from '../models/User'
import jwt from 'jsonwebtoken'
import configuration from '../config'
import Role from '../models/Role';
import Config from '../models/Config';

export const signUp = async (req, res) =>{
    const {username, email, roles, name, lastName, password, config} = req.body;
    
    const newUser = new User({
        username,
        email,
        name,
        lastName,
        password: await User.encryptPassword(password),
    })

    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id]
    }
    if(config){
        const foundConfig = await Config.findOne({name: config})
        newUser.config = foundConfig ?foundConfig._id : null;
    }else{
        const newConfig = new Config({
            name: "Nueva configuración",
            fontSize: "Normal",
          });
          const savedConfig = await newConfig.save();
          newUser.config = savedConfig._id;
    }
    const savedUser = await newUser.save()
    console.log(savedUser)

    const token = jwt.sign({id: savedUser._id}, configuration.SECRET, {
        expiresIn: 86400 //24hrs
    })
    
    res.status(200).json({token})
}
// Assuming you already have the necessary imports for User model, bcrypt for password encryption, and jwt for token generation.

export const changePassword = async (req, res) => {
    const { email, actualPassword, newPassword } = req.body;
  
    try {
      // Find the user by their email
      const user = await User.findOne({ email });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado." });
      }
  
      // Check if the old password provided matches the current password in the database
      const isPasswordValid = await User.comparePassword(actualPassword, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
  
      // Encrypt the new password and update it in the database
      user.password = await User.encryptPassword(newPassword);
      await user.save();
  
      // You can optionally log the user in again here and generate a new token if needed.
      // For example, you can call the login function and generate a new token.
  
      // Return a success response
      res.status(200).json({ message: "Password Cambiada Exitosamente" });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ message: "Internal server error." });
    }
};
  


export const signIn = async (req, res) =>{
    
    const userFound = await User.findOne({email: req.body.email}).populate("roles").populate('config')

    if(!userFound) return(res.status(400).json({message: "User not found"}));

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'})

    const token = jwt.sign({id: userFound._id}, configuration.SECRET, {
        expiresIn: 86400
    })

    res.status(200).json({message: token, roles: userFound.roles, username: userFound.username, name: userFound.name, lastName: userFound.lastName, email: userFound.email, config: userFound.config })
}