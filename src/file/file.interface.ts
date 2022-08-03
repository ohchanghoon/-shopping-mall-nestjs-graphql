export type FileType = Express.Multer.File;

/**
 * 업로드 결과
 */
export interface UploadResult {
  /**
   * 파일 이름
   */
  fileName: string;
  /**
   * 파일 경로
   */
  url: string;
}

/**
 * 업로드 방법
 */
export interface UploadMethod {
  /**
   * 파일 업로드
   * @param file 파일
   */
  uploadFile(file: FileType): Promise<UploadResult>;
  /**
   * 파일 존재 여부 확인
   * @param fileName 실제 파일 이름
   */
  isExists(fileName: string): Promise<boolean>;
}
