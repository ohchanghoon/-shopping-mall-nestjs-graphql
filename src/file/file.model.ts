import { Field, ObjectType } from '@nestjs/graphql';
import { DefaultModel } from 'src/common/default/default.model';

@ObjectType({ description: '파일' })
export class File extends DefaultModel {
  @Field((type) => String)
  filename: string;

  @Field((type) => String)
  mimetype: string;

  /**
   * 중복 확인용 MD5 체크섬
   */
  @Field((type) => String, { description: 'MD5 체크섬' })
  md5: string;

  /**
   * 파일 실제 경로
   */
  @Field((type) => String, { description: '파일 경로' })
  url: string;
}
