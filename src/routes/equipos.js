const express = require('express');
const router = express.Router();
const equiposData = require('../data/equipos.json');

router.get('/', (req, res) => {
  res.json(equiposData);
});

router.get('/:id', (req, res) => {
  const equipoId = parseInt(req.params.id);
  const equipo = equiposData.find(e => e.id === equipoId);

  if (equipo) {
    res.json(equipo);
  } else {
    res.status(404).json({ mensaje: 'Equipo no encontrado' });
  }
});

module.exports = router;
 
