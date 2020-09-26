import { v4 as uuidv4 } from 'uuid';
var faker = require('faker');

export default (req, res) => {
    const {
        query: { uuid },
    } = req
    res.statusCode = 200
    res.json({items: uuid})
}
