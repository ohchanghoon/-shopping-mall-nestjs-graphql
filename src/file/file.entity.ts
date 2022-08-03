import { DefaultEntity } from 'src/common/default/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  orderBy: {
    priority: 'ASC',
    createdAt: 'DESC',
  },
})
export class FileEntity extends DefaultEntity {
  @Column()
  filename: string;

  @Column()
  mimetype: string;

  @Column('integer', { nullable: true })
  size: number;

  @Column()
  md5: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  priority: number;
}
