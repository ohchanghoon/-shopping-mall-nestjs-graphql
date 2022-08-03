import {
  BadRequestException,
  Controller,
  InternalServerErrorException,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
  async uploadFile(@UploadedFile() file: FileType) {
    if (file === undefined || file === null) {
      throw new BadRequestException();
    }

    try {
      return await this.#fileService.uploadFile(file);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
