// import { use } from "react"
import user from "../models/user.model.js"  //import you schema creation file
export const getUser = async (req, res) => {

    try {
        const users = await user.find()
        res.json(users)
    }
    catch (error) {
        res.status(400).json({ msg: error })
    }
   //existing user
}

export const postUser = async (req, res) => {
    // console.log(req.body)
    // return res.json(req.body)

    const newuser = new user
        ({
            name: req.body.name,
            phno: req.body.phno
        })
    try {
        const user = await newuser.save()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ user: error })
    }//post the new user
}

export const UserDetail = async (req, res) => {
    try {
        const newuser = await user.findById(req.params.id)
        if (!newuser) {
            return res.status(404).json({ msg: "user not in db" })
        }
        else {
            res.json(newuser)
        }
    }
    catch (error) {
        return res.status(500).json({ msg: "user not avail" })
    }  //find and get the user detail
}



export const putUser = async (req, res) => {
    // if (req.body.name != null) {
    //     res.user.name = req.body.name
    // }
    // if (req.body.phno != null) {
    //     res.user.phno = req.body.phno
    // }
    try {
        const newuser = await user.findOneAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                phno: req.body.phno
            },
            {
                new:true,
            }
            // { new: true }
        );
        res.status(200).json(newuser);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }  //update the existing user
};

export const deleteUser = async (req, res) => {
    const userId = req.params.id
    try {
       await user.deleteOne({_id:userId})
       res.json({message:"user deleted!"})
    }
    catch(error)
    {
        res.status(400).json({message:error})
    }
}  //delete the user