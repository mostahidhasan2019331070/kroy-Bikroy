const asyncHandler = require("express-async-handler");
const { Message } = require("../models/messageModel");
const sendMessage = asyncHandler(async (req,res)=>
{
    const { content ,chatId } = req.body;
    if(!content || ! chatId)
    {
        console.log("Invalid data passed into request")
        return res.json({
            message: "Invalid data passed into request"
        })
    }

    var newMessage = {
        sender: req.user._id,
        content:content,
        chat: chatId,
    };
    
    try{
        var message = await Message.Create(newMessage);
        message = await Message.populate("sender","name pic");
        message = await Message.populate("chat");
        message = await User.populate(message,{
            path : "chat-users",
            select : "name pic email",

        });
        await Chat.findByIdAndUpdate(req.body.chatId,{
            latestMessage: message,

        });
        res.json(message);
    }
    catch(error){
        console.log("Errrrro");
        res.status(400);
        throw new Error(error.message);

    }

});
module.exports={sendMessage};