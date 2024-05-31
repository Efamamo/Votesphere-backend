import { IsNotEmpty } from 'class-validator';

export class changePasswordDto {
  @IsNotEmpty({ message: 'old password cannot be empty' })
  oldPassword: string;
 
  @IsNotEmpty({ message: 'new Password cannot be empty' })
  newPassword: string;
}
