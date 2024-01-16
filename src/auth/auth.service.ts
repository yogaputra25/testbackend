import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDto } from 'src/user/dto/createuser.dto';

import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserService,
    private encryp: BcryptService,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateDto): Promise<any> {
    const user = new User();
    user.username = data.username;
    user.email = data.email;
    user.password = await this.encryp.passwordhast(data.password);
    const userData = this.userRepository.createUser(user);
    return {
      name: (await userData).username,
      email: (await userData).email,
      id: (await userData).id,
    };
  }

  //   async validateUser(data:LoginDto): Promise<any> {
  //       const email = data.email
  //     const user = await this.userRepository.getUserOne({ where: { email } });
  //     if (!user) return null;
  //     const passwordValid = await bcrypt.compare(data.password, user.password)
  //     if (!user) {
  //         throw new NotAcceptableException('could not find the user');
  //     }
  //     if (user && passwordValid) {
  //         return user;
  //     }
  //     return null;
  // }

  //   async validate(data: LoginDto): Promise<any> {
  //       const user = await this.validateUser(data);
  //       const payload = {
  //         userId: user.id,
  //       };
  //     if (!user) {
  //       throw new UnauthorizedException();
  //     }
  //     return {
  //         access_token: this.jwtService.sign(payload),
  //         userId: user.id,
  //         userName: user.name
  //       };
  //   }

  async login(user: User) {
    const payload = {
      username: user.username,
      sub: {
        name: user.username,
      },
    };

    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async validateUser(username: string, password: string) {
    // const email = username;
    const user = await this.userRepository.getUserOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async refreshToken(user: User) {
    const payload = {
      username: user.username,
      sub: {
        name: user.username,
      },
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // async login(username: string, password: string): Promise<any> {
  //     const user = await this.userRepository.findOne({ username });
  //     if (!user || !(await user.comparePassword(password))) {
  //         throw new Error('Invalid credentials');
  //     }
  //     const payload = { username: user.username, userId: user.id };
  //     return {
  //         token: this.jwtService.sign(payload),
  //         user,
  //     };
  // }
}
