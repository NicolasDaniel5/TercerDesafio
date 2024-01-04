const express = require('express')
const app = express()
const {promises: fs} = require('fs') //:fs cmabia el nombre de promise a fs
const { pid } = require('process')


app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.listen(8080,()=>{console.log('Escuchando en el puerto 8080')})

app.get('/',(req,res) => {res.send("hola mundo")})

app.get('/products' ,(req,res) => {
    const readData = async () => {
        try {
            const file = await fs.readFile('./src/products.json','utf-8')
            res.send(file)
        } catch (error) {
            console.log(error)
        }
    }
    readData()
    
})

app.get('/products/:pid', (req,res) => {
    const readData = async () => {
        try {
            const file = await fs.readFile('./src/products.json','utf-8')
            const products = JSON.parse(file)
            const product = products.find(prod => prod.id === Number(req.params))
            res.send(product)
        } catch (error) {
            console.log(error)
        }
    }
    readData()

    
})


/* 
fs.readFile('./src/products.json','utf-8')
.then(data => {
    const dat = data.id === Number(pid)
    console.log(dat)
})
.catch(e => console.log(e))

 */

const readData = async () => {
    try {
        const file = await fs.readFile('./src/products.json','utf-8')
        const products = JSON.parse(file)
        const product = products.find(prod => prod.id === Number(1))
        console.log(product)
    } catch (error) {
        console.log(error)
    }
}
readData()

