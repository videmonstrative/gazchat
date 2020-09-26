import { v4 as uuidv4 } from 'uuid';
var faker = require('faker');

export default (req, res) => {
    const items = []
    for (let i = 1; i<=10; i++) {
        items.push({
            uuid: uuidv4(),
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            last_message: faker.lorem.words(),
            last_time: "10:20 am",
            unread_count: 0,
            is_typing: faker.random.boolean()
        })
    }
    res.statusCode = 200
    res.json({items: items})
}
