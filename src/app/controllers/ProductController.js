import Product from '../models/Product';
import Brand from '../models/Brand';

class ProductController {
  async index(req, res) {
    try {
      const product = await Product.findAll();

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const product = await Product.findByPk(uid, {
        attributes: [uid, 'name', 'quatity'],
        include: {
          model: Brand,
          as: 'brand',
        },
      });

      return res.json({ product });
    } catch (error) {
      return res.json(error);
    }
  }

  async store(req, res) {
    try {
      const product = await Product.create(req.body);

      return res.json({ product });
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

      const [product] = await Product.update(req.body, { where: { uid } });

      if (!product) {
        throw Error('Produto não foi encontrado');
      }
      return res.json({ product });
    } catch (error) {
      return res.json(error);
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await Product.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('Produto não encontrada');
      }

      return res.json({ result: 'Produto deletado' });
    } catch (error) {
      const response = {
        message: 'Não foi possível excluir Produto',
        error,
      };
      return res.json(response);
    }
  }
}

export default new ProductController();
