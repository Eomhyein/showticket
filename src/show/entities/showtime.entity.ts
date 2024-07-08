import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Show } from './show.entity';

@Entity({
  name: 'show_times',
})
export class ShowTime {
  @PrimaryGeneratedColumn() // 공연시작 id
  showTimeId: number;

  @Column({ name: 'show_id', type: 'int', nullable: false }) // 공연 id
  showId: number;

  @Column({ type: 'varchar' }) // 공연 시작 시간
  startTime: string;

  @Column({ type: 'int', nullable: false }) // 남은 좌석수
  remainSeats: number;

  @CreateDateColumn() // 생성일
  createdAt: Date;

  @UpdateDateColumn() // 업데이트일
  updatedAt: Date;

  @ManyToOne(() => Show, (show) => show.showTimes, { onDelete: 'CASCADE' }) // 공연 시간과 공연 다:1 관계
  @JoinColumn({ name: 'show_id', referencedColumnName: 'showId' })
  show: Show;
}
