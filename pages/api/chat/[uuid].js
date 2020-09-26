import { v4 as uuidv4 } from 'uuid';
var faker = require('faker');

export default (req, res) => {
    const {
        query: { uuid },
    } = req

    const messages = []
    for (let i = 1; i<=10; i++) {
        messages.push({
            uuid: uuidv4(),
            time: "8 mins ago",
            content: faker.lorem.sentence(),
            from_owner: faker.random.boolean()
        })
    }

    res.statusCode = 200
    res.json({
        uuid: uuidv4(),
        name: "Chat name",
        is_online: true,
        messages: messages,
        from: {
            uuid: uuidv4(),
            avatar: faker.image.avatar()
        },
        to: {
            uuid: uuidv4(),
            avatar: faker.image.avatar(),
            name: faker.name.findName()
        }
    })
}
