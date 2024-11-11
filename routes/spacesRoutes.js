import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  // pegar vagas
  res.send('GET /spaces');
})

router.post('/', (req, res) => {
    // adicionar vaga
    res.send('POST /spaces');
})

router.delete('/:id', (req, res) => {
    // deletar vagas
    res.send('DELETE /spaces/:id');
})

router.post('/:id/fill-in', (req, res) => {
  // preencher vaga
  res.send('POST /spaces/:id/fill-in');
})

router.post('/:id/fill-out', (req, res) => {
  // desocupar vaga
  res.send('POST /spaces/:id/fill-out');
})

export default router;