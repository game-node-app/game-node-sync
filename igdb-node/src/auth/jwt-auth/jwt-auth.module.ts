import { Module } from "@nestjs/common";
import { JwtAuthService } from "./jwt-auth.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    providers: [JwtAuthService],
    exports: [JwtAuthService],
})
export class JwtAuthModule {}
