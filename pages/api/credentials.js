
export default (req, res) => {
    if (req.method !== 'POST') {
        return
    }
    res.statusCode = 200
    res.json({ name: 'John Doe' })
}
