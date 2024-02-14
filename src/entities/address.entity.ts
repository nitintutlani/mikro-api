import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Contact } from './contact.entity';

@Entity()
export class Address {
  @PrimaryKey()
  id: number;

  @Property()
  address: string;

  @ManyToOne(() => Contact)
  contact: Contact;
}
