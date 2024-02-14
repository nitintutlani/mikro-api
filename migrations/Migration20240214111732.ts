import { Migration } from '@mikro-orm/migrations';

export class Migration20240214111732 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "contact" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('create table "address" ("id" serial primary key, "address" varchar(255) not null, "contact_id" int not null);');

    this.addSql('alter table "address" add constraint "address_contact_id_foreign" foreign key ("contact_id") references "contact" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "address" drop constraint "address_contact_id_foreign";');

    this.addSql('drop table if exists "contact" cascade;');

    this.addSql('drop table if exists "address" cascade;');
  }

}
