import SpacesRepository from "../repositories/spacesRepository.js";

const SpacesController = {
    async getSpaces(req, res) {
        const spaces = await SpacesRepository.getSpaces();
        res.send(spaces);
    },
    async getSpaceById(req, res) {
        const id = req.params.id;
        const space = await SpacesRepository.getSpaceById(id);
        res.send(space);
    },
    async createSpace(req, res) {
        const space = req.body;
        const newSpace = await SpacesRepository.createSpace(space);
        res.send(newSpace);
    },
    async updateSpace(req, res) {
        const id = req.params.id;
        const space = req.body;
        const updatedSpace = await SpacesRepository.updateSpace(id, space);
        res.send(updatedSpace);
    },
    async deleteSpace(req, res) {
        const id = req.params.id;
        await SpacesRepository.deleteSpace(id);
        res.sendStatus(204);
    },
    async markEntry(req, res) {
        const id = req.params.id;
        const updatedSpace = await SpacesRepository.markEntry(id);
        res.send(updatedSpace);
    },
    async getPriceOfExit(req, res) {
        const id = req.params.id;
        const price = await SpacesRepository.getPriceOfExit(id);
        res.send({ price });
    },
    async markExit(req, res) {
        const id = req.params.id;
        const updatedSpace = await SpacesRepository.exitSpace(id);
        res.send(updatedSpace);
    }
}

export default SpacesController;