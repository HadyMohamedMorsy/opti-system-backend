import { MigrationInterface, QueryRunner } from "typeorm";

export class SecoundMigration1766735138477 implements MigrationInterface {
    name = 'SecoundMigration1766735138477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "meta_title"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "meta_description"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "meta_keywords"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "sub_title"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "short_description"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "meta_title"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "meta_description"`);
        await queryRunner.query(`ALTER TABLE "sub_category" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "sub_category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "sub_category" DROP COLUMN "icon"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "icon"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "content" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "store_email" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "store_phone" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "gtm_enabled" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "twitter_url" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "smtp_host" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "smtp_port" integer`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "smtp_email" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "smtp_password" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "maintenance_mode" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "content" json`);
        await queryRunner.query(`ALTER TABLE "sub_category" ADD "content" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "content" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "sub_category" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "maintenance_mode"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "smtp_password"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "smtp_email"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "smtp_port"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "smtp_host"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "twitter_url"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "gtm_enabled"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "store_phone"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "store_email"`);
        await queryRunner.query(`ALTER TABLE "general_settings" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "icon" character varying`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sub_category" ADD "icon" character varying`);
        await queryRunner.query(`ALTER TABLE "sub_category" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sub_category" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "meta_description" text`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "meta_title" character varying`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "short_description" text`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "sub_title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "meta_keywords" text`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "meta_description" text`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "meta_title" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "email" character varying`);
        await queryRunner.query(`ALTER TABLE "general_settings" ADD "name" character varying`);
    }

}
