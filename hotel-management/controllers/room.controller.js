const RoomService = require('../services/room.service')

class RoomController {
    async createRoom(req, res){
        const reqBody = req.body

        // Check if book exists
        const existingRoom = await RoomService.get({
            name: reqBody.name
        })

        console.log(existingBook)

        if(existingRoom) res.status(403).json({
            success: false,
            message: "Book already exist"
        })

        const newRoom = await RoomService.create(reqBody) 

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: newRoom
        })
    }

    async updateRoom(req, res) {
        const roomID = req.params.id
        const updateData = reqBody

        // Checking if existed
        const existingRoom = await RoomService.get({
            _id: roomID
        })

        if(!existingRoom) res.status(403).json({
            success: false,
            message: "Book doesn't exist"
        })

        // Check if updated name exists
        if(updateData.name) {
            const existingWithTheUpdateName = await RoomService.fetchAll({
                name: updateData.name
            })
            if (existingWithTheUpdateName._id.toString() != existingRoom._id.toString()){
                res.status(403).json({
                    success: false,
                    message: 'Book with update name already exists'
                })
            }
        }

        const updateData = await RoomService.update(roomID, updateData)
        
        res.status(200).json({
            success: true,
            message: 'Body updated Successfully',
            data: updateData
        })
    }
}