import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** 데이터 생성일 */
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  /** 데이터 수정일 */
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  /** 데이터 삭제일 */
  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
