import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
import { FileType } from './file.interface';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  #fileRepository: Repository<FileEntity>;
  constructor(
    @InjectRepository(FileEntity) fileRepository: Repository<FileEntity>,
  ) {
    this.#fileRepository = fileRepository;
    const uploadPath = path.join(process.cwd(), '/upload');
    if (fs.existsSync(uploadPath) === false) {
      fs.mkdirSync(uploadPath);
    }
  }
  async uploadFile(file: FileType) {
    const extname = path.extname(file.originalname).toLowerCase().substring(1);
    const tempName = `${crypto.randomBytes(16).toString('hex')}.${extname}`;
    const tempPath = path.join(process.cwd(), '/upload', tempName);

    await fs.promises.writeFile(tempPath, file.buffer);
  }
}
