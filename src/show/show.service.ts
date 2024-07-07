import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Show } from './entities/show.entity';
import { Repository } from 'typeorm';
import { CreatedShowDto } from './dto/created-show.dto';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show)
    private showRepository: Repository<Show>,
    private readonly jwtService: JwtService,
  ) {}

  // 새 공연 생성
  async createdShow(createdShowDto: CreatedShowDto): Promise<Show> {
    const {
      showName,
      description,
      category,
      location,
      price,
      image_url,
      show_datetime,
      show_runtime,
      total_seats,
    } = createdShowDto;
    const newShow = this.showRepository.create({
      showName,
      description,
      category,
      location,
      price,
      image_url,
      show_datetime,
      show_runtime,
      total_seats,
    });
    return await this.showRepository.save(newShow);
  }

  // 공연 전체 조회
  async findAll(): Promise<Show[]> {
    return await this.showRepository.find();
  }
  // // 공연 카테고리로 조회
  // async findByCategory(category: string): Promise<Show> {
  //   return await this.showRepository.find({ where: { category } });
  // }

  // 공연 상세 조회
  async findById(showId: number): Promise<Show> {
    return await this.showRepository.findOne({ where: { showId } });
  }
  // 공연 검색
  async searchByShowName(showName: string): Promise<Show[]> {
    return await this.showRepository.find({ where: { showName } });
  }
}
