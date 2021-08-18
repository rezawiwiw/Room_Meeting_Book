const fs = require('fs')
const _ = require('lodash')

const models = require('../models')
const {Room,User,Department} = models

module.exports = {
    async RoomList (req, res){
        try{
            let room = await Room.findAll({
                attributes :{
                    exclude : ['createdAt', 'updatedAt']
                },
                include : [
                    {
                    attributes : {exclude : ['createdAt', 'updatedAt']},
                    model : User
                }
            ]
            })
            room = JSON.parse(JSON.stringify(room))
            room.map( r =>{
                delete r.user_id
            })
            room = _.orderBy(room, ['id'],['asc'])
            return res.status(200).send({
                status : true,
                message : 'Sukses mendapatkan semua Room List',
                data :{ room }
            })
        }catch(error){
            console.log(error)
            return res.status(500).send({
                status : false,
                message : error
            })
        }
    },
    async RoomBook (req,res){
        try{
            const{ id } = req.params
            const {user_id , status} = req.body
            const room = await Room.findOne({where : {id:id}})
            const user = await User.findOne({where : {id : user_id}})
            const find = _.find(room, {'user_id' : user_id})

            if(!room){
                return res.status(400).send({
                    status : false,
                    message : 'Data Ruangan Tidak Ditemukan',
                    data :{  }
                })    
            }
            console.log(find)
            
        if (find === undefined){
            await room.update({status, user_id})
            await user.update({RoomId : id})
        }

            if(user_id === find.user_id){
                return res.status(400).send({
                    status : false,
                    message : 'anda Tidak dapat melakukan Book karena Sudah book ruangan lain silakan untuk melakukan cancel ',
                    data :{  }
                })
            }
        
            return res.status(200).send({
                status : true,
                message : 'Sukses Booking Room',
                data :{  }
            })
        }catch(error){
            console.log(error)
            return res.status(500).send({
                status : false,
                message : error
            })
        }
    },
    async editBookRoom (req,res){
        try{
            const{id} = req.params
            const { status, user_id} = req.body
            const user = await User.findOne({where : {id : user_id}})
            const room = await Room.findOne({where : {id : id}})
            
            await user.update({RoomId : null})
            
            await room.update({status : status, user_id : null})

            return res.status(200).send({
                status : true,
                message : 'Sukses Edit Room',
                data :{  }
            })

        }catch(error){
            console.log(error)
            return res.status(500).send({
                status : false,
                message : error
            })
        }
    }
}