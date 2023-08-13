import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsBoolean } from "class-validator";

export class UpdateAlbumtDTO {
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ type: Boolean, description: "Por padrão o valor vem (false)", example: true })
    is_favorite?: boolean;
}