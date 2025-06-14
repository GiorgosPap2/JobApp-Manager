using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace book2wheel.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Add_JobPostingsEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            string fileName = @"Add_JobPostingsEntity_up.sql";
            string sql = MigrationUtility.ReadSql(this.GetType(), fileName);
            migrationBuilder.Sql(sql);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            string fileName = @"Add_JobPostingsEntity_down.sql";
            string sql = MigrationUtility.ReadSql(this.GetType(), fileName);
            migrationBuilder.Sql(sql);
        }
    }
}
