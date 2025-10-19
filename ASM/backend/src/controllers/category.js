import Category from "../model/Category.js"
import { categoryValid } from "../validates/category.js"

export const getAll = async (req, res) => {
    try {
        const data = await Category.find({})
        if(!data || data.length === 0) {
            return res.status(404).json({
                message: "Khong tim thay danh muc nao"
            })
        } 
        return res.status(200).json({
            message: "Lay danh muc san pham thanh cong",
            datas: data
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
} 

export const getDetail = async (req, res) => {
    try {
        const data = await Category.findById(req.params.id).populate("products")
        if(!data) {
            return res.status(404).json({
                message: "Khong tim thay danh muc nao"
            })
        } 
        return res.status(200).json({
            message: "Lay danh muc san pham thanh cong",
            datas: data
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
} 

export const create = async (req, res) => {
    try {
        const {error} = categoryValid.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const data = await Category.create(req.body)
        if(!data) {
            return res.status(404).json({
                message: "Tao danh muc khong thanh cong"
            })
        } 
        return res.status(200).json({
            message: "Tao danh muc thanh cong",
            datas: data
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
} 

export const update = async (req, res) => {
    try {
        const {error} = categoryValid.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const data = await Category.findByIdAndUpdate(req.prams.id,req.body, {new:true})
        if(!data) {
            return res.status(404).json({
                message: "Sua danh muc khong thanh cong"
            })
        } 
        return res.status(200).json({
            message: "Sua danh muc thanh cong",
            datas: data
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
} 

export const remove = async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete(req.prams.id)
        if(!data) {
            return res.status(404).json({
                message: "Xoa danh muc khong thanh cong"
            })
        } 
        return res.status(200).json({
            message: "Xoa danh muc thanh cong",
            datas: data
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
} 