import { MigrationInterface, QueryRunner } from 'typeorm';

export class User21612902269390 implements MigrationInterface {
  name = 'User21612902269390';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "lastName" TO "lastName2"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "lastName2" TO "lastName"`,
    );
  }
}
