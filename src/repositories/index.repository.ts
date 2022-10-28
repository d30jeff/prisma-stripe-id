import { CatRepository } from '@repositories/cat.repository';
import { OwnerRepository } from '@repositories/owner.repository';

export const repositories = {
  owner: new OwnerRepository(),
  cat: new CatRepository()
}
