module.exports = (req, res, next) => {
    res.status(404).json({ noFoundResource: req.url, message: "Recurso no encontrado!" })
}