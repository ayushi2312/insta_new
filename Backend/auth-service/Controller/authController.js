const db = require("../../shared/config/db")

exports.signup = async (req,resp) => {
    try{
        const {username, email, password} = req.body;
        const [result] = await db.query(
            "Insert into users (username, email, password) VALUES (?,?,?)",[username, email, password]
        )

        resp.json({
            message:"User created successfully",
            userId: result.insertId
        })
    } catch (error) {
        console.log(error);
        resp.status(500).json({error: "Database error"})
        
    }
}