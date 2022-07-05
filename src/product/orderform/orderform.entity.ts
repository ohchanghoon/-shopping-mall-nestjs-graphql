import { DefaultEntity } from 'src/common/default/default.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { ProductEntity } from '../product.entity';
import { OrderFormStateEnum } from './orderform.enum';

@Entity()
export class OrderFormEntity extends DefaultEntity {
  @ManyToOne((_) => UserEntity, (user) => user.id)
  user: UserEntity;

  @ManyToOne((_) => ProductEntity, (product) => product.id)
  product: ProductEntity;

  // @ManyToOne((_) => AgencyEntity, (agency) => agency.id)
  // agency: AgencyEntity;

  @Column({ default: 1 })
  orderCount?: number;

  @Column({ default: 0 })
  price: number;

  @Column({
    type: 'enum',
    enum: OrderFormStateEnum,
    default: OrderFormStateEnum.APPLY,
  })
  state: OrderFormStateEnum;
}
