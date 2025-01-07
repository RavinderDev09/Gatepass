import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { VisitorModule } from './visitor/visitor.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';


@Module({
  imports: [  
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],

  }), 
  VisitorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
