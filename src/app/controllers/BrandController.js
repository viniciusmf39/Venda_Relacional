import Brand from '../models/brand';

class BrandController {
  async index(req, res) {
    try {
      const brand = await Brand.findAll();

      return res.json({ brand });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const brand = await Brand.findOne({ where: { uid } });

      return res.json({ brand });
    } catch (error) {
      return res.json(error);
    }
  }

  async store(req, res) {
    try {
      const brand = await Brand.create(req.body);

      return res.json({ brand });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;

      const [brand] = await Brand.update(req.body, { where: { uid } });

      if (!brand) {
        throw Error('Marca não foi encontrada');
      }
      return res.json({ brand });
    } catch (error) {
      return res.json(error);
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await Brand.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('Marca não encontrada');
      }

      return res.json({ result: 'Marca deletada' });
    } catch (error) {
      const response = {
        message: 'Não foi possível excluir marca',
        error,
      };
      return res.json(response);
    }
  }
}
export default new BrandController();
