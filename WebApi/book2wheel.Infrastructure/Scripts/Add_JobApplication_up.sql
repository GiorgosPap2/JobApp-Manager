IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[JobApplication]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[JobApplication](
    [Id] [uniqueidentifier] NOT NULL,
    [Name] [varchar](50) NOT NULL,
    [Surname] [varchar](50) NOT NULL,
    [Comments] [varchar](50) NULL
    CONSTRAINT [PK_JobApplication] PRIMARY KEY CLUSTERED
(
[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]
END
GO