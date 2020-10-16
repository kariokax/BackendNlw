import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602813486168 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
              {
                name: 'id',
                type:'integer',
                unsigned: true,
                isPrimary:true,
                isGenerated:true,
                generationStrategy:'increment',
              },
              {
                name:'path',
                type: 'varchar',
              },
              {
                name:'orphanage_id',
                type:'integer',
              }
            ],
            foreignKeys: [
              {
                name: 'ImageOrphanage',
                columnNames: ['orphanage_id'],//nome da coluna que armazena o relacionamento
                referencedTableName: 'orphanages',//qual tabela está se relacionando
                referencedColumnNames: ['id'],// qual coluna na tabela "orphanages" que a columnNames está selecionando
                onUpdate: 'CASCADE',//o que acontece ao atualizar a foreignKey relacionada//CASCADE -> altera o id automaticamente
                onDelete: 'CASCADE',//o que acontece ao deletar a foreignKey relacionada
              }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
