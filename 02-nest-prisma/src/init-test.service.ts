import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class InitTestService {
  constructor(private prisma: PrismaService) {}

  async init() {
    for (let i = 1; i < 10; i++) {
      const email = 'eee' + i + '@rrr.rr';
      const newUser: Prisma.UserCreateInput = { email: email };

      const user = await this.prisma.user.create({
        data: newUser,
      });

      // console.log('user:', user);

      for (let j = 1; j < 10; j++) {
        const newPost: Prisma.PostCreateInput = {
          title: 'title N' + j,
          content: 'content N' + j,
          author: { connect: { email: user.email } },
        };
        const post = await this.prisma.post.create({
          data: newPost,
        });
        //    console.log(post);
      }
    }
  }
}
