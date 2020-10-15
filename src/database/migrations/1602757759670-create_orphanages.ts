import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602757759670 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'orphanages',
            columns:[
              {
                name: 'id',
                type:'integer',
                unsigned: true,//coluna não pode ser negativa, sempre será um número positivo
                isPrimary:true,
                isGenerated:true,//coluna gerada automaticamente
                generationStrategy:'increment',//autoincrement
              },
              {
                  name: 'name',
                  type: 'varchar'
              },
              {
                  name:'latitude',
                  type:'decimal',
                  scale:10, //max numero apos a virgula
                  precision:2,//max numero antes da virgula
              },
              {
                name:'longitude',
                type:'decimal',
                scale:10,
                precision:2,
              },
              {
                name:'about',
                type:'text'  
              },
              {
                name:'instructions',
                type:'text'  
              },
              {
                name:'open_on_weekends',
                type:'boolean',
                default: false  
              },
              {
                  name:'opening_hours',
                  type:'varchar'
              }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
