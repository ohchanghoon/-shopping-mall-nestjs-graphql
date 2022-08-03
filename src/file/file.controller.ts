import {
  BadRequestException,
  Controller,
  InternalServerErrorException,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FileType } from './file.interface';
import { FileService } from './file.service';

@Controller('upload')
export class FileController {
  #fileService: FileService;
  constructor(fileService: FileService) {
    this.#fileService = fileService;
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: FileType, @Req() req: Request) {
    if (file === undefined || file === null) {
      throw new BadRequestException();
    }

    const protocol =
      req.headers['X-Forwarded-Proto'] ??
      req.headers['x-forwared-proto'] ??
      req.protocol;
    const hostname = req.headers.host ?? req.hostname;

    try {
      return await this.#fileService.uploadFile(
        file,
        `${protocol}://${hostname}`,
      );
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
