import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'defualtEntity' })
export abstract class defualtEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** 데이터 생성일 */
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  /** 데이터 수정일 */
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  /** 데이터 삭제일 */
  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
