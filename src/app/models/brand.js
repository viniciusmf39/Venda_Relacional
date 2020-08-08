import Sequelize , {Model} from 'sequelize' ;

class Product extends Model {
  static init (sequelize){
    super.init({
      uid:{
        allowNull:false ,
        primaryKey : true ,
        type : Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
      },
      name:{
        allowNull:false ,
        type: Sequelize.STRING,
      },
    },{
      sequelize
    });
    return this;
  }
}

export default Product
