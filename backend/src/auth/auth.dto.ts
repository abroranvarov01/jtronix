import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin@petronix.uz' })
  email: string;

  @ApiProperty({ example: 'admin123' })
  password: string;
}

export class RegisterDto {
  @ApiProperty({ example: 'user@mail.com' })
  email: string;

  @ApiProperty({ example: 'mypassword' })
  password: string;

  @ApiProperty({ example: 'John' })
  name: string;

  @ApiPropertyOptional({ enum: ['ADMIN', 'DEALER'], default: 'DEALER' })
  role?: 'ADMIN' | 'DEALER';
}
