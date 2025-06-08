namespace book2wheel.Infrastructure;

    public static class MigrationUtility
    {

        /// Read a SQL script that is embedded into a resource.

        /// The migration type the SQL file script is attached to.
        /// The embedded SQL file name.
        /// The content of the SQL file.

        public static string ReadSql(Type migrationType, string sqlFileName)
        {
            var assembly = migrationType.Assembly;

            var sqlFile = assembly.GetName().Name + ".Scripts." + sqlFileName;

            if (assembly is null) return string.Empty;

            using Stream? stream = assembly.GetManifestResourceStream(sqlFile) ?? throw new FileNotFoundException("Unable to find the SQL file from an embedded resource", sqlFile);

            using var reader = new StreamReader(stream);

            string content = reader.ReadToEnd();

            return content;
        }
    }
