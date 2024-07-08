import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Category } from '../types/showCategory.type';
import { ShowTime } from './showtime.entity';

@Entity({
  name: 'show',
})
export class Show {
  @PrimaryGeneratedColumn()
  showId: number;

  @Column({ type: 'varchar', nullable: false }) // 공연명
  showName: string;

  @Column({ type: 'text', nullable: false }) // 공연소개
  description: string;

  @Column({ type: 'enum', enum: Category, nullable: false }) // 공연 카테고리
  category: Category;

  @Column({ type: 'varchar', nullable: false }) // 공연 장소
  location: string;

  @Column({ type: 'int', default: 50000, nullable: false }) //공연 금액
  price: number;

  @Column({ type: 'varchar', nullable: true }) //공연 이미지
  imageUrl: string;

  @Column({ type: 'json', nullable: false }) //공연 날짜, 시간(배열로)
  showDateTime: string[];

  @Column({ type: 'int', nullable: false }) // 공연 총시간, 뮤지컬로 예를 들면 런타임 180분
  showRuntime: number;

  @Column({ type: 'int', default: 2000, nullable: false }) // 좌석수
  totalSeats: number;

  @CreateDateColumn() // 생성일
  createdAt: Date;

  @UpdateDateColumn() // 업데이트일
  updatedAt: Date;

  @OneToMany(() => ShowTime, (showTime) => showTime.show, { cascade: true }) // 공연과 공연시간 1:n 관계
  showTimes: ShowTime[];

  // @OneToMany(() => Reservation, (reservation) => reservation.show) // 공연과 예약 1대n 관계
  // reservations: Reservation[];
}
