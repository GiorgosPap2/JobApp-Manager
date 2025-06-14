IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[JobPostings]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[JobPostings](
    [Id] [uniqueidentifier]  NOT NULL,
    [JobTitle] NVARCHAR(255),
    [Location] NVARCHAR(255),
    [PostingContent] NVARCHAR(MAX), -- stores the HTML template
    [CreatedDate] [DATETIME]  null,
    [ModifiedDate] [DATETIME] null
    CONSTRAINT [PK_JobPostings] PRIMARY KEY CLUSTERED
(
[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]
END
GO