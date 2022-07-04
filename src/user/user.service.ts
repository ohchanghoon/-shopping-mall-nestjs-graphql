import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserCreateInput, UserModel, UserUpdateInput } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  salt = bcrypt.genSalt(10);
  #userRepository: Repository<UserEntity>;
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    this.#userRepository = userRepository;
  }
  async create(data: UserCreateInput): Promise<UserModel> {
    const user = await this.findOne(data.email);
    if (user) throw new BadRequestException('이미 가입된 이메일입니다.');

    const hash = await bcrypt.hash(data.password, await this.salt);
    data.password = hash;
    data.phone = data.phone.replace(/-/gi, '');

    const result = await this.#userRepository.save(data);
    return result;
  }

  async findOne(email: string) {
    const user = await this.#userRepository.findOne({ where: { email } });

    if (!user) return null;
    return user;
  }

  async update(email: string, password: string, data: UserUpdateInput) {
    const user = await this.findOne(email);
    if (!user) throw new BadRequestException('회원 정보를 찾을 수 없습니다.');

    const isRightPassword = await bcrypt.compare(password, user.password);
    if (!isRightPassword) throw new BadRequestException('비밀번호가 틀립니다.');

    await this.#userRepository.update(user.id, {
      name: data.name ? data.name : user.name,
      role: data.role ? data.role : user.role,
      address: data.address ? data.address : user.address,
      phone: data.phone ? data.phone : user.phone,
    });

    return (await this.#userRepository.findOne({ id: user.id })) ?? null;
  }
}
