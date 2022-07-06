import { DefaultEntity } from 'src/common/default/default.entity';
import { OrderFormEntity } from 'src/product/orderform/orderform.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { DeliveryStateEnum } from './delivery.enum';

@Entity()
export class DeliveryEntity extends DefaultEntity {
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  postCode: string;

  @Column()
  address: string;

  @Column()
  productPrice: string;

  @Column()
  deliveryState: DeliveryStateEnum;

  @Column()
  deliveryCompany: string;

  @Column({ default: 'none' })
  refundState: string;

  @OneToOne((_) => OrderFormEntity, (orderForm) => orderForm.id)
  orderFormId: OrderFormEntity;
}
