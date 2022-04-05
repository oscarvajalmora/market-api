const isAdminMiddleware = (req, res, next) => {
    const isAdmin = req.body ? req.body.isAdmin : false;
    if(isAdmin) return next();
    return res.send({
        error: -1,
        descripcion: `ruta '${req.path}' método '${req.method}' no autorizado.`
    });
}

module.exports = isAdminMiddleware;