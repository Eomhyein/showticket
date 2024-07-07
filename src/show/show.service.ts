import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Show } from './entities/show.entity';
import { Repository } from 'typeorm';
import { CreatedShowDto } from './dto/created-show.dto';
import { Category } from './types/showCategory.type';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show)
    private showRepository: Repository<Show>,
  ) {}

  // 새 공연 생성
  async createdShow(createdShowDto: CreatedShowDto) {
    const newShow = await this.showRepository.save(createdShowDto);
    return newShow;
  }

  // 공연 전체 조회(카테고리에 내용 없으면)
  async findAll(category: Category): Promise<Show[]> {
    return await this.showRepository.find({ where: { category } });
  }

  // 공연 상세 조회
  async findById(showId: number): Promise<Show> {
    return await this.showRepository.findOne({ where: { showId } });
  }
  // 공연 검색
  async searchByShowName(showName: string): Promise<Show[]> {
    console.log(showName);
    return await this.showRepository.find({ where: { showName: showName } });
  }
}
