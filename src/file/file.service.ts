import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
import { FileType } from './file.interface';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream/promises';

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
  async uploadFile(multerFile: FileType, hostname: string, priority = 0) {
    const extname = path
      .extname(multerFile.originalname)
      .toLowerCase()
      .substring(1);
    const tempName = `${crypto.randomBytes(16).toString('hex')}.${extname}`;
    const tempPath = path.join(process.cwd(), '/upload', tempName);
    await fs.promises.writeFile(tempPath, multerFile.buffer);

    const hash = crypto.createHash('md5');
    await stream.pipeline(fs.createReadStream(tempPath), hash);
    const md5 = hash.digest('hex');

    const targetPath = path.join(process.cwd(), '/upload', `${md5}.${extname}`);
    if (fs.existsSync(targetPath) === false) {
      await fs.promises.rename(tempPath, targetPath);
    } else {
      fs.promises.rm(tempPath);
    }

    const size = (await fs.promises.stat(targetPath)).size;

    const file = await this.#fileRepository.create({
      filename: multerFile.originalname,
      mimetype: multerFile.mimetype,
      size: size,
      md5: md5,
      priority: priority,
      url: new URL(path.join('/upload', `${md5}.${extname}`), hostname).href,
    });

    return await this.#fileRepository.save(file);
  }
}
