import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Address } from './address/address.entity';
import { Global } from '@nestjs/common';

@Global()
@Entity()
export class Contact {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @OneToMany(() => Address, (address) => address.contact)
  addresses = new Collection<Address>(this);
}
