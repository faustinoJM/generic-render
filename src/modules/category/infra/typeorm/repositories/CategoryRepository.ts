import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../shared/infra/typeorm';
import ICreateDepartmentDTO from '../../../dtos/ICreateDepartmentDTO';
import IDepartmentsRepository from '../../../repositories/IDepartmentsRepository';
import Department from '../entities/Department';


class CategoryRepository implements IDepartmentsRepository {
  private ormRepository: Repository<Department>;

  constructor() {
      this.ormRepository = AppDataSource.getRepository(Department);
  }
  
  public async create({ id, company_id, department_id, name }: ICreateDepartmentDTO): Promise<Department> {

      const department = this.ormRepository.create({
        id,
        company_id,
        department_id,
        name
      })

      await this.ormRepository.save(department);

      return department;
  }

  public async findByName(name: string, company_id: string): Promise<Department | null> {
       const findDepartment = await this.ormRepository.findOne({
      where: { name, company_id }
    });

    return findDepartment;
  }

  public async findById(id: string): Promise<Department | null> {
    const findDepartment = await this.ormRepository.findOne({
   where: { id }
 });

 return findDepartment;
  }

  async list(company_id: string): Promise<Department[] | []> {
    const list = await this.ormRepository.find({
      where: { company_id }
    });

        return list;
  }

  async listAll(): Promise<Department[] | []> {
    const list = await this.ormRepository.find();

        return list;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }
}

export default CategoryRepository
