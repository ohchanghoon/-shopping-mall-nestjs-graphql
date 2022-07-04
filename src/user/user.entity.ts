import { DefaultEntity } from 'src/common/default/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends DefaultEntity {
  /** 이름 */
  @Column()
  name: string;

  /** 권한 */
  @Column()
  role?: string;

  /** 이메일 */
  @Column()
  email: string;

  /** 비밀번호 */
  @Column({ nullable: true })
  password?: string;

  /** 주소 */
  @Column()
  address: string;

  /** 전화번호 */
  @Column()
  phone: string;
}
