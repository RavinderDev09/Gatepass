import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { VisitorModule } from './visitor/visitor.module';
import { VisitorEntryModule } from './visitor-entry/visitor-entry.module';


@Module({
  imports: [  
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: false,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    debug:true,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],

  }), 
  MongooseModule.forRoot('mongodb+srv://ravinder:ravi1234@cluster0.mcajp.mongodb.net/'), VisitorModule, VisitorEntryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
