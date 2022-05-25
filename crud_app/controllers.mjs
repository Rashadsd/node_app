import Post from './post.mjs';

class PostControllers {
    async create(req, res) {
        try {
            console.log(req.body)
            const { author, title, content, picture } = req.body;
            const result = await Post.create({ author, title, content, picture })
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const results = await Post.find()
            res.status(200).json(results)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'Id not find !!' })
            }
            const resultOne = await Post.findById(id)
            return res.status(200).json(resultOne)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async change(req, res) {
        try {
            const put = req.body
            if (!put._id) {
                res.status(400).json({ message: 'Id not find !!' })
            }
            const updatePost = await Post.findByIdAndUpdate(put._id, put, { new: true })
            return res.status(200).json(updatePost)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

// function Controllers() {
// }

// Controllers.prototype.post = async function (author, title, content, picture) {
//     try {
//         const result = await Post.create({ author, title, content, picture })
//         return {
//             status: 200,
//             data: result,
//             error: null,
//         }
//     } catch (error) {
//         return {
//             status: 500,
//             data: null,
//             error: error.message,
//         }
//     }
// }


export default new PostControllers();
